import React from "react";
import "../Login.css";

const Login = () => {
  return (
    <div className="Login-container">
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
