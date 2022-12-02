import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import './App.css'
import  Home from './components/Home'
import RQSuperHeroes from './components/RQSuperHeroes'
import SuperHeroes from './components/SuperHeroes'
import RQSuperHero from './components/RQSuperHero';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route exact path='/rq-super-heroes/:id' element={<RQSuperHero />} />
            <Route exact path='/super-heroes' element={<SuperHeroes />} />
            <Route exact path='/rq-super-heroes' element={<RQSuperHeroes />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
