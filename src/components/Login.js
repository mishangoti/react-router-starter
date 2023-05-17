import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Login = () => {
    const [user, setUser] = useState('second')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }
    return (
        <div>
            <label>
                UserName: <input type='text' onChange={e => setUser(e.target.value)}></input>
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login