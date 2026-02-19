import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Checkout = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const trxid = form.trxid.value;
    const orderData = {
      name,
      email,
      address,
      phone,
      cart,
      trxid,
      totalPrice,
      status: "pending",
      date: new Date().toLocaleString(),
    };

    console.log(orderData);
    // alert("✅ Order placed successfully!");
    axios.post("https://bd-calling-first-project-backend.vercel.app/payment", orderData).then((res) => {
      alert("Order submitted! We will verify your payment soon.");
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-28 p-5 grid md:grid-cols-2 gap-8 min-h-screen">
      {/* Checkout Form */}
      <div>
        <h2 className="text-2xl font-semibold mb-5">Checkout Information</h2>
        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-md"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-md"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-md"
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            className="w-full border p-3 rounded-md"
            required
          ></textarea>

          {/* Add Bkash */}
          <div className="border p-4 rounded-md bg-pink-50">
            <h3 className="font-semibold mb-2 text-pink-600">
              bKash Payment Instruction
            </h3>

            <p className="text-sm">
              Please send <span className="font-bold">{totalPrice}$</span> to:
            </p>

            <p className="font-bold text-lg text-pink-700">01622646721</p>
            <p className="text-sm mb-3">(Agent bKash Number)</p>

            <p className="text-sm mb-2">
              After payment, enter your bKash Transaction ID below:
            </p>

            <input
              name="trxid"
              type="text"
              placeholder="Enter bKash Transaction ID"
              className="w-full border p-3 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Cart Summary */}
      <div>
        <h2 className="text-2xl font-semibold mb-5">Order Summary</h2>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border p-2 rounded-md"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">{item.price}$</p>
              </div>
            ))}
          </div>
        )}
        {/* Total price Add */}
        <div className="border-t pt-4 mt-4 flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>{totalPrice}$</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
