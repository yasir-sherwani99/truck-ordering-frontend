import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

import LoaderClock from './components/loaders/LoaderClock';

const HomePage = lazy(() => import('./pages/Guest/HomePage'));
const ServicePage = lazy(() => import('./pages/Guest/ServicePage'));
const BookingPage = lazy(() => import('./pages/Guest/BookingPage'));
const LoginPage = lazy(() => import('./pages/Guest/LoginPage'));
const RegisterPage = lazy(() => import('./pages/Guest/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/Dashboard/HomePage'));

function App() {
  return (
    <Suspense fallback={<LoaderClock />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/book-truck" element={<BookingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
