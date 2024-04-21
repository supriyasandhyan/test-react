import React from "react";
import '../CSS/Style.css'

const Login = () => {

  const handlelogin = () =>{
    alert ("Login successfully")
  }

  return (
    <div>
      <h1>Login Here</h1>
      <div className="container">
        <form className="Loginform">
          <div className="mail">
            <label>Email</label>
            <input type="text" placeholder="Email" id="emmail" required/>
          </div>
          <div className="mail">
            <label>Password</label>
            <input type="password" placeholder="*****" name="password" required/>
          </div>
          <div className="mail">
            <button onClick={handlelogin} className="bttn" type="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
