import React from "react";
import styles from "./Faq.module.css";
import carouselBtnRight from "../../assets/carouselBtnRight.png";

const Faq = () => {
  return (
    <div className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>FAQ</h2>
          <p className={styles.faqDescription}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className={styles.faqQuestionContainer}>
          <div className={styles.faqQuestions}>
            <div className={styles.faqEachQuestion}>
              <h4>Do I need a personal injury report?</h4>
              {/* <button></button> */}
            </div>
            <p className={styles.faqAnswers}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <div className={styles.faqEachQuestion}>
              <h4>How much is my case worth?</h4>
              <img className={styles.faqAnswerToggle} src={carouselBtnRight} alt="accordion button" />
              <span>+</span>
            </div>
            {/* <p className={styles.faqAnswers}>
                        
                    </p> */}
            <div className={styles.faqEachQuestion}>
              <h4>What should I do right after car accidect</h4>
                <img className={styles.faqAnswerToggle} src={carouselBtnRight} alt="accordion button" />
                <span>+</span>
            </div>
            {/* <p className={styles.faqAnswers}>
                        
                    </p> */}
            <div className={styles.faqEachQuestion}>
              <h4>How much is my case worth?</h4>
              <img className={styles.faqAnswerToggle} src={carouselBtnRight} alt="accordion button" />
              <span>+</span>
            </div>
            {/* <p className={styles.faqAnswers}>
                        
                    </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
