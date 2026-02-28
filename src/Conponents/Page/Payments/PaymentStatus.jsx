import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../../ContextApi/SetContext";

const PaymentStatus = () => {
  const { user } = useContext(Context);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://bd-calling-first-project-backend.vercel.app/my-orders?email=${user.email}`,
        { withCredentials: true }
      )
      .then(res => setPayments(res.data));
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Transaction</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map(p => (
              <tr key={p._id} className="border-t">
                <td className="p-3">{p.date}</td>
                <td className="p-3">{p.trxid}</td>
                <td className="p-3">${p.totalPrice}</td>
                <td className="p-3">
                  <StatusBadge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold
      ${
        status === "approved"
          ? "bg-green-100 text-green-600"
          : "bg-yellow-100 text-yellow-600"
      }`}
  >
    {status}
  </span>
);

export default PaymentStatus;