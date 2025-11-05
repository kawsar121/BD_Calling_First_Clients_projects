import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../ContextApi/SetContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UseAxios from "../../../Auth/UseAxios";

const AddtoCart = () => {
  const { user, loding } = useContext(Context);
  const useAxiosSecure = UseAxios();
  const navigate = useNavigate();
  //   console.log(user)
  if (loding) {
    return <p>loading...</p>;
  }
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    if (user?.email) {
      axios
        .post(
          "http://localhost:5000/jwt",
          { email: user?.email },
          { withCredentials: true }
        )
        .then(() => {
          // axios
          //   .get(`http://localhost:5000/cart?email=${user.email}`, {
          //     withCredentials: true,
          //   })
          //   .then((res) => setCart(res.data))
          //   .catch((err) => console.error(err));
          useAxiosSecure.get(`/cart?email=${user.email}`)
          .then(res => {
            setCart(res.data)
          })
        });
    }
  }, [user?.email]);

  // Delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/cart/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        alert("🗑️ Item removed from cart!");
        setCart((prev) => prev.filter((item) => item._id !== id));
      }
    });
  };
  const continueShopping = () => {
    navigate("/showProducts");
  };

  return (
    <div className="max-w-5xl mx-auto p-5 mt-24">
      <h2 className="textxl lg:text-2xl font-semibold mb-5">
        My Cart ({cart.length} items)
      </h2>
      <div className="grid gap-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border p-3 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.photo}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p>Qty: {item.quantity}</p>

              {/* 🗑️ Delete Button */}
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-500 hover:text-red-700 font-semibold border border-red-500 px-3 py-1 rounded-md hover:bg-red-50 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-5">
        <Link
          onClick={continueShopping}
          className=" mt-3 border p-2 border-gray-600 rounded-md"
        >
          Continue Shopping
        </Link>
        <button
          onClick={() => navigate("/cheekout", { state: { cart } })}
          className="mt-3 border p-2 border-gray-600 rounded-md"
        >
          Cheek Outs
        </button>
      </div>
    </div>
  );
};

export default AddtoCart;
