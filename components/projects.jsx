import './projects.scss'

function Projects() {
  const projects = [
    { title: 'Banana Vending Machine', description: 'An app to buy drinks using Bitcons / Lightning Networ' },
    { title: 'Cloudponics', description: 'It is a fully automated plant grow systems for growing plants at home. And I help with the second/american version of the app, it was part of the mobile app and in the admin dashboard too.' },
    { title: 'Procef', description: 'It is a natural method of birth control app, I help with the second version includins push messages, doctor checker, and other small features' },
    { title: '', description: '' },
    { title: '', description: '' },
    { title: '', description: '' },
    
  ]
  return (
    <div className='projects'>
      <h2>Projects</h2>
      <p>As a Software Factory worker (most of my work-time) I have being in really different projects. Each of them represent a spescial problem which the team had to solve. I only list some of thems.</p>
      
      <p>Also, I really enjoy spending time programming. So, If you have a Open Source project and need a hand probably I'd be proud if I can help you. In fact, I have found some small open source and help them with small comments, commits but I'd like to participate in more. (P.S.: In fact, I have some apps which I wanna develop. But, I can't show them yet)</p>
    </div>
  )
}

export default Projects;
