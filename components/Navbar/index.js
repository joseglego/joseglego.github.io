import React from 'react';

import { useTheme } from '../../providers/ThemeProvider';

import styles from './Navbar.module.css';

function Navbar () {
  const { darkMode } = useTheme();
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className={`${styles.navbar} ${scrollPosition > 75 ? styles.activeNavbar : ''}`}>
        <div className={styles.navbarContainer}>
          <div className={`${styles.navbarBrand} ${darkMode ? styles.darkMode : ''}`}>JosegLEGO</div>
          <ul className={styles.navbarList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
  );
}

export default Navbar;
