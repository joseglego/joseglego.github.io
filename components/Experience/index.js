import Section from '../Section';

import styles from './Experience.module.css';
import { experiences } from './data.js';

function Experience () {
  return (
    <Section index="02" title="Experience">
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
        Also, I always try to work in <b>side projects</b> or in{' '}
        <b>freelance projects</b>, with other tools and concepts.
      </p>
    </Section>
  );
}

export default Experience;
