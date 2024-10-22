import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDropdown } from '../../features/dropdownSlice';
import styles from './Navbar.module.css';
import logo from '/images/logoNav.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const dispatch = useDispatch();
  const isDropdownOpen = useSelector((state) => state.dropdown.isDropdownOpen);

  const handleDropdownToggle = () => {
    dispatch(toggleDropdown());
  };

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
      <ul className={styles.navLinks} id={styles.socials}>
        <li>
          <a href="https://www.instagram.com/p/DAqwcUmTPqZ/?igsh=MWFxODZqZWxkc3g4bQ==" target='_blank'>
          <FaInstagram color='white' /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/share/p/qDS4oUScx47gu4V8/" target='_blank'>
          <FaFacebook color='white' /></a>
        </li>
        <li>
          <a href="/"><FaSquareXTwitter color='white' /></a>
        </li>
        <li>
          <a href="/"><FaLinkedin color='white' /></a>
        </li>
      </ul>

      {/* Dropdown Button for smaller screens */}
      <div className={styles.socialDropToggle} onClick={handleDropdownToggle}>
        {isDropdownOpen ? 'X' : '☰'}
      </div>

      {/* Dropdown for Social Icons */}
      {isDropdownOpen && (
        <div className={`${styles.socialDrop} ${isDropdownOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="/"><FaInstagram color='black' /></a>
            </li>
            <li>
              <a href="/"><FaFacebook color='black' /></a>
            </li>
            <li>
              <a href="/"><FaLinkedin color='black' /></a>
            </li>
            <li>
              <a href="/"><FaSquareXTwitter color='black' /></a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
