import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Vans from './pages/Vans/Vans';

function App() {
  return (
    <BrowserRouter> 
      <header className='header'>
        <Link to='/' className='site-logo'>#VanLife</Link>
          <nav>
            <Link to='/about'>About</Link>
            <Link to='/'>Home</Link>
            <Link to='/vans'>Vans</Link>
          </nav>
      </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

