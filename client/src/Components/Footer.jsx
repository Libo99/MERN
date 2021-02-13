import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
          <p>Copyright © {new Date().getFullYear()}, Rage Media - All Rights Reserved </p>
        </div>
      </div>
  );
};

export default Footer;
