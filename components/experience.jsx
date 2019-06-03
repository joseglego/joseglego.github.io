import './experience.scss'

function Experience() {
  const experiences = [
    { url: 'https://www.beetrack.com/', name: 'Beetrack', position: 'Front-End Developer', start: 'Oct 2018', end: 'Present'},
    { url: 'https://www.platan.us/', name: 'Platanus', position: 'Business Developer', start: 'Sep 2017', end: 'Oct 2018'},
    { url: 'http://cleteci.com/', name: 'Cleteci', position: 'Web Developer; 1; 2', start: 'Sep 2014', end: 'Aug 2017'}
  ]

  return (
    <div className='experiences'>
      <h2>Experience</h2>
      <ul> {
        experiences.map(experience => (
          <li key={`experience-${experience.name}`}>
            <a href={experience.url} target='_blank'>{experience.name}</a> ({experience.start} - {experience.end}) - {experience.position}
          </li>
        ))
      }</ul>

      Also, I always try to work in <b>side projects</b> or in <b>freelance projects</b>,  with other tools and concepts.
    </div>
  )
}

export default Experience
