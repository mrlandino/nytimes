import '../styles/Nav.css'
import { useNavigate } from 'react-router-dom';
import { getHomeArticles } from '../apiCalls.js';

const Nav = ({setCurrentArticles, setSectionTitle}) => {
  const buttons = [
    'arts', 
    'automobiles', 
    'books', 
    'business', 
    'fashion', 
    'food', 
    'health', 
    'insider', 
    'movies', 
    'nyregion', 
    'obituaries', 
    'opinion', 
    'politics', 
    'realestate', 
    'science', 
    'sports', 
    'sundayreview', 
    'technology', 
    'theater', 
    't-magazine', 
    'travel', 
    'upshot', 
    'us', 
    'world'
  ]

  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    navigate(`/${section}`, {replace: true})
    setSectionTitle(section)
    getHomeArticles(section)
    .then(data => setCurrentArticles(data))
    .catch(error => console.log(error))
  }

  const renderButton = () => {
    const result = buttons.map((buttonSection, index) => <button key={index} onClick={() => handleButtonClick(buttonSection)}>{buttonSection}</button>)
    return result;
  }

  const handleClick = () => {
    navigate('/', {replace: true})
    getHomeArticles("home")
    .then(data => setCurrentArticles(data))
    .catch(error => console.log(error))
    setSectionTitle("Top Stories")
  }

  return (
    <div className='nav-container'>
      <div className='nav'>
        <h1 className='title' type='button' onClick={handleClick}>NY Times</h1>
      </div>
      <div className='sections'>
        {renderButton()}
      </div>
    </div>
  )
}

export default Nav;