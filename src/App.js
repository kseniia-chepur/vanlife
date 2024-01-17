import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/VanDetail/VanDetail';
import Layout from './components/Layout';
import './App.scss';

import "./server";

function App() {
  return (
    <BrowserRouter>   
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

