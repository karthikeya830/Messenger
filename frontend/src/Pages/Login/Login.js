import React, { useState } from 'react'
import './Login.css';
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async () => {
        // if( !name || !email || !password || !file ){
        //   alert("Please fill out all fields")
        //   return
        // }
    
        try{
          const response = await axios.post( '/api/user/login', { email, password} );
          console.log(response.data)
        }
        catch(e) {
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
                        <a href="#">Forgot password ?</a>
                        <a href="#">You don't have an account ?</a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login