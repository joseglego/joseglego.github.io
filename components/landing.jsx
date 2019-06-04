import './landing.scss'

function Landing() {
  return (
    <div className='landing'>
      <h1 className='landing__title'>josegLEGO</h1>
      <h2 className='landing__name'>
        <span>José Gregorio </span>
        <span className='landing-name__primary'>Lezama González</span>
      </h2>
      <h2 className='landing__position'>
        <span className='landing-position__primary'>FrontEnd</span>
        <span className='landing-position__break'> / </span>
        <span>Fullstack</span>
      </h2>
      <p>
        <span className='landing__description'>I am a passionate developer,  </span>
        <span className='landing__description'> a lego fan, </span>
        <span className='landing__description'> and a coffee lover. </span>
      </p>
    </div>
  )
}

export default Landing;
