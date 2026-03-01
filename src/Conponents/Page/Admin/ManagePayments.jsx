import { useEffect, useState } from "react";
import axios from "axios";

const ManagePayments = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    axios.get("https://bd-calling-first-project-backend.vercel.app/admin/orders", { withCredentials: true })
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => { fetchOrders(); }, []);

  const verifyPayment = (id, status) => {
    axios.patch(`https://bd-calling-first-project-backend.vercel.app/admin/orders/${id}`, { status }, { withCredentials: true })
      .then(() => fetchOrders());
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Payment Verification</h2>
      {orders.map(order => (
        <div key={order._id} className="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p><b>{order.name}</b> - {order.email}</p>
            <p>Total: ${order.totalPrice}</p>
            <p>Transaction ID: {order.trxid}</p>
            <p>Status: {order.status}</p>
          </div>
          <div className="flex gap-2">
            {order.status !== "approved" && <button onClick={()=>verifyPayment(order._id,"approved")} className="px-3 py-1 bg-green-500 text-white rounded">Approve</button>}
            {order.status !== "rejected" && <button onClick={()=>verifyPayment(order._id,"rejected")} className="px-3 py-1 bg-red-500 text-white rounded">Reject</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagePayments;