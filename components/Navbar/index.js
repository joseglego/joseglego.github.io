import React from 'react';
import { FaSun, FaRegMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../providers/ThemeProvider';
import ReactModal from 'react-modal';

import styles from './Navbar.module.css';

function Navbar ({ activeSectionIndex }) {
  const { darkMode, setDarkMode } = useTheme();
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
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

  React.useEffect(() => {
    ReactModal.setAppElement('body');
  }, []);

  return (
    <>
      <div className={`${styles.navbar} ${scrollPosition > 75 ? styles.activeNavbar : ''}`}>
        <div className={styles.navbarContainer}>
          <div className={`${styles.navbarBrand} ${darkMode ? styles.darkMode : ''}`}>JosegLEGO</div>
          <div className={styles.navbarActions}>
            <ul className={styles.navbarList}>
              {sections.map(({ id, title }, index) => (
                <li key={id}><a href={id} className={index === activeSectionIndex ? styles.activeSection : ''}>{title}</a></li>
              ))}
            </ul>
            <button className={styles.hamburgerButton} onClick={() => setIsOpen(true)} aria-label="Open Navbar Menu">
              <FaBars />
            </button>
            <button className={styles.modeButton} onClick={toggleMode} aria-label={`Activate ${darkMode ? 'Light Mode' : 'Dark Mode'}`}>
              {darkMode ? <FaSun /> : <FaRegMoon />}
            </button>
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={isOpen}
        className={`ReactModal__Content ${styles.navbarMenu}`}
        overlayClassName="ReactModal__Overlay">
        <div className={`ReactModal__Container ${styles.menuContainer}`}>
          <button className={styles.closeMenuButton} onClick={() => setIsOpen(false)} aria-label="Close Navbar Menu">
            <FaTimes />
          </button>
          <ul className={styles.mobileNavbarList}>
            {sections.map(({ id, title }, index) => (
              <li key={id}>
                <a
                  href={id}
                  className={index === activeSectionIndex ? styles.activeSection : ''}
                  onClick={() => setIsOpen(!isOpen)}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ReactModal>
    </>
  );
}

export default Navbar;
