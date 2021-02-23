import React from 'react';
import './About.css';



const About = () => {


    return (
      <div className="About">
        <div className="about-header">
          <h1>About</h1>
          <div className="line"></div>
        </div>
        <div className="content">
          <div className="about-me">
            <h3 className="h3">About me</h3>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              sit vel. At in atque tempora vel! Ipsa saepe quo repellat animi ab
              sunt nam quibusdam.
            </p>
          </div>
          <img
            className="img"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="hej"
          />
        
        </div>
      </div>
    );
}

export default About;