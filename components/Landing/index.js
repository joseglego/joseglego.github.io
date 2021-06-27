import styles from './Landing.module.css';

function Landing () {
  return (
    <div className={styles.landing}>
      <div className={styles.bricks} />
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
              I am a passionate developer,
            </span>
            <span className={styles.description}> a lego fan </span>
            <span className={styles.description}> and a coffee lover. </span>
          </p>
          <div className={styles.btns}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Contact</button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
