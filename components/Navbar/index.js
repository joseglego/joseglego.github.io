import React from 'react';

import { useTheme } from '../../providers/ThemeProvider';

import styles from './Navbar.module.css';

function Navbar ({ activeSectionIndex }) {
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

  const sections = [
    { id: '#home', title: 'Home' },
    { id: '#about', title: 'About' },
    { id: '#experience', title: 'Experience' },
    { id: '#projects', title: 'Projects' },
    { id: '#contact', title: 'Contact' }
  ];

  return (
      <div className={`${styles.navbar} ${scrollPosition > 75 ? styles.activeNavbar : ''}`}>
        <div className={styles.navbarContainer}>
          <div className={`${styles.navbarBrand} ${darkMode ? styles.darkMode : ''}`}>JosegLEGO</div>
          <ul className={styles.navbarList}>
            {sections.map(({ id, title }, index) => (
              <li key={id}><a href={id} className={index === activeSectionIndex ? styles.activeSection : ''}>{title}</a></li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default Navbar;
