import { NavLink} from 'react-router-dom';
import '../styles/Article.css'

const Article = ({title, photo, photoCaption, id}) => {
  return (
    <NavLink to={`/${id}`}>
    <div className='article'>
        <img className='article-photo' id={id} src={photo}/>
        <h1>{title}</h1>
    </div>
    </NavLink>
  )
}

export default Article;