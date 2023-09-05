import React from "react";
import styles from "./Practice.module.css";
import businessLaw1 from "../../assets/businessLawPractice1.png";
import businessLaw2 from "../../assets/businessLawPractice2.png";
import elderAbuse from "../../assets/elderAbuse.png";
import landDispute from "../../assets/landLordDisputes.png";
import partnerDispute from "../../assets/partnershipDispute.png";
import realEstate from "../../assets/realEstateLaw.png";

const Practice = () => {
  return (
    <div className={styles.practiceSection}>
      <div className={styles.practiceContainer}>
        <h2 className={styles.practiceTitle}>Area of Practices</h2>
        <div className={styles.practiceGrid}>
          <div className={styles.block1}>
            <div className={styles.card1}>
              <img src={businessLaw1} alt="businessLaw1" />
            </div>
            <div className={styles.card2}>
              <img src={partnerDispute} alt="partnerDispute" />
            </div>
          </div>
          <div className={styles.block2}>
            <div className={styles.card3}>
              <img src={realEstate} alt="realEstate" />
            </div>
            <div className={styles.card4}>
              <img src={businessLaw2} alt="businessLaw2" />
            </div>
          </div>
          <div className={styles.block3}>
            <div className={styles.card5}>
              <img src={landDispute} alt="landDispute" />
            </div>
            <div className={styles.card6}>
              <img src={elderAbuse} alt="elderAbuse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
