import React from "react";
import sideBanner from "../../assets/sideBanner.jpg";
import { Link } from "react-router-dom";
const SecondBanner = () => {
  return (
    <div className="bg-[#F9E4CB] p-16 mt-10 bg-gradient-animated">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        {/* Left Side: Text */}
        <div className="space-y-4">
          <h2 className="text-xl  font-semibold text-black mt-5 md:mt-0">
            Our Skincare Philosophy
          </h2>

          <p className="text-sm text-black leading-relaxed">
            Seoul Mirage was born from a deep appreciation for Korean skincare
            innovation <br />
            and the belief that effective products should be accessible to
            everyone.
          </p>

          <p className="text-sm text-black leading-relaxed">
            We combine time-tested Korean ingredients with modern science to
            create <br />
            formulations that deliver visible results. Each product is
            meticulously crafted to <br />
            honor the tradition of the multi-step skincare ritual while fitting
            seamlessly <br />
            into your daily routine.
          </p>

          <Link to='/about'>
            <button className="bg-white mt-3 text-black text-xs px-8 text-center py-3 rounded-2xl hover:bg-black hover:text-white transition font-semibold">
            About Us
          </button>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="flex items-center justify-center ">
          <img src={sideBanner} alt="" className="w-[500px] object-contain rounded-md transform scale-110 hover:scale-100 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
