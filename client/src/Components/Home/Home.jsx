import React from "react";
import "./Home.css";
import Header from './Header';
import About from "./About";
import Footer from '../Footer';

const Home = () => {
  return (
    <div className="Home-container">
      <Header/>
      <About />
      <Footer/>
    </div>
  );
};

export default Home;
