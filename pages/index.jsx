import { Fragment } from 'react'

import './index.scss'

import Landing from '../components/landing'
import Knowledge from '../components/knowledge'
import Experience from '../components/experience'
import Projects from '../components/projects'

function Index() {
  return (
    <Fragment>
      <Landing />
      <Knowledge />
      <Experience />
      <Projects />
    </Fragment>
  )
}

export default Index;
