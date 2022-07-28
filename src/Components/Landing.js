import '../styles/Landing.css'
import Articles from './Articles'

const Landing = ({currentArticles, sectionTitle, setDetailsArticle}) => {
  return (
    <div className='landing-page'>
      <h2>{sectionTitle.toUpperCase()}</h2>
      <Articles currentArticles={currentArticles} setDetailsArticle={setDetailsArticle}/>
    </div>
  )
}

export default Landing;