import Section from '../Section';

import useField from '../../hooks/useField';
import styles from './Contact.module.css';

function Contact () {
  const nameField = useField({ type: 'text', name: 'name', id: 'name', placeholder: 'Name' });
  const emailField = useField({ type: 'email', name: 'email', id: 'email', placeholder: 'Email' });
  const subjectField = useField({ type: 'text', name: 'subject', id: 'subject', placeholder: 'Subject' });
  const messageField = useField({ name: 'message', id: 'message', placeholder: 'Message' });

  const resetForm = () => {
    const fakeEvent = { target: { value: '' } };
    nameField.onChange(fakeEvent);
    emailField.onChange(fakeEvent);
    subjectField.onChange(fakeEvent);
    messageField.onChange(fakeEvent);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidForm()) {
      MySwal.fire('Missing Info', missinInfoMessage(), 'info');
      return;
    }

    const data = {
      name: nameField.value,
      email: emailField.value,
      subject: subjectField.value,
      message: messageField.value
    };

    fetch('https://formspree.io/mbjklkqm', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch(() => {
        alert('error');
      })
      .then(r => r.json())
      .then(() => {
        alert('works');
        resetForm();
      });
  };

  return (
    <Section index="04" title="Contact">
      <div className={styles.contactContainer}>
        <div className={styles.messageForm}>
          <h2>Leave A Comment</h2>
          <form id="contact-form" noValidate="novalidate">
            <div>
              <label htmlFor="name" className={styles.screenReaderOnly}>Name</label>
              <input {...nameField} />
            </div>
            <div>
              <label htmlFor="email" className={styles.screenReaderOnly}>Email</label>
              <input {...emailField} />
            </div>
            <div>
              <label htmlFor="subject" className={styles.screenReaderOnly}>Subject</label>
              <input {...subjectField} />
            </div>
            <div>
              <label htmlFor="message" className={styles.screenReaderOnly}>Message</label>
              <textarea {...messageField} />
            </div>
            <input type="submit" id="leButton" className="btn btn-danger btn-block" value="Send Email" onClick={sendEmail}/>
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
