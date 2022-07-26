import '../styles/Landing.css'
import Articles from './Articles'

const Landing = ({currentArticles}) => {
  return (
    <div className='landing-page'>
      {currentArticles.section === "home" && <h2>Top Stories</h2>}
      <Articles currentArticles={currentArticles}/>
    </div>
  )
}

export default Landing;