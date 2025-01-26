import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Components/UI/Loader';

const PublicRoutes = ({ element }) => {
   const { currentUser, currentUserLoading } = useSelector((state) => state.currentUser);

  if (currentUserLoading) return<Loader/>;

  return !currentUser ? element : <Navigate to={`/${currentUser.role}/dashboard`} replace />;
};

export default PublicRoutes;
