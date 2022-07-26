import '../styles/Nav.css'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const buttons = [
    'arts', 
    'automobiles', 
    'books', 
    'business', 
    'fashion', 
    'food', 
    'health', 
    'home', 
    'insider', 
    'magazine', 
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

  const renderButton = () => {
    const result = buttons.map(buttonSection => <button>{buttonSection}</button>)
    return result;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/', {replace: true})
  }

  return (
    <div className='nav-container'>
      <div className='nav'>
        <h1 className='title' type='button' onClick={handleClick}>NY Times</h1>
        {/* <button className='home-button'>HOME</button> */}
      </div>
      <div className='sections'>
        {renderButton()}
      </div>
    </div>
  )
}

export default Nav;