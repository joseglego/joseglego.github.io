import Section from '../Section';

import styles from './Contact.module.css';

function Contact () {
  return (
    <Section index="04" title="Contact">
      <div className={styles.contactContainer}>
        <div className={styles.messageForm}>
          <h2>Leave A Comment</h2>
          <form id="contact-form" noValidate="novalidate">
            <div>
              <label htmlFor="name" className={styles.screenReaderOnly}>Name</label>
              <input name="name" id="name" type="text" className="" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email" className={styles.screenReaderOnly}>Email</label>
              <input name="email" id="email" type="email" className="" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="subject" className={styles.screenReaderOnly}>Subject</label>
              <input name="subject" id="subject" type="text" className="" placeholder="Subject" />
            </div>
            <div>
              <label htmlFor="message" className={styles.screenReaderOnly}>Message</label>
              <textarea name="message" id="message" className="" rows="5" placeholder="Text"></textarea>
            </div>
            <input type="submit" id="leButton" className="btn btn-danger btn-block" value="Send Email" />
          </form>
        </div>
        <div className={styles.socialMedia}>
          <h2>Get In Touch</h2>
          <p>If you wanna know more about me, you can leave a comment, or write me an email. Also, you can find me in the internet, usually as
          </p>
          <p className={styles.primaryText}>
            josegLEGO
          </p>
          <ul className={styles.socialList}>
            <li>
              Linkedin:&nbsp;
              <a target="_blank" href="https://www.linkedin.com/in/joseglego/" rel="noopener noreferrer">
                in/joseglego
              </a>
            </li>
            <li>
              GitHub:&nbsp;
              <a target="_blank" href="https://github.com/joseglego" rel="noopener noreferrer">
                joseglego
              </a>
            </li>
            <li>
              Email:&nbsp;
              <a id="go-to-email" href="#" rel="noopener noreferrer" >
                me@joseglego.io
              </a>
            </li>
            <li>
              Location:&nbsp;
              <a target="_blank" href="https://www.google.com/maps/place/Santiago,+Santiago+Metropolitan+Region,+Chile/@-33.7201586,-75.43648,5z" rel="noopener noreferrer" >
                Santiago de Chile, Chile
              </a>
              <br/>
              <span className={styles.extraInfo}>(Remote - Willing to Relocate)</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
