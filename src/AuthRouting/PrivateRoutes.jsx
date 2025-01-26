import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Components/UI/Loader';

const PrivateRoutes = ({ element }) => {
  const { currentUser, currentUserLoading } = useSelector((state) => state.currentUser);

  if (currentUserLoading) return <Loader />;

  return currentUser ? element : <Navigate to="/login" />;  
};

export default PrivateRoutes;