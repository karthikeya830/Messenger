import React, { useState } from 'react'
import axios from 'axios'
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const [pic, setPic] = useState()
  // const [file, setFile] = useState(null)
  const navigate = useNavigate()
  // const handleFileChange = (e) => {
  //   const nfile = e.target.files[0];
  //   setFile(nfile);
  //   handleUpload()
  // };

  // const handleUpload = async () => {
  //   if (!file) {
  //     console.error('No file selected');
  //     return;
  //   }

  //   try {
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append('upload_preset', 'ChatApplicationProfilepictures'); // Set your Cloudinary upload preset
  //     const response = await fetch('https://api.cloudinary.com/v1_1/dej8hlkax/image/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     const data = await response.json();
  //     const newImageUrl = data.secure_url;
  //     setPic(newImageUrl);
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  // };

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      alert("Please fill out all fields")
      return
    }

    try {
      const response = await axios.post('/api/user/register', { name, email, password });
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

        <h1>Register</h1>

        <div className='form' action="">
          <div class="input-box">
            <input type="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <i class="fa fa-envelope"></i>
          </div>
          <div class="input-box">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <i class="fa fa-envelope"></i>
          </div>

          <div class="input-box">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <i class="fa fa-lock"></i>
          </div>

          <div class="input-box">
            <input type="file" accept="image/*" />
            <i class="fa fa-envelope"></i>
          </div>

          <button type="" onClick={handleSubmit}>Register</button>

          <div class="links">
            <Link to='/' href="#">Already have an account ?</Link>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Register