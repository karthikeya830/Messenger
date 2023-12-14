import React, { useState } from 'react'
import './Register.css';

const Register = () => {
  
  const [ name, setName ] = useState()
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()
  const [ file, setFile ] = useState(null)


  return (

    <div class="container">

      <div class="login">

        <h1>Register</h1>

        <form action="">
          <div class="input-box">
            <input type="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <i class="fa fa-envelope"></i>
          </div>
          <div class="input-box">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <i class="fa fa-envelope"></i>
          </div>

          <div class="input-box">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <i class="fa fa-lock"></i>
          </div>

          <div class="input-box">
            <input type="file" placeholder="Name" onChange={(e) => setFile(e.target.value)} />
            <i class="fa fa-envelope"></i>
          </div>

          <button type="">Register</button>

          <div class="links">
            <a href="#">Forgot password ?</a>
            <a href="#">You don't have an account ?</a>
          </div>

        </form>

      </div>

    </div>
  )
}

export default Register