import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import About from "./About";

const Home = () => {
  return (
    <div className={styles.Homecontainer}>
      <Header />
      <About />
    </div>
  );
};

export default Home;
