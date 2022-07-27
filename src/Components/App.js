import Nav from './Nav.js'
import Landing from './Landing.js'
import '../styles/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getHomeArticles } from '../apiCalls.js';
import ArticleDetails from './ArticleDetails.js';

const App = () => {
  const [currentArticles, setCurrentArticles] = useState('')
  const [sectionTitle, setSectionTitle] = useState('Top Stories')
  const [detailsArticle, setDetailsArticle] = useState('')

  useEffect(() => {
    getHomeArticles('home')
    .then(data => setCurrentArticles(data))
    .catch(error => console.log(error))
  }, [])

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate(`/home`, {replace: true})
  }

  return (
    <div className="App">
      <Nav setCurrentArticles={setCurrentArticles} setSectionTitle={setSectionTitle}/>
      <Routes>
        <Route path='/' element={currentArticles && <Landing currentArticles={currentArticles} sectionTitle={sectionTitle}/>}/>
        {currentArticles ? <Route exact path='/:section' element={currentArticles && <Landing currentArticles={currentArticles} sectionTitle={sectionTitle}/>}/> : navigateHome()}
        <Route exact path='article/:id' element={<ArticleDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
