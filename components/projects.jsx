import './projects.scss'

function Projects() {
  const projects = [
    { category: 'beetrack', title: 'Beetrack', description: "I'm working on adding new features and modules in the app. Also, I have been remaking old modules and making helper libs to be used in the whole application.", url: '', background: '/static/images/projects/beetrack-intro.jpg' },
    
    { category: 'platanus', title: 'Banana Vending Machine', description: 'Made the interface of the first version of an app to be able to buy drinks using Bitcons and Lightning Network.', url: 'https://github.com/platanus/refreshments', background: '/static/images/projects/banana-intro.jpg'  },
    { category: 'platanus', title: 'Cloudponics', description: 'Worked on the second version of the App, the changes were focused on the mobile app, including new features and comunication with an extended API.', url: 'https://github.com/platanus/refreshments', background: '/static/images/projects/cloudponics-intro.jpg'  },
    { category: 'platanus', title: 'Picparks', description: 'Included features focused on projects and profiles enhanced for a nonprofit organization which helps national parks to get donations from $1.', url: '', background: '/static/images/projects/picparks-intro.jpg'  },

    { category: 'cleteci', title: 'Alanna', description: "I worked for the first version of Alanna, which is a tourism startup which can help you manage your travel agency, your clients and their trips. Now it's known as Travel Contact." , url: 'http://travelcontact.com/', background: '/static/images/projects/atrio-intro.jpg' },
    { category: 'cleteci', title: 'Atrio', description: 'Worked mostly in the interface of a quoting app, which connects with a Legacy app, to know the price, benefits and cons of insurance packs' , url: '', background: '/static/images/projects/atrio-intro.jpg' },
  ]

  return (
    <div className='projects'>
      <h2>Projects</h2>
      <p>As a Software Factory worker (most of my work-time) I've  been in really different projects. When I say different, it's really different. e.g. <i>Uber Eats for Cows</i>, <i>Insurance companies</i>, <i>Hidroponic "Tomatoes" at home</i>, <i>Natural methods for the regulation of fertility</i>. Each of them represented a special problem which the team had to solve. I only listed some of them.</p>
      <div className='projects'>
        { projects.map(project => (
          <div className='projects__project card'>
            <h4 className='project__title'>{project.title}</h4>
            <p className='project__description'>{project.description}</p>
          </div>
        ))}
      </div>
      <p>Also, I really enjoy spending time programming. So, if you have an Open Source project and need a hand probably I'd be pleased to help you. I have found some small open source projects and help them with small comments and commits but I'd like to participate in more. (P.S.: In fact, I have some apps which I want to develop, but, I can't show them yet)</p>
    </div>
  )
}

export default Projects;
