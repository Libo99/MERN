import React from "react";
import styles from "./Home.module.css";

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.aboutheader}>
        <h1>About</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.aboutme}>
          <h3 className={styles.h3}>About me</h3>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sit
            vel. At in atque tempora vel! Ipsa saepe quo repellat animi ab sunt
            nam quibusdam.
          </p>
        </div>
        <img
          className={styles.img}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="hej"
        />
      </div>
    </div>
  );
};

export default About;
