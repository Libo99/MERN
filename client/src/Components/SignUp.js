import React from "react";
import "../SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <form className="signup">
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => e.target.value}
          type="text"
          id="name"
          name="name"
          required="required"
        />

        <label htmlFor="username">Username:</label>
        <input
          onChange={(e) => e.target.value}
          type="text"
          id="username"
          name="username"
          required="required"
        />

        <label htmlFor="mail">Mail:</label>
        <input
          onChange={(e) => e.target.value}
          type="email"
          id="mail"
          name="mail"
          required="required"
        />

        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => e.target.value}
          type="password"
          id="password"
          name="password"
          required="required"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
