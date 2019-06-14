import './section.scss'

function Section (props) {
  return (
    <div className={`section ${props.extraClasses}`}>
      <div className='section__wrapper'>
        <div className={props.extraTitleClasses}>
          <div className='section__uppertitle'>{props.index}.</div>
          <h2 className='section__title'>{props.title}</h2>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default Section
