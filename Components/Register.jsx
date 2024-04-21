import React from 'react'
import '../CSS/Style.css'

const Register = () => {
  return (
    <div>
      <h1>Register Here</h1>
      <div className='reg'>
        <label>Username</label>
        <input type='text' placeholder='Username' />
        <label>Email</label>
        <input type='text' placeholder='Email' />
        <label>Password</label>
        <input type='password' placeholder='Password' />
        <hr/>
        <button type='button' className='boton'>Register</button>
      </div>
    </div>
  )
}

export default Register