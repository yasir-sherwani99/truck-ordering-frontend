import { BrowserRouter, Route, Routes } from 'react-router-dom'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

import HomePage from './pages/Guest/HomePage';
import ServicePage from './pages/Guest/ServicePage';
import FreightQuotePage from './pages/Guest/FreightQuotePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/freight-quote" element={<FreightQuotePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
