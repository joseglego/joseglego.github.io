import { Fragment } from 'react'

import './index.scss'

import Landing from '../components/landing'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'

function Index() {
  return (
    <Fragment>
      <Landing />
      <About />
      <Experience />
      <Projects />
    </Fragment>
  )
}

export default Index;
