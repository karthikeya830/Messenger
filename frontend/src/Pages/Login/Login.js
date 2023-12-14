import React from 'react'
import './Login.css';

const Login = () => {
    return (

        <div class="container">

            <div class="login">

                <h1>Login</h1>

                <form action="">
                   <div class="input-box">
                        <input type="email" placeholder="Email" />
                            <i class="fa fa-envelope"></i>
                    </div>

                    <div class="input-box">
                        <input type="password" placeholder="Password" />
                            <i class="fa fa-lock"></i>
                    </div>

                    <button type="submit">LOGIN</button>

                    <div class="links">
                        <a href="#">Forgot password ?</a>
                        <a href="#">You don't have an account ?</a>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Login