import React from 'react';
import '../Home.css'



const Home = () => {
  return (
    <div className="Home-container">
      <div className="hero-header">
        <h3 className="hero-text">Welcome</h3>
        <button className="btn">
          <a href="SignUp">Hej</a>
        </button>
      </div>
      <div className="About">
        <h1 className="about-header">About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sit vel. At in atque tempora vel! Ipsa saepe quo repellat animi ab sunt nam quibusdam.</p>
      </div>
    </div>
  );
};

export default Home;
