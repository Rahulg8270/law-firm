import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/heroImage.png";
import { ReactComponent as Logo } from "../../assets/logo.svg";
// import EmailLogo from '../../assets/emailIcon.svg'

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroHeader}>
          <h3>
            <Logo />
          </h3>
          <div className={styles.heroNavbar}>
            <a href="#Home">Home</a>
            <a href="#Attorneys">Attorneys</a>
            <a href="#PracticeAreas">Practice Areas</a>
            <a href="#AboutUs">About Us</a>
          </div>
          <button className={styles.heroHeaderBtn}>Contact Us</button>
        </div>
        <div className={styles.heroMain}>
          <div className={styles.heroCta}>
            <h1 className={styles.heroTitle}>
              You don’t have to Fight them Alone.
            </h1>
            <p className={styles.heroDescription}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </p>
            <form className={styles.heroForm}>
                <input  className={styles.heroFormInput} type={"email"} placeholder="Enter your email address" />
                {/* <img src={EmailLogo} alt='email icon' className={styles.heroEmailIcon}></img> */}
                <button className={styles.heroFormBtn}>Let's Talk</button>
            </form>
          </div>
            <img className={styles.heroImg} src={heroImage} alt="heroImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
