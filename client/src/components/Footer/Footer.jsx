
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerMessage}>
        Want to share your thoughts? <Link to="/apply" className={styles.footerLink}>Join us as an author!</Link>
      </p>
    </footer>
  );
};

export default Footer;
