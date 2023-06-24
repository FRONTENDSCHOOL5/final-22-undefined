import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const NonAuthRoute = ({ authenticated }) => {
  if (authenticated) {
    return <Navigate to='/home' replace />;
  }
  return <Outlet />;
};

export default NonAuthRoute;
