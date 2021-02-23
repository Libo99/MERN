import React, { useState } from "react";
import "./Login.css";
// import GoogleLogin from "react-google-login";
// import axios from "axios";
import LoginButton from './LoginButton';

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:6592/user/login";

  // const GoogleSuccess = (res) => {
  //   console.log(res);
  //   axios.post(url, {
  //     data: {tokenId: res.tokenId}
  //   }).then(res => console.log(res))
  //   ;
  // };
  // const GoogleError = (res) => {
  //   console.log("Sign in was unsuccessful");
  // };

  const Handechange = (e) => {
  e.preventDefault();
  }

  return (
    <div id="container">
      <div className="Login">
        <h1 className="login-header">Login</h1>
        <div id="form-container">
          <form onSubmit={Handechange}>
            <label htmlFor="mail">Mail:</label>
            <input
              type="text"
              name="mail"
              id="mail"
              onChange={(e) => setMail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="form-button" type="submit">
              Login
            </button>

            {/* <GoogleLogin
              clientId="311552585779-lc65857lq7vdnkosuf1a2agsc6n40mab.apps.googleusercontent.com"
              render={(renderProps) => (
                <button onClick={renderProps.onClick}>Google Login</button>
              )}
              buttonText="Login"
              onSuccess={GoogleSuccess}
              onFailure={GoogleError}
              cookiePolicy={"single_host_origin"}
            /> */}
            <LoginButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
