import React from "react";
import '../../App.css'
import ThemeToggle from "../ThemeToggle";

import facebookicon from "../../images/icons8-facebook-24.png"
import googleicon from "../../images/icons8-google-24.png"

import { useState } from 'react';

const Login= ({onLogin}) => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
    console.log(username);
  };

  return (
    <>
      <div className="login">
        <div className="theme-login">
          <ThemeToggle />
        </div>
        <section className="login__container ">
          <h2>Log in</h2>
          <form onSubmit={handleSubmit} className="login__container--form" action="">
              <input 
                className="input" 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                />
              <input   
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <button className="button" type="submit" /*</form>onClick={handleClick}*/> Log in</button>
              <div className="login__container--remember-me">
                  <label>
                      <input type="checkbox" name="" id="cbox1" value="checkbox"/> Remember me
                  </label>
                  <a href="/"> Forgot Password?</a>
              </div>
          </form>
          <section className="login__container--social-media ">
              <div>
                <img src={googleicon} alt=""/> <a href="/"> Log in with Google </a>
              </div> 
              <div>
                <img src={facebookicon} alt=""/> <a href="/"> Log in with Facebook </a>
                </div>
          </section>
          <p className="login__container--register">Don't have account? &nbsp; <a href=""> Register now</a></p>
        </section>
      </div>
    </>
   
  );
}

export default Login;