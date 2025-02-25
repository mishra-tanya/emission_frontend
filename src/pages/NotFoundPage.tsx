import React from "react";
import useAuth from "../hooks/useAuth";
import {  useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const isAuthenticated = useAuth();
  const navigate=useNavigate();
  const BASENAME = import.meta.env.VITE_BASENAME;

  if (!isAuthenticated) {
    navigate(`${BASENAME}/login`)
  }

  return (
    <div>
      <h1>API Response</h1>
    </div>
  );
};

export default NotFoundPage;
