import React from 'react';
import './Header.css'
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
  const { isAuthenticated } = useAuth0();


    return (
      <div className="hero-header">
        <h3 className="hero-text">Welcome</h3>
        {isAuthenticated ? null : <a href="SignUp">
          <button className="btn">Sign Up</button>
        </a> }
        
      </div>
    );
}

export default Header;