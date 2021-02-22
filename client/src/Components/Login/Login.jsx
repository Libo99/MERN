import React, { useState } from "react";
import "./Login.css";
import GoogleLogin from "react-google-login";
import axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:6592/user";

  const GoogleSuccess = (res) => {
    console.log(res);
    axios.post(url, {
      data: {tokenId: res.tokenId}
    }).then(res => console.log(res))
    ;
  };
  const GoogleError = (res) => {
    console.log("Sign in was unsuccessful");
  };

  return (
    <div id="container">
      <div className="Login">
        <h1 className="login-header">Login</h1>
        <div id="form-container">
          <form>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>

            <GoogleLogin
              clientId="311552585779-lc65857lq7vdnkosuf1a2agsc6n40mab.apps.googleusercontent.com"
              render={(renderProps) => (
                <button onClick={renderProps.onClick}>Google Login</button>
              )}
              buttonText="Login"
              onSuccess={GoogleSuccess}
              onFailure={GoogleError}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
