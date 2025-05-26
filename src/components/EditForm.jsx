import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { VipContext } from "./VipContext";

function EditForm() {
    const {id} = useParams()
    const {vips, setVips} = useContext(VipContext)
    const navigate = useNavigate()
    
    const vip = vips.find((vip) => vip.id === parseInt(id))

    const [form, setForm] = useState({
        username: '',
        name: '',
        email: '',
        phone: '',
        company: {
            name: ''
        }
    })

    useEffect(() => {
        if(vip) {
            setForm({...vip })
        } else {
            navigate('/');
        }
    }, [vip, navigate])
    
    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === "company.name") {
            setForm((prev) => ({
                ...prev,
                company: { ...prev.company, name: value }
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const updatedVips = vips.map((vip) =>
            vip.id === parseInt(id) ? { ...form } : vip
        );
        setVips(updatedVips);
        navigate('/');
    };

    return (
        <div>
            <h1>VIP 수정</h1>
            
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="username" 
                        value={form.username} 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type="email" 
                        name="email" 
                        value={form.email} 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type="text" 
                        name="phone" 
                        value={form.phone} 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type="text" 
                        name="company.name" 
                        value={form.company.name} 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <button 
                        type="submit"
                    >
                        수정
                    </button>
                    <button 
                        type="button" 
                        onClick={() => navigate('/')}
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditForm
