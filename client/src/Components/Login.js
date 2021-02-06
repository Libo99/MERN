import React, { useState } from "react";
import "../Login.css";

const Login = () => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Login">
      <h1 className="login-header">Login</h1>
      <div className="Login-container">
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={(e) => setUserName(e.target.value)}/>

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
