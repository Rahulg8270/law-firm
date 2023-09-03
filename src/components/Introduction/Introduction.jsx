import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.introSection}>
      <div className={styles.introContainer}>
        <h2 className={styles.introLine}>Let’s Introduce Ourself</h2>
        <div className={styles.introDivide}></div>
        <div className={styles.introDescription}>
          <h4 className={styles.introNameType}>Criminal Lawyer</h4>
          <p className={styles.introDetails}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
