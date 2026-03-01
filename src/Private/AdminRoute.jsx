import { useContext, useEffect, useState } from "react";
import { Context } from "../ContextApi/SetContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AdminRoute = ({ children }) => {
  const { user } = useContext(Context);
  const [isAdmin, setIsAdmin] = useState(null); // null = loading

  useEffect(() => {
    if (!user?.email) {
      setIsAdmin(false);
      return;
    }
    const checkAdmin = async () => {
      try {
        const res = await axios.get(
          `https://bd-calling-first-project-backend.vercel.app/admin/check-admin?email=${user.email}`,
          { withCredentials: true }
        );
        setIsAdmin(res.data.isAdmin);
      } catch (err) {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, [user?.email]);

  if (isAdmin === null) return <p>Loading...</p>; // wait until backend responds

  if (!isAdmin) return <Navigate to="/" replace />;

  return children;
};

export default AdminRoute;