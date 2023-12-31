import React, { useState } from 'react'
import './Login.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = async () => {
        // if( !name || !email || !password || !file ){
        //   alert("Please fill out all fields")
        //   return
        // }

        try {
            const response = await axios.post('/api/user/login', { email, password });
            localStorage.setItem('user', JSON.stringify(response));
            console.log(response.data)
            navigate('/chats')
        }
        catch (e) {
            console.log(e)
        }
    }
    return (

        <div class="container">

            <div class="login">

                <h1>Login</h1>

                <div className='form'>
                    <div class="input-box">
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <i class="fa fa-envelope"></i>
                    </div>

                    <div class="input-box">
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <i class="fa fa-lock"></i>
                    </div>

                    <button onClick={handleSubmit} >LOGIN</button>

                    <div class="links">
                        <Link to='/register' >Forgot password ?</Link>
                        <Link to='/register' >You don't have an account ?</Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login