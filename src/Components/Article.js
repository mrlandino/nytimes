import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Article.css'

const Article = ({title, photo, photoCaption, id, abstract, setDetailsArticle}) => {
  const handleClick = () => {
    setDetailsArticle(id)
  }

  return (
    <Link to={`/article/${id}`}>
      <div className='article' onClick={handleClick}>
          <img className='article-photo' id={id} src={photo}/>
          <div className='article-text-container'>
            <h1 className='article-title'>{title}</h1>
            <p className='article-abstract'>{abstract}</p>
          </div>
      </div>
    </Link>
  )
}

export default Article;