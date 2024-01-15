import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

