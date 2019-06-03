import { Fragment } from 'react'

import './index.scss'

import Landing from '../components/landing'
import Knowledge from '../components/knowledge'
import Experience from '../components/experience'

function Index() {
  return (
    <Fragment>
      <Landing />
      <Knowledge />
      <Experience />
    </Fragment>
  )
}

export default Index;
