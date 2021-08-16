import React from 'react';

import { useTheme } from '../../providers/ThemeProvider';

import styles from './Navbar.module.css';

function Navbar () {
  const { darkMode } = useTheme();

  return (
      <div className={styles.navbar}>
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
