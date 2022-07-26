import Nav from './Nav.js'
import Landing from './Landing.js'
import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getHomeArticles } from '../apiCalls.js';
import ArticleDetails from './ArticleDetails.js';

const App = () => {
  const [homeArticles, setHomeArticles] = useState([])

  useEffect(() => {
    getHomeArticles()
    .then(data => setHomeArticles(data.results))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={homeArticles && <Landing homeArticles={homeArticles}/>} />
        <Route path='/:id' element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
