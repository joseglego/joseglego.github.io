import React from 'react';
import { FaEnvelopeOpenText, FaGithub, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

import Message from '../Message';
import Section from '../Section';
import useField from '../../hooks/useField';

import data from '../../config';

import buttonStyles from '../Button/Button.module.css';
import styles from './Contact.module.css';

function Contact (_, ref) {
  const [showModal, setShowModal] = React.useState({});
  const nameField = useField({ type: 'text', name: 'name', id: 'name', placeholder: 'Name', required: true });
  const emailField = useField({ type: 'email', name: 'email', id: 'email', placeholder: 'Email', required: true });
  const subjectField = useField({ type: 'text', name: 'subject', id: 'subject', placeholder: 'Subject' });
  const messageField = useField({ name: 'message', id: 'message', placeholder: 'Message', required: true });

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
      setShowModal({
        show: true,
        icon: 'warning',
        title: 'Missing Info',
        message: missinInfoMessage()
      });
      return;
    }

    const data = {
      name: nameField.value,
      email: emailField.value,
      subject: subjectField.value,
      message: messageField.value
    };

    setShowModal({
      show: true,
      icon: 'processing',
      title: 'Wait...',
      message: 'Sending your email. This message will close after sending it.'
    });

    fetch('https://formspree.io/mbjklkqm', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch(() => {
        setShowModal({
          show: true,
          icon: 'error',
          title: 'Oopss...',
          message: 'An error ocurred. Please, try again'
        });
      })
      .then(r => r.json())
      .then((body) => {
        setShowModal({
          show: true,
          icon: 'success',
          title: 'Great',
          message: `Hello ${nameField.value}, your email was sent. I will contact you, soon. Thank you`
        });
        resetForm();
      });
  };

  return (
    <Section index="04" title="Contact" id="contact" ref={ref}>
      <div className={styles.contactContainer}>
        <div className={styles.messageForm}>
          <h3 className={styles.cardTitle}>Leave A Comment</h3>
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
          <h3 className={styles.cardTitle}>Get In Touch</h3>
          <p>If you wanna know more about me, you can leave a comment, or write me an email. Also, you can find me in the internet, usually as
          </p>
          <p className={styles.primaryText}>
            josegLEGO
          </p>
          <ul className={styles.socialList}>
            <li>
              <FaLinkedinIn aria-label="LinkedIn" />
              <a target="_blank" href={data.socialLinkedinUrl} rel="noopener noreferrer">
                {data.socialLinkedin}
              </a>
            </li>
            <li>
              <FaGithub aria-label="GitHub" />
              <a target="_blank" href={data.socialGithubUrl} rel="noopener noreferrer">
                {data.socialGithubUser}
              </a>
            </li>
            <li>
              <FaEnvelopeOpenText aria-label="Email" />
              <a href={`mailto:${data.socialEmail}`}>
                {data.socialEmail}
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
      <Message
        icon={showModal.icon}
        title={showModal.title}
        message={showModal.message}
        showMessage={Boolean(showModal.show)}
        onClose={() => { setShowModal({ ...showModal, show: false }); }}
      />
    </Section>
  );
}

export default React.forwardRef(Contact);
