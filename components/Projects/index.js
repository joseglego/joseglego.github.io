import React from 'react';

import Section from '../Section';

import styles from './Projects.module.css';
import { projects } from './data';

function About (_, ref) {
  return (
    <Section index="03" title="Projects" alternative={true} id="projects" ref={ref}>
      <p className={styles.paragraph}>
        As a Software Factory worker (most of my work-time) I&apos;ve been in really
        different projects. When I say different, it&apos;s really different, e. g.{' '}
        <i>Uber Eats for Cows</i>, <i>Insurance companies</i>,{' '}
        <i>Hidroponic &quot;Tomatoes&quot; at home</i>,{' '}
        <i>Natural methods for the regulation of fertility</i>, etc. Each of them
        represented a special problem which the team had to solve. I only listed
        some of them.
      </p>
      <div className={styles.projects}>
        {projects.map((project) => (
          <div className={styles.project} key={project.title}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
      <p className={styles.paragraph}>
        Also, I really enjoy spending time programming. So, if you have an Open
        Source project and need a hand, I&quot;ll probably be pleased to help you. I
        have found some small open source projects and help them with small
        comments and commits but I&apos;d like to participate in more. (P.S.: In
        fact, There are some apps which I want to develop, but, I can&apos;t show them
        yet)
      </p>
    </Section>
  );
}

export default React.forwardRef(About);
