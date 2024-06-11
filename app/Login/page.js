'use client';
import './page.css'
import React, { useState } from 'react';
const Login = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };
  return (
    
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className={`form-container ${isSignUpActive ? 'sign-up-container' : 'sign-in-container'}`}>
        {isSignUpActive ? (
         <form action='https://spotify-clone-gxfm.onrender.com/register' method='POST'>
         <h1>Create Account</h1>
         <div className="social-container">
           <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
           <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
           <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
         </div>
         <span>or use your email for registration</span>
         <input type="text" id='firstname' className='firstname' name="firstname" placeholder="Name" />
         <input type="email" className='email' name="email" placeholder="Email" />
         <input type="password" className='password' name="password" placeholder="Password" />
         <button type="submit">Sign Up</button>
       </form>
        ) : (
          <form action="https://spotify-clone-gxfm.onrender.com/login" method='POST'>
            <div>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your account</span>
              <input type="email" name='email' placeholder="Email" />
              <input type="password" name='password' placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </div>
          </form>
        )}
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;