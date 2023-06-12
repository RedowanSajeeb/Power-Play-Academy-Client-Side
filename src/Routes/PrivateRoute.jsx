import React from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <Spinner className="h-12 w-12" />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
