import styles from './Footer.module.css';

function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <div className={styles.joseglego}>JosegLEGO</div>
          <p>Made from scratch by josegLEGO. Using <a href="https://nextjs.org/">Next.js</a>, and hosted in <a href="https://www.netlify.com/">Netlify</a>.</p>
          <p>You can find the code in <a href="https://github.com/joseglego/joseglego.github.io/tree/feat/next-version">its Github Repo</a>, feel free to use it or provide feedback.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
