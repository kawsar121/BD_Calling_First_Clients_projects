import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../../ContextApi/SetContext";

const DashboardHome = () => {
  const { user } = useContext(Context);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://bd-calling-first-project-backend.vercel.app/my-orders?email=${user.email}`,
          { withCredentials: true }
        )
        .then((res) => setOrders(res.data));
    }
  }, [user]);

  const totalOrders = orders.length;
  const approved = orders.filter(o => o.status === "approved").length;
  const pending = orders.filter(o => o.status === "pending").length;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Welcome, {user?.displayName || "User"}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Total Orders" value={totalOrders} />
        <Card title="Approved Payments" value={approved} color="green" />
        <Card title="Pending Payments" value={pending} color="yellow" />
      </div>
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <h4 className="text-gray-500">{title}</h4>
    <p className={`text-3xl font-bold text-${color || "black"}-600`}>
      {value}
    </p>
  </div>
);

export default DashboardHome;