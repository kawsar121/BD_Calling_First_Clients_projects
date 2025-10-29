import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];
  console.log(cart)

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phone = form.phone.value;

    const orderData = {
      name,
      email,
      address,
      phone,
      cart,
      date: new Date().toLocaleString(),
    };

    console.log(orderData);
    alert("✅ Order placed successfully!");
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
                <p className="font-semibold">${item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
