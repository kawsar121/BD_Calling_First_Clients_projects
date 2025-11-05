import React from "react";
import bannerimg from "../../assets/bg.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Baanner = () => {
  return (
    <div
      className="relative bg-cover bg-center w-[390px] h-[510px]  md:w-[1350px] md:h-[600px] flex items-center"
      style={{ backgroundImage: `url(${bannerimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl px-6 md:px-12 text-left">
        <h1 className="text-3xl trnsatio md:text-6xl font-bold mb-4 font-raleway leading-tight">
          Discover your skin's true potential
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-8">
          Premium skincare that combines innovation with clean, effective
          ingredients for all skin types.
        </p>
        {/* Buttons */}
        <div className="flex  sm:flex-row gap-4">
          <Link
            to="/collections"
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Baanner;
