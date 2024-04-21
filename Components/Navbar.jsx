import React from 'react'
import '../CSS/Style.css'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <a href='/'><h4>HOME</h4></a>
        <a href='/about'><h4>ABOUT</h4></a>
        <a href='/gallery'><h4>GALLERY</h4></a>
        <a href='/login'><h4>LOGIN</h4></a>
        <a href='/register'><h4>REGISTER</h4></a> 
    </div>
    <hr/>
    </>
  )
}

export default Navbar