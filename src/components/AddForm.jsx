import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { VipContext } from "./VipContext";

function AddForm() {
    const navigate = useNavigate()
    const { vips, setVips } = useContext(VipContext)

    const[form, setForm] = useState({
        username:'',
        name:'',
        email:'',
        phone:'',
        company: {
            name: ''
        }
    })

    const onChange = (e) => {
        const {name, value} = e.target;
        if(name === 'company.name') {
            setForm((prev) => ({
                ...prev,
                company: {
                    ...prev.company,
                    name:value
                }
            }))
        } else {
            setForm((prev) => ({
                ...prev,
                [name]:value
            }))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const newVip = {
            id: vips.length + 1,
            username: form.username,
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: {  
                name: form.company.name
            }
        }

        setVips((prev) => [...prev, newVip])
        navigate('/')
    }

    return (
        <div>
            <h1>VIP 추가</h1>
            
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="닉네임" 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="이름" 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="이메일" 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="전화번호" 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type="text" 
                        name="company.name" 
                        placeholder="회사명" 
                        onChange={onChange} 
                        required
                    />
                </div>
                
                <div>
                    <button 
                        type="submit"
                    >
                        추가
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

export default AddForm