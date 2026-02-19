import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://bd-calling-first-project-backend.vercel.app/orders", {
        withCredentials: true,
      })
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-5 mt-24">
      <h2 className="text-xl font-semibold mb-5">All Orders ({orders.length})</h2>
      <div>
        {orders.map((order) => (
          <div key={order._id} className="border p-3 mb-3 rounded-lg">
            <p><b>Name:</b> {order.name}</p>
            <p><b>Email:</b> {order.email}</p>
            <p><b>Total:</b> ৳ {order.totalPrice}</p>
            <p><b>Status:</b> {order.status || "Pending"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
