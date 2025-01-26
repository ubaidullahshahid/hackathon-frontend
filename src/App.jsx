import './App.css';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import PublicRoutes from './AuthRouting/PublicRoutes';
import PrivateRoutes from './AuthRouting/PrivateRoutes';
import Home from './Pages/Home';
import OtpVerify from './Pages/OtpVerify';
import Register from './Pages/Register';
import DashBoard from './Pages/DashBoard';
import Login from './Pages/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './Redux/Slices/CurrentUser';
import TrackToken from './Pages/TrackToken';
import Graphs from './Pages/Admin/graphs';
import StaffDashboard from './Pages/Staff/Dashboard';
import ReceptionDashboard from './Pages/Reception/Dashboard';

const router = createBrowserRouter([
  { path: '/login', element: <PublicRoutes element={<Login />} /> },
  { path: '/register', element: <PublicRoutes element={<Register />} /> },
  { path: '/verifyotp', element: <PublicRoutes element={<OtpVerify />} /> },
  { path: '/dashboard', element: <PrivateRoutes element={<DashBoard />} /> },
  { path: '/track-token', element: <TrackToken /> },
  { path: '/admin/dashboard', element: <PrivateRoutes element={<Graphs />} />},
  { path: '/staff/dashboard', element: <PrivateRoutes element={<StaffDashboard />} /> },
  { path: '/reception/dashboard', element: <PrivateRoutes element={<ReceptionDashboard />} /> },
  { path: '/reception', element: <Home /> },
  { path: '/', element: <RedirectToReception /> },

]);

function RedirectToReception() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/reception');
  }, [navigate]);

  return null;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
