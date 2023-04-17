import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <progress className="progress progress-success text-center mx-auto w-56"></progress>
    );
  }
  console.log(user);
  if (user) {
    return children;
  } else {
    return <Navigate to="/signin"></Navigate>;
  }
};

export default PrivateRoute;
