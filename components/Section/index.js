import React from 'react';

import styles from './Section.module.css';

function Section ({ extraClasses, alternative, id, index, title, children }, ref) {
  return (
    <div className={`${styles.section} ${alternative ? styles.secondary : ''}`} id={id} ref={ref}>
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <div className={styles.uppertitle}>{index}.</div>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(Section);
