import Section from '../Section';

import styles from './About.module.css';

function About () {
  return (
    <Section index="01" title="About" alternative={true}>
      <p className={styles.paragraph}>
        I&apos;m a passionate developer and coffee lover, from Vargas, Venezuela.
        Living in Santiago, Chile.
      </p>
      <p className={styles.paragraph}>
        During the last years, in my daily tasks, I&apos;ve been using Javascript,
        React & Node. I usually do Front-End development with React, GraphQL,
        SCSS, Javascript and it&apos;s covered by Jest. I used to work with other
        popular frameworks (Vue, Angular, AngularJS) and Ruby on Rails or Django
        as Server side framework.
      </p>
      <p className={styles.paragraph}>
        I&apos;m a Software Engineer from Simón Bolívar University (USB, Venezuela),
        and I&apos;ve been working as a Web Developer since 2014.
      </p>
    </Section>
  );
}

export default About;
