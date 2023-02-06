import React, { useState } from "react";
import Header from "../Components/Header";
import "./Login.css";
import Profile from "./Profile";
import Footer from "../Components/Footer";
import SocialLogin from "../Components/SocialLogin";



function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1@gmail.com",
      password: "pass1"
    },
    {
      username: "user2@gmail.com",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (


    <><Header /><div className="Auth-form-container">
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="uname"
              className="form-control mt-1"
              placeholder="Enter email"
              required />
            {renderErrorMessage("uname")}
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="pass"
              className="form-control"
              placeholder="Enter password"
              required />
            {renderErrorMessage("pass")}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn-primary">
              Submit
            </button>

          </div>
          
          <div className="socialLogin">
          <SocialLogin/>
          </div>

          


          <p className="forgot-password">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
     
    </div>
      <Footer /></>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div><Profile /></div> : renderForm}
      </div>

    </div>
  );
}

export default Login;