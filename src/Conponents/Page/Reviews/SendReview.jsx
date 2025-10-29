import React from "react";

const SendReview = () => {
  return (
    <div>
      <div className="text-center justify-center mt-24">
        <h2 className="text-[#000000CC] text-lg font-bold">
          Join Our Community
        </h2>
        <p className="text-[#000000CC] text-xs mt-2">
          Subscribe to our newsletter for exclusive offers, skincare tips, and
          new product <br /> announcements.
        </p>
      </div>
      <div className="flex justify-center mt-7 gap-3">
        <input
          type="email"
          name=""
          placeholder="Your email address"
          id=""
          className="border outline-none text-[#1E2A38] border-gray-500 px-5 md:px-16 py-1 rounded-3xl"
        />
        <input type="submit" value="Subscribe" className="bg-[#F092B0] cursor-pointer text-black  px-5 py-3 rounded-2xl text-center text-xs" />
      </div>
    </div>
  );
};

export default SendReview;
