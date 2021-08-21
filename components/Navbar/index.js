import React from 'react';
import { FaSun, FaRegMoon } from 'react-icons/fa';
import { useTheme } from '../../providers/ThemeProvider';

import styles from './Navbar.module.css';

function Navbar ({ activeSectionIndex }) {
  const { darkMode, setDarkMode } = useTheme();
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

  const sections = [
    { id: '#home', title: 'Home' },
    { id: '#about', title: 'About' },
    { id: '#experience', title: 'Experience' },
    { id: '#projects', title: 'Projects' },
    { id: '#contact', title: 'Contact' }
  ];

  const setTheme = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hasDarkMode = document.body.classList.contains('dark-theme');
    const hasLightkMode = document.body.classList.contains('light-theme');
    const tmpDarkMode = (prefersDarkScheme && !hasLightkMode) || hasDarkMode;

    setDarkMode(tmpDarkMode);
  };

  const toggleMode = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
      document.body.classList.toggle('light-theme');
      setTimeout(setTheme);
    } else {
      document.body.classList.toggle('dark-theme');
      setTimeout(setTheme);
    }
  };

  React.useEffect(() => {
    setTheme();
  }, [setDarkMode]);

  return (
      <div className={`${styles.navbar} ${scrollPosition > 75 ? styles.activeNavbar : ''}`}>
        <div className={styles.navbarContainer}>
          <div className={`${styles.navbarBrand} ${darkMode ? styles.darkMode : ''}`}>JosegLEGO</div>
          <ul className={styles.navbarList}>
            {sections.map(({ id, title }, index) => (
              <li key={id}><a href={id} className={index === activeSectionIndex ? styles.activeSection : ''}>{title}</a></li>
            ))}
            <button className={styles.modeButton} onClick={toggleMode} aria-label={`Activate ${darkMode ? 'Light Mode' : 'Dark Mode'}`}>
              {darkMode ? <FaSun /> : <FaRegMoon />}
            </button>
          </ul>
        </div>
      </div>
  );
}

export default Navbar;
