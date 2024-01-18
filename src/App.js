import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/VanDetail/VanDetail';
import Layout from './components/Layout/Layout';
import './App.scss';

import "./server";
import Dashboard from './pages/Dashboard/Dashboard';
import Income from './pages/Income/Income';
import Reviews from './pages/Reviews/Reviews';
import HostLayout from './components/HostLayout/HostLayout';

function App() {
  return (
    <BrowserRouter>   
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

