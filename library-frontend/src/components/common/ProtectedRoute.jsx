// src/components/common/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ roles, children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  if (roles && !roles.includes(user.role)) return <Navigate to="/dashboard" />;

  return children;
};

export default ProtectedRoute;
