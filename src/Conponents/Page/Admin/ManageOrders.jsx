import { useEffect, useState } from "react";
import axios from "axios";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    setLoading(true);
    axios.get("https://bd-calling-first-project-backend.vercel.app/admin/orders", { withCredentials: true })
      .then(res => setOrders(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchOrders(); }, []);

  const updateOrder = (id, data) => {
    axios.patch(`https://bd-calling-first-project-backend.vercel.app/admin/orders/${id}`, data, { withCredentials: true })
      .then(() => fetchOrders())
      .catch(err => console.error(err));
  };

  if (loading) return <p className="text-center mt-20 text-lg">Loading orders...</p>;
  if (!orders.length) return <p className="text-center mt-20 text-lg">No orders yet</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Manage Orders</h2>
      {orders.map(order => (
        <div key={order._id} className="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p><b>Name:</b> {order.name}</p>
            <p><b>Email:</b> {order.email}</p>
            <p><b>Total:</b> ${order.totalPrice}</p>
            <p><b>Trx:</b> {order.trxid}</p>
            <p><b>Delivery:</b> {order.deliveryTime || "Not set"}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              {["pending","confirmed","delivered"].map(status => (
                <button
                  key={status}
                  onClick={() => updateOrder(order._id, { status })}
                  className={`px-3 py-1 rounded text-white ${order.status===status?"bg-green-500":"bg-gray-400"}`}
                >
                  {status}
                </button>
              ))}
            </div>
            <select value={order.deliveryTime||""} onChange={e => updateOrder(order._id, { deliveryTime: e.target.value })} className="border p-1 rounded">
              <option value="">Set Delivery Time</option>
              <option value="1-2 days">1-2 days</option>
              <option value="3-5 days">3-5 days</option>
              <option value="7 days">7 days</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageOrders;