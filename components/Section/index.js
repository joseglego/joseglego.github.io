import styles from './Section.module.css';

function Section ({ extraClasses, alternative, index, title, children }) {
  return (
    <div className={`${styles.section} ${alternative ? styles.secondary : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.uppertitle}>{index}.</div>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Section;
