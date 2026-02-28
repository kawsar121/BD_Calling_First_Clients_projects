import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../../ContextApi/SetContext";
// import { Context } from "../ContextApi/SetContext";

const MyOrders = () => {
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

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      <div className="space-y-4">
        {orders.map(order => (
          <div
            key={order._id}
            className="bg-white p-5 rounded-xl shadow flex flex-col md:flex-row justify-between gap-4"
          >
            <div>
              <p><b>Transaction:</b> {order.trxid}</p>
              <p><b>Date:</b> {order.date}</p>
              <p><b>Amount:</b> ${order.totalPrice}</p>
            </div>

            <StatusBadge status={order.status} />
          </div>
        ))}
      </div>
    </div>
  );
};


const StatusBadge = ({ status }) => (
  <span
    className={`px-4 py-2 rounded-full text-sm font-semibold w-fit
    ${
      status === "approved"
        ? "bg-green-100 text-green-600"
        : "bg-yellow-100 text-yellow-600"
    }`}
  >
    {status}
  </span>
);

export default MyOrders;