import Article from './Article'
import '../styles/Articles.css'
// import stockImage from '../styles/stockImage.jpeg'

const Articles = ({currentArticles}) => {
  const articleCards = currentArticles.results.map((article, index) => {
    const photoURL = () => {
      if (article.multimedia === null) {
        return 'https://depositphotos.com/stock-photos/jubilation.html' 
      } else {
        return article.multimedia[0].url;
      } 
    }
    return (
      <Article 
        id={index}
        key={index}
        title= {article.title}
        photo={photoURL()}
        abstract={article.abstract}
        // photoCaption={article.multimedia[0].caption}
      />
    )
  })

  return (
    <div className='articles-container'>
      {articleCards}
    </div>
  )
}

export default Articles;