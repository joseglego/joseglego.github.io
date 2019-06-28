import Section from './section'
import './about.scss'

function About () {
  return (
    <Section
      index='01'
      title='About'
      extraClasses='section--sec'
    >
      <p className='about__paragraph'>I'm a passionate developer and coffee lover, from Vargas, Venezuela. Living in Santiago, Chile.</p>
      <p className='about__paragraph'>For the past few months, in my daily tasks, I've been using Javascript and React. I usually do Front-End development with React, Redux, SCSS, Javascript and a little of Jest. I used to work with other popular frameworks (Vue 1year, Angular 6months, AngularJS 3years+) always with Ruby on Rails or Django as Server side framework. But, usually my side projects include Ruby on Rails, Django and, even, Ionic.</p>
      <p className='about__paragraph'>I'm a Software Engineer from Simón Bolívar University (USB, Venezuela), and I've been working as a Web Developer since 2014.</p>
    </Section>
  )
}

export default About
