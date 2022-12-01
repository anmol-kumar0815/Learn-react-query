import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import  Home from './components/Home'
import RQSuperHeroes from './components/RQSuperHeroes'
import SuperHeroes from './components/SuperHeroes'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/super-heroes' element={<SuperHeroes />} />
          <Route exact path='/rq-super-heroes' element={<RQSuperHeroes />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
