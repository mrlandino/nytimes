import Nav from './Nav.js'
import Landing from './Landing.js'
import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getHomeArticles } from '../apiCalls.js';
import ArticleDetails from './ArticleDetails.js';

const App = () => {
  const [currentArticles, setCurrentArticles] = useState('')

  useEffect(() => {
    getHomeArticles()
    .then(data => setCurrentArticles(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={currentArticles && <Landing currentArticles={currentArticles}/>}/>
        <Route exact path='article/:id' element={<ArticleDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
