import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaEnvelopeOpenText, FaGithub, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

import Section from '../Section';
import useField from '../../hooks/useField';

import buttonStyles from '../Button/Button.module.css';
import styles from './Contact.module.css';

function Contact (_, ref) {
  const nameField = useField({ type: 'text', name: 'name', id: 'name', placeholder: 'Name', required: true });
  const emailField = useField({ type: 'email', name: 'email', id: 'email', placeholder: 'Email', required: true });
  const subjectField = useField({ type: 'text', name: 'subject', id: 'subject', placeholder: 'Subject' });
  const messageField = useField({ name: 'message', id: 'message', placeholder: 'Message', required: true });
  const MySwal = withReactContent(Swal);

  const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isValidForm = () => {
    return nameField.value.trim() && validEmail(emailField.value) && messageField.value.trim();
  };

  const missinInfoMessage = () => {
    const base = 'You have to provide at least your name, a valid email, and a message to be able to write you back.';
    const missingName = !nameField.value ? 'You are missing your name.' : '';
    const missingEmail = !validEmail(emailField.value) ? 'Its not a valid email.' : '';
    const missingMessage = !messageField.value ? 'You are missing your message.' : '';

    return [base, missingName, missingEmail, missingMessage].filter(Boolean).join('\n');
  };

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

    MySwal.fire('Wait...', 'Sending your email. It will close when finish.');
    fetch('https://formspree.io/mbjklkqm', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch(() => {
        MySwal.fire('Oops...', 'An error ocurred. Please, try again', 'error');
      })
      .then(r => r.json())
      .then((body) => {
        MySwal.fire('Great', `Hello ${nameField.value}, your email was sent. I will contact you, soon. Thank you`, 'success');
        resetForm();
      });
  };

  return (
    <Section index="04" title="Contact" id="contact" ref={ref}>
      <div className={styles.contactContainer}>
        <div className={styles.messageForm}>
          <h2>Leave A Comment</h2>
          <form id="contact-form">
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
            <input type="submit" id="leButton" className={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ? ${!isValidForm() ? buttonStyles.btnDisabled : ''}`} value="Send Email" onClick={sendEmail}/>
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
              <FaLinkedinIn aria-label="LinkedIn" />
              <a target="_blank" href="https://www.linkedin.com/in/joseglego/" rel="noopener noreferrer">
                in/joseglego
              </a>
            </li>
            <li>
              <FaGithub aria-label="GitHub" />
              <a target="_blank" href="https://github.com/joseglego" rel="noopener noreferrer">
                joseglego
              </a>
            </li>
            <li>
              <FaEnvelopeOpenText aria-label="Email" />
              <a id="go-to-email" href="#" rel="noopener noreferrer" >
                me@joseglego.io
              </a>
            </li>
            <li>
              <FaMapMarkerAlt aria-label="Location" />
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

export default React.forwardRef(Contact);
