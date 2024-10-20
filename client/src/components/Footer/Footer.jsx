import React from 'react';
import { FaInstagram,FaFacebook, FaYoutube, FaXTwitter, FaTelegram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <p className={styles.footerMessage}>
            Want to share your thoughts? <Link to="/apply" className={styles.footerLink}>Join us as an author!</Link>
          </p>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <img src="/images/logoFoot.png" alt="Logo" className={styles.footerLogoImage} />
                </div>
                <div className={styles.footerNav}>
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="/category/news">News</a></li>
                        <li><a href="/category/sports">Sports</a></li>
                        <li><a href="/category/technology">Technology</a></li>
                        <li><a href="/category/entertainment">Entertainment</a></li>
                        <li><a href="/category/business">Business</a></li>
                    </ul>
                </div>
                <div className={styles.footerSocial}>
                    <a href="#"><FaInstagram color='black'/></a>
                    <a href="#"><FaFacebook color='black'/></a>
                    <a href="#"><FaYoutube color='black' /></a>
                    <a href="#"><FaXTwitter color='black'/></a>
                    <a href="#"><FaTelegram color='black'/></a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
