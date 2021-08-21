import React from 'react';

import Section from '../Section';

import styles from './About.module.css';

function About (_, ref) {
  return (
    <Section index="01" title="About" alternative={true} id="about" ref={ref}>
      <p className={styles.paragraph}>
        I am a passionate developer, a Lego fan, and a coffee lover from Vargas, Venezuela; living in Santiago, Chile.
      </p>
      <p className={styles.paragraph}>
        I&apos;m a Software Engineer from Simón Bolívar University (USB, Venezuela) and I&apos;ve been working as a Software Developer since 2014. During the last years, I&apos;ve been using JavaScript (a little TypeScript), Node, React, Jest, and Cypress in my daily tasks. I&apos;ve been around for a while, and I&apos;ve worked with tools like Vue, Ionic, AngularJS, Rails, and Django.</p>
      <p className={styles.paragraph}>
        I really trust in the practice and the process, and software development as a craft, for that reason I always try to do something different, such as working as a freelancer, working on open source projects or small side projects; with new or different technologies. Also, I like to be always learning but also teaching, so I&apos;ve mentor other devs to help them grow up.
      </p>
      <p className={styles.paragraph}>
        Interested in: React, Node, JAMStack, ServerLess, Next.js, GraphQL, OpenSource, Testing, A11y, and PWA.
      </p>
    </Section>
  );
}

export default React.forwardRef(About);
