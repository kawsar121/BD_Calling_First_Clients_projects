import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../ContextApi/SetContext"; // তোমার Auth/User context

const AdminRoute = ({ children }) => {
  const { user } = useContext(Context); // লগিন করা user
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    if (!user?.email) {
      setIsAdmin(false);
      return;
    }

    // Backend call to check admin role
    fetch(`https://bd-calling-first-project-backend.vercel.app/admin/users`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        const currentUser = data.find(u => u.email === user.email);
        if (currentUser?.role === "admin") setIsAdmin(true);
        else setIsAdmin(false);
      })
      .catch(() => setIsAdmin(false));
  }, [user]);

  if (isAdmin === null) {
    return <p>Loading...</p>; // বা spinner
  }

  if (!isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;