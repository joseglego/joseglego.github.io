import React from 'react';
import Bricks from '../Bricks';

import { useTheme } from '../../providers/ThemeProvider';
import useInterval from '../../hooks/useInterval';

import styles from './Landing.module.css';
import buttonStyles from '../Button/Button.module.css';

function Landing (_, ref) {
  const [reset, setReset] = React.useState(0);
  const { darkMode, setDarkMode } = useTheme();

  const shuffle = () => { setReset(reset + 1); };

  const setTheme = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hasDarkMode = document.body.classList.contains('dark-theme');
    const hasLightkMode = document.body.classList.contains('light-theme');
    const tmpDarkMode = (prefersDarkScheme && !hasLightkMode) || hasDarkMode;

    setDarkMode(tmpDarkMode);
  };

  useInterval(() => {
    shuffle();
  }, 5000);

  React.useEffect(() => {
    setTheme();
  }, [setDarkMode]);

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

  return (
    <div className={styles.landing} id="home" ref={ref}>
      <div className={styles.bricks}>
        {reset % 2 === 0 && <Bricks />}
        {reset % 2 === 1 && <Bricks />}
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={`${styles.title} ${darkMode ? styles.darkMode : ''}`}>josegLEGO</h1>
          <h2 className={styles.name}>José Gregorio Lezama González</h2>
          <h2 className={styles.position}>
            <span className={styles.primaryPosition}>Frontend</span>
            <span className={styles.secondaryPosition}> - JS Fullstack</span>
          </h2>
          <p className={styles.descriptions}>
            <span className={styles.description}>
              I am a passionate developer,&nbsp;
            </span>
            <span className={styles.description}>a lego fan, &nbsp;</span>
            <span className={styles.description}>and a coffee lover. </span>
          </p>
          <div className={styles.btns}>
            <a href="#contact" className={`${buttonStyles.btn} ${buttonStyles.btnPrimary}`}>Contact Me</a>
            <a href="#about" className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`}>Read More</a>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.btns}>
          <button className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} onClick={shuffle} aria-label="Shuffle Background">Shuffle</button>
          <button className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} onClick={toggleMode} aria-label="Toggle Light/Dark Mode">Toggle Mode</button>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(Landing);
