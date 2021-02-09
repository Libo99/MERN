import React from "react";
import "./Home.css";
import About from "./About";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="hero-header">
        <h3 className="hero-text">Welcome</h3>
        <a href="SignUp">
          <button className="btn">Hej</button>
        </a>
      </div>
      <About />
    </div>
  );
};

export default Home;
