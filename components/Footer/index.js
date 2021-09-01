import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import data from '../../config';

import styles from './Footer.module.css';

function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <div className={styles.joseglego}>JosegLEGO</div>
          <p>Made from scratch by josegLEGO. Using <a href="https://nextjs.org/">Next.js</a>, and hosted in <a href="https://www.netlify.com/">Netlify</a>.</p>
          <p>You can find the code in <a href="https://github.com/joseglego/joseglego.github.io/tree/feat/next-version">its Github Repo</a>, feel free to use it or provide feedback. Also, you can see the <a target="_blank" href={data.oldJoseglego} rel="noopener noreferrer">2016 version</a></p>
        </div>
        <div className={styles.footerSocial}>
          <a className={styles.footerSocialLink} target="_blank" href={data.socialLinkedinUrl} rel="noopener noreferrer">
            <FaLinkedinIn aria-label="LinkedIn" />
          </a>
          <a className={styles.footerSocialLink} target="_blank" href={data.socialGithubUrl} rel="noopener noreferrer">
            <FaGithub aria-label="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
