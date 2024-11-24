import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import signIn from '../../assets/pablo-sign-in 1.svg';
import classes from '../Login/Login.module.scss';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={classes.Login}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <div className={classes.InnerLogin}>
        {/* Left Section */}
        <div className={classes.LoginLeft}>
          <img src={signIn} alt="Sign In Illustration" />
        </div>

        {/* Right Section */}
        <div className={classes.LoginRight}>
          <h2>Welcome!</h2>
          <h3>Enter details to login.</h3>
          <form>
            <input className={classes.EmailInput} type="text" placeholder="Email Address" />
            <div className={classes.PasswordInput}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <span
                className={classes.TogglePassword}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </span>
            </div>
            <a href="#forgotpassword">FORGOT PASSWORD?</a>
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
