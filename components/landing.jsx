import './landing.scss'

function Landing() {
  return (
    <div className='landing'>
      <h1 className='landing__title'>josegLEGO</h1>
      <h2 className='landing__name'>José Gregorio Lezama González</h2>
      <h2 className='landing__position'>
        <span className='landing-position__primary'>frontend</span> - fullstack
      </h2>
      <p className='landing__descriptions'>
        <span className='landing__description'>I am a passionate developer, </span>
        <span className='landing__description'> a lego fan </span>
        <span className='landing__description'> and a coffee lover. </span>
      </p>
      <div className='btns'>
        <span className='btn btn-primary'>Contact</span>
        <span className='btn btn-secondary'>Read More</span>
      </div>
    </div>
  )
}

export default Landing;
