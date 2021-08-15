import React from 'react';
import Bricks from '../Bricks';

import useInterval from '../../hooks/useInterval';

import styles from './Landing.module.css';
import buttonStyles from '../Button/Button.module.css';

function Landing () {
  const [reset, setReset] = React.useState(0);

  const shuffle = () => { setReset(reset + 1); };

  useInterval(() => {
    shuffle();
  }, 5000);

  return (
    <div className={styles.landing}>
      <div className={styles.bricks}>
        {reset % 2 === 0 && <Bricks />}
        {reset % 2 === 1 && <Bricks />}
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>josegLEGO</h1>
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
            <a className={`${buttonStyles.btn} ${buttonStyles.btnPrimary}`}>Contact</a>
            <a className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`}>Read More</a>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.btns} aria-hidden="true">
          <button className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`} onClick={shuffle}>Shuffle</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
