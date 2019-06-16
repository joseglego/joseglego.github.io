import Section from './section'

function About () {
  return (
    <Section
      index='01'
      title='About'
      extraClasses='section--sec'
    >
      <p>I'm a passionate developer and coffee lover, from Vargas, Venezuela. Living in Santiago, Chile.</p><br/>
      <p>For the past few months, in my daily tasks, I've been using Javascript and React.</p>
      <p>I usually do Front-End development with React, Redux, SCSS, Javascript and a little of Jest. But, usually my side projects include Ruby on Rails, Django and, even, Ionic.</p>

      <p>I used to work with other popular frameworks (Vue 1year, Angular 6months, AngularJS 3years+) always with Ruby on Rails or Django as Server side framework.</p>
      <p>I'm a Software Engineer from Simón Bolívar University (USB, Venezuela), and I've been working as a Web Developer since 2014.</p>
    </Section>
  )
}

export default About
