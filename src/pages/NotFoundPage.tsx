import React from "react";
import useAuth from "../hooks/useAuth";
import {  useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const isAuthenticated = useAuth();
  const navigate=useNavigate();

  if (!isAuthenticated) {
    navigate('/login')
    return <div>Redirecting to login...</div>;
  }

  return (
    <div>
      <h1>API Response</h1>
    </div>
  );
};

export default NotFoundPage;
