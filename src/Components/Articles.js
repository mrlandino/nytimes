import Article from './Article'
import '../styles/Articles.css'
import stockImage from '../styles/stockImage.jpeg'

const Articles = ({homeArticles}) => {
  const articleCards = homeArticles.map(article => {
    const photoURL = () => {
      if (article.multimedia === null) {
        return 'https://depositphotos.com/stock-photos/jubilation.html' 
      } else {
        return article.multimedia[0].url;
      } 
    }
    return (
      <Article 
        id={article.uri}
        key={article.uri}
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