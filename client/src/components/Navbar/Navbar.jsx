import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '/images/logoNav.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Newscope Logo" className={styles.logo} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li>
          <Link to="/apply" className={styles.navLink}>Apply as Author</Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
