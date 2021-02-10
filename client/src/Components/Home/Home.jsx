import React from "react";
import "./Home.css";
import Header from './Header';
import About from "./About";

const Home = () => {
  return (
    <div className="Home-container">
      <Header/>
      <About />
    </div>
  );
};

export default Home;
