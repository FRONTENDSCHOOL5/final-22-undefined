import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = ({ authenticated }) => {
  if (!authenticated) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};

export default AuthRoute;
