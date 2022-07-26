import { Link, Outlet } from 'react-router-dom';
import '../styles/Article.css'

const Article = ({title, photo, photoCaption, id, abstract}) => {
  return (
    <Link to={`/article/${id}`}>
      <div className='article'>
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