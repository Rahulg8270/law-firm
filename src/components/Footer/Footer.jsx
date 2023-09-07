import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import insta from '../../assets/insta.png'
import fb from '../../assets/fb.png'
import twitter from '../../assets/twitter.png'
import pinterest from '../../assets/pinterest.png'
const Footer = () => {
    return (
        <div className={styles.footerSection}>
            <div className={styles.footerContainer}>
                <div className={styles.footerNav}>
                    <div>
                        <Logo />
                    </div>
                    <div className={styles.footerNavigation}>
                        <a href="#Home">Home</a>
                        <a href="#Attorneys">Attorneys</a>
                        <a href="#PracticeAreas">Practice Areas</a>
                        <a href="#AboutUs">About Us</a>
                    </div>
                    <div className={styles.footerSocialIcons}>
                        <a href="#insta"><img src={insta} alt="insta logo" /></a>
                        <a href="#fb"><img src={fb} alt="fb logo" /></a>
                        <a href="#twitter"><img src={twitter} alt="twitter logo" /></a>
                        <a href="#pinterest"><img src={pinterest} alt="pinterest logo" /></a>
                    </div>
                </div>
                <div className={styles.footerCopyRight}>
                    <p>© 2020 Acme. All right reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
