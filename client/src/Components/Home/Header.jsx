import React from 'react';
import './Header.css'

const Header = () => {


    return (
      <div className="hero-header">
        <h3 className="hero-text">Welcome</h3>
        <a href="SignUp">
          <button className="btn">Sign Up</button>
        </a>
      </div>
    );
}

export default Header;