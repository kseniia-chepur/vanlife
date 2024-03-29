import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import HostVans from './pages/HostVans/HostVans';
import HostVanDetail from './pages/HostVanDetail/HostVanDetail';
import HostVanInfo from './pages/HostVanInfo/HostVanInfo';
import HostVanPhotos from './pages/HostVanPhotos/HostVanPhotos';
import HostVanPricing from './pages/HostVanPricing/HostVanPricing';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';

function App() {
  return (
  <BrowserRouter> 
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetail />} >
            <Route index element={<HostVanInfo />}/>
            <Route path="pricing" element={<HostVanPricing />}/>
            <Route path="photos" element={<HostVanPhotos />}/>
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

