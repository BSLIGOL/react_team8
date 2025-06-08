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
                // prev는 이전 상태를 의미
                // React는 setForm에 함수가 전달되면, 이 함수를 실행할 때 현재 상태의 
                // 가장 최신 스냅샷을 그 함수의 첫 번째 인자로 넣어줌
                // 따라서 prev는 항상 최신 상태를 가리키게 됨
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
                // 대괄호를 입력하지 않으면 name은 단순히 문자열 리터럴로 인식 됨
                // 계산된 속성 이름(Computed Property Name), 객체의 속성을 동적으로 지정
            }))
        }
    }

    // 동작은 하는데 초보자용
    // const onChange = (e) => {
    //     const {name, value} = e.target;
    //     if(name === 'company.name') {
    //         setForm({
    //             ...form,
    //             company: {
    //                 ...form.company,
    //                 name:value
    //             }
    //         })
    //     } else {
    //         setForm({
    //             ...form,
    //             [name]:value
    //             // 대괄호를 입력하지 않으면 name은 단순히 문자열 리터럴로 인식 됨
    //             // 계산된 속성 이름(Computed Property Name), 객체의 속성을 동적으로 지정
    //         })
    //     }
    // }

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