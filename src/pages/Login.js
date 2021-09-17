import React, {useState} from 'react'

export const Login = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }
    const passwordHandler = (e) =>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <h1>Login page</h1>
            <input onChange={emailHandler} value={email} type="email" />
            <input onChange={passwordHandler} value={password} type="password" />
            <button >Login</button>
            <button >Register</button>
        </div>
    )
}
