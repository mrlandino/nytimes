import Article from './Article'
import '../styles/Articles.css'
// import stockImage from '../styles/stockImage.jpeg'

const Articles = ({currentArticles}) => {
  const articleCards = currentArticles.results.map((article, index) => {
    const photoURL = () => {
      if (article.multimedia === null) {
        return 'https://st.depositphotos.com/2309453/2603/i/600/depositphotos_26039209-stock-photo-excited-businessman-jumps-high-in.jpg' 
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