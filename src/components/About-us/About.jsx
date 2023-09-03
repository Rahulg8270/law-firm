import React from "react";
import styles from "./About.module.css";
import successIcon from "../../assets/successIcon.png";
import giftIcon from '../../assets/gift.svg'

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>Why Choose us?</h2>
        <div className={styles.aboutUsp}>
          <div className={styles.aboutSuccessBox}>
            <div className={styles.icons}>
            <img className={styles.successIcon} src={successIcon} alt="successIcon" />
            <img className={styles.giftIcon} src={giftIcon} alt="gift" />
            </div>
            <h4  className={styles.successRate}>98% Success Rate</h4>
            <p className={styles.aboutDescription}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.aboutBtn}>Read More</button>
          </div>
          <div className={styles.aboutSuccessBox}>
            <div className={styles.icons}>
            <img className={styles.successIcon} src={successIcon} alt="successIcon" />
            <img className={styles.giftIcon} src={giftIcon} alt="gift" />
            </div>
            <h4  className={styles.successRate}>100% Success Rate</h4>
            <p className={styles.aboutDescription}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.aboutBtn}>Read More</button>
          </div>
          <div className={styles.aboutSuccessBox}>
            <div className={styles.icons}>
            <img className={styles.successIcon} src={successIcon} alt="successIcon" />
            <img className={styles.giftIcon} src={giftIcon} alt="gift" />
            </div>
            <h4 className={styles.successRate}>100% Success Rate</h4>
            <p className={styles.aboutDescription}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.aboutBtn}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
