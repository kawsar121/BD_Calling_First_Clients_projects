import React, { useContext, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../../ContextApi/SetContext";
import axios from "axios";

const ProductDetails = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const pdetails = useLoaderData();

  if (!pdetails) {
    return <p>loading....</p>;
  }
  const [quantitys, setQuantitys] = useState(1);

  const handleIncrease = () => setQuantitys((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantitys > 1) setQuantitys((prev) => prev - 1);
  };
  const { _id, name, category, url, quantity, price, details } = pdetails;
  console.log(pdetails);
  // Post Cart
  const handleAddtoCarts = () => {
    if (!user) {
      alert("Please login first to add to cart!");
      navigate("/login");
      return;
    }

    const cartData = {
      email: user?.email,
      id: _id,
      name: name,
      category: category,
      photo: url,
      price: price,
      quantity:quantitys
    };
    axios.post("bd-calling-first-project-backend-ax0of9i78.vercel.app/cart", cartData)
    .then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        navigate("/cart");
        alert("Add to cart SuccessFully");
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left side - Images */}
      <div className="flex flex-col lg:flex-row gap-3 items-center">
        {/* Small preview images */}

        {/* Main Image */}
        <div className="mx-auto ">
          <img
            src={url}
            alt={name}
            className="transform scale-100 md:scale-110 hover:scale-95 md:hover:scale-100 transition-transform duration-500 w-full h-[350px] sm:h-[400px] lg:h-[300px] rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Right side - Details */}
      <div className="flex flex-col justify-center mt-10">
        <h2 className="text-3xl font-semibold mb-3">{name}</h2>
        <p className="text-yellow-500 mb-2">
          ★★★★★ <span className="text-gray-600">(137 Reviews)</span>
        </p>

        <div className="flex flex-wrap items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-black">${price}</span>
          <span className="text-gray-400 line-through">$30</span>
          <span className="text-green-600 text-sm">Save 50% right now</span>
        </div>

        <p className="text-gray-700 leading-relaxed mb-5">
          No description available for this product.
        </p>

        <div className="border-t border-gray-300 pt-4 mt-4 space-y-3">
          <h4 className="font-semibold">The Lowdown:</h4>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Good</li>
            <li>Best quality</li>
            <li>High demanding products</li>
          </ul>
        </div>

        {/* Quantity and Button */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={handleDecrease}
              className="px-3 py-1 text-lg hover:bg-gray-100"
            >
              −
            </button>
            <span className="px-4 font-medium">{quantitys}</span>
            <button
              onClick={handleIncrease}
              className="px-3 py-1 text-lg hover:bg-gray-100"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddtoCarts}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
