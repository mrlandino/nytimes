import '../styles/ArticleDetails.css'

const ArticleDetails = ({currentArticles, detailsArticle}) => {
 
  return (
    <div className='article-details-container'>
      <div className='article-details'>
        <h2 className='details-title'>{currentArticles.results[Number(detailsArticle)].title}</h2>
        <p className='details-abstract'>{currentArticles.results[Number(detailsArticle)].abstract}</p>
        <a className='details-url' href={currentArticles.results[Number(detailsArticle)].url}>Click to view full article</a>
        <p className='details-byline'>{currentArticles.results[Number(detailsArticle)].byline}</p>
        <img className='details-image' src={currentArticles.results[Number(detailsArticle)].multimedia[0] === null ? 'https://st.depositphotos.com/2309453/2603/i/600/depositphotos_26039209-stock-photo-excited-businessman-jumps-high-in.jpg' : currentArticles.results[Number(detailsArticle)].multimedia[0].url}/>
      </div>
    </div>
  )
}

export default ArticleDetails;