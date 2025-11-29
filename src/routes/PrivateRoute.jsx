import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import loadingImg from '../assets/running.gif'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto flex justify-center items-center py-20">
        <img src={loadingImg} alt="" className="w-xs" />
        <h1 className='text-2xl text-center my-3 '>Loding...</h1>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace/>;
  }

  return children;
};

export default PrivateRoute;