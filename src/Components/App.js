import Nav from './Nav.js'
import Landing from './Landing'
import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        {/* <Route path='/' element={<Landing />} /> */}
        {/* <Route path='/:id' element={<Articles />} /> */}
      </Routes>
    </div>
  );
}

export default App;
