import React from "react";
import logo from "../../assets/Logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-5 max-w-6xl mx-auto mt-14">
      <div className="grid md:flex justify-center items-center gap-5 md:justify-between mt-6">
        <div className="w-56">
          <div className="">
            <img src={logo} alt="" srcset="" className="w-16 h-12" />
            <p className="">
              Best Cousmetics site sit amet consectetur.Scelerisque lectus
              habitasse adipiscing.
            </p>
          </div>
          {/* Social Icon Links */}
          <div className="flex gap-3 mt-1">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaXTwitter />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl">Shop</h2>
          <p className="font-normal text-xs  mt-2">
            All Products
          </p>
          <p className="font-normal text-xs mt-1">
            Accessories
          </p>
          <p className="font-normal text-xs mt-1">Cosmetics</p>
        </div>
        <div>
          <h2 className="text-2xl">About</h2>
          <p className="font-normal text-xs  mt-2">
            All Products
          </p>
          <p className="font-normal text-xs  mt-1">
            Accessories
          </p>
          <p className="font-normal text-xs mt-1">Cosmetics</p>
        </div>
      </div>
      <div>
        <p className="text-black text-xs mt-20 border-t-[1px] pt-2 text-center md:text-left">
          © 2025 KB71. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
