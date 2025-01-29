import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

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
const UserBookingPage = lazy(() => import('./pages/Dashboard/BookingPage'));

const AdminLoginPage = lazy(() => import('./pages/Admin/LoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/Admin/HomePage'));
const AdminBookingPage = lazy(() => import('./pages/Admin/BookingsPage'));
const AdminBookingDetailsPage = lazy(() => import('./pages/Admin/BookingDetailsPage'));

const PageTitle = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'Truck Ordering App | Home';
    } else if (location.pathname === '/services') {
      document.title = 'Truck Ordering App | Services';
    } else if (location.pathname === '/book-truck') {
      document.title = 'Truck Ordering App | Booking';
    } else if (location.pathname === '/login') {
      document.title = 'Truck Ordering App | Login';
    } else if (location.pathname === '/register') {
      document.title = 'Truck Ordering App | Register';
    } else if (location.pathname === '/dashboard') {
      document.title = 'Truck Ordering App | Dashboard';
    } else if (location.pathname === '/bookings') {
      document.title = 'Truck Ordering App | Bookings';
    } else if (location.pathname === '/admin') {
      document.title = 'Truck Ordering App | Admin';
    }
  }, [location]);

  return null;  // This component doesn't render anything, it just updates the title.
};

function App() {
  return (
    <Suspense fallback={<LoaderClock />}>
      <BrowserRouter>
        <PageTitle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/book-truck" element={<BookingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/bookings" element={<UserBookingPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/bookings" element={<AdminBookingPage />} />
          <Route path="/admin/booking/:id/details" element={<AdminBookingDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
