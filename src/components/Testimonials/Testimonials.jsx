import React from "react";
import styles from "./Testimonials.module.css";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import carouselBtnRight from "../../assets/carouselBtnRight.png";
import carouselBtnLeft from "../../assets/carouselBtnLeft.png";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  return (
    <div className={styles.clientSection}>
      <div className={styles.clientContainer}>
        <div className={styles.clientHeader}>
          <h2 className={styles.clientTitle}>What says our happy Clients</h2>
          <div className={styles.carouselBtn}>
            <a href="#left">
              <img className={styles.ellipse} src={carouselBtnLeft} alt="carousel btn left" />
              <img className={styles.leftIcon} src={leftArrow} alt="left arrow icon" />
            </a>
            <a href="#right">
              <img className={styles.ellipse} src={carouselBtnRight} alt="carousel btn right" />
              <img className={styles.rightIcon} src={rightArrow} alt="right arrow icon" />
            </a>
          </div>
        </div>
        <div className={styles.clientFeedback}>
          <div className={styles.clientBox}>
            <div className={styles.icons}>
              <img
                className={styles.clientIcon}
                src={client1}
                alt="clientIcon"
              />
            </div>
            <h4 className={styles.clientName}>Jane Cooper</h4>
            <h5 className={styles.clientRole}>Ceo of Hunt</h5>
            <p className={styles.clientDescription}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
          <div className={styles.clientBox}>
            <div className={styles.icons}>
              <img
                className={styles.clientIcon}
                src={client2}
                alt="clientIcon"
              />
            </div>
            <h4 className={styles.clientName}>Devon Lane</h4>
            <h5 className={styles.clientRole}>Ceo of Hunt</h5>
            <p className={styles.clientDescription}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
          <div className={styles.clientBox}>
            <div className={styles.icons}>
              <img
                className={styles.clientIcon}
                src={client3}
                alt="clientIcon"
              />
            </div>
            <h4 className={styles.clientName}>Robert Fox</h4>
            <h5 className={styles.clientRole}>Ceo of Hunt</h5>
            <p className={styles.clientDescription}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
