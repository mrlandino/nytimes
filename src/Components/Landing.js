import '../styles/Landing.css'
import Articles from './Articles'

const Landing = ({homeArticles}) => {
  return (
    <div className='landing-page'>
      <h2>Top Stories</h2>
      <Articles homeArticles={homeArticles}/>
    </div>
  )
}

export default Landing;