import React from 'react';

import Section from '../Section';

import styles from './Experience.module.css';
import { experiences } from './data.js';

function Experience (_, ref) {
  return (
    <Section index="02" title="Experience" id="experience" ref={ref}>
      <ul className={styles.experiences}>
        {' '}
        {experiences.map((experience) => (
          <li
            className={styles.experience}
            key={`experience-${experience.name}`}
          >
            <a
              className={styles.experienceLink}
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.experienceLogo}
                src={experience.image}
                alt={experience.name}
                width="56px"
                height="56px"
              />
              <span className={styles.experienceName}>{experience.name}</span>
            </a>
            <div className={styles.experiencePeriod}>
              {experience.start} - {experience.end}
            </div>
            <div className={styles.experiencePosition}>
              {experience.position}
            </div>

            <div className={styles.experienceDescription}>
              {experience.description}
            </div>
          </li>
        ))}
      </ul>
      <p>
        Also, I always try to work on <b>side projects</b> or in{' '}
        <b>freelance projects</b>, with other tools and concepts.
      </p>
      <p>
        You can see or download, in a more traditional version <a className={styles.link} href="https://docs.google.com/document/d/1EJtSmUUysfnFfwr1z-LiRysvKO8hfNdepY9Ww4SgOz0/export?format=pdf">Resume in English</a> or <a className={styles.link} href="https://docs.google.com/document/d/1RhBcOj2bNllB3_kogC3zQtGUbw49AzyoTgrM8i4DCCY/export?format=pdf">Resume in Spanish</a>.
      </p>
    </Section>
  );
}

export default React.forwardRef(Experience);
