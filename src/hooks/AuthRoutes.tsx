import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();
  const BASENAME = import.meta.env.VITE_BASENAME;

  useEffect(() => {
    if (loading) {
      return; 
    }
    if (!isAuthenticated) {
      navigate(`${BASENAME}/login`); 
    }
  }, [isAuthenticated, loading, navigate]);

 
  return isAuthenticated ? <>{element}</> : null;
};

export default PrivateRoute;
