// src/Routes/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../ContextApi/SetContext";

const ProtectedRoute = ({ children }) => {
  const {user, loading} = useContext(Context)
    // const location = useLocation();
    if(loading){
        return<p>please wait page loading....</p>
    }
    // console.log(location)
    if(user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default ProtectedRoute;
