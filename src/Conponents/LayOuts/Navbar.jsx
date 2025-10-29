import React, { useState, useEffect, useContext } from "react";
import logoimg from "../../assets/Logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LuShoppingBag, LuUserRound } from "react-icons/lu";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import { Context } from "../../ContextApi/SetContext";
import ProtectedRoute from "../../Private/ProtectedRoute";
import AddtoCart from "../Page/Products/AddtoCart";
import Themes from "../../Theme/Themes";
import NavbarSearch from "./NavbarSearch ";

const Navbar = () => {
  const { signout, user } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // Logouts
  const handleLogedOut = () => {
    signout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const menu = (
    <>
      <li>
        <Link to="/">Skincare</Link>
      </li>
      <li>
        <Link to="/collections">Collections</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );

  return (
    <nav className="w-full fixed z-40 top-0 bg-gray-100 shadow-sm  transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-0 flex items-center justify-between">
        {/* LEFT - LOGO */}
        <div className="flex items-center">
          <img className="w-20" src={logoimg} alt="Logo" />
        </div>

        {/* MIDDLE - SEARCH BAR (Mobile only) */}
        <div className="flex-1 px-2 md:hidden">
          <div className="flex items-center  rounded-md px-2 py-[3px]">
            {/* Desktop Search */}
            <div className="relative">
              <NavbarSearch />
            </div>
          </div>
        </div>

        {/* CENTER - MENU (Desktop only) */}
        <ul className="hidden md:flex menu menu-horizontal gap-8 font-medium items-center  text-red-400">
          {menu}
        </ul>

        {/* RIGHT - ICONS Dekstop Search */}
        <div className="flex items-center gap-4 text-xl text-gray-500 dark:text-gray-200">
          {/* Desktop Search */}
          {/* <div className="hidden md:flex items-center relative">
            <div
              className="flex items-center rounded-md px-0 py-[3px] cursor-pointer transition-all duration-300"
              onClick={() => setShowSearch(!showSearch)}
            >
              <IoSearchSharp className="text-xl text-gray-600 dark:text-gray-300" />
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 border border-gray-700 rounded-lg w-48 px-2  text-sm outline-none bg-transparent dark:text-white transition-all duration-300 ease-in-out"
                  autoFocus
                />
              )}
            </div>
          </div> */}
          {/* Desktop Search */}
          {/* AlterNative */}
          <div className="hidden md:flex items-center relative">
            <NavbarSearch />
          </div>

          {/* Desktop Other Icons */}
          <div className="hidden md:flex items-center gap-4">
            {/* User Icon */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                <LuUserRound className="cursor-pointer" />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Theme
                    {/* <span className="badge"> */}
                    {/* Theme Toggle */}
                    {/* <button
                        onClick={toggleTheme}
                        className="text-xl focus:outline-none"
                      >
                        {theme === "dark" ? <BsSun /> : <BsMoon />}
                      </button>
                    </span> */}
                    <span>
                      <Themes></Themes>
                    </span>
                  </a>
                </li>
                {/* Condition for login logouts */}
                {user ? (
                  <>
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">Order History</Link>
                    </li>
                    <li>
                      <Link onClick={handleLogedOut}>Log Out</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/signup">Sign Up</Link>
                      <Link to="/login">Sign In</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            {/* Shoppting Button */}
            <div className="drawer drawer-end">
              <input
                id="my-drawer-5"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-5" className="drawer-button ">
                  <LuShoppingBag className="cursor-pointer" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-5"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <div className="menu bg-base-200 min-h-full w-2/5 p-0 relative">
                  {/* Close Button */}
                  <label
                    htmlFor="my-drawer-5"
                    className="absolute top-3 right-3 cursor-pointer text-2xl"
                  >
                    <IoClose />
                  </label>

                  {/* Drawer Content */}
                  <ProtectedRoute>
                    <AddtoCart></AddtoCart>
                  </ProtectedRoute>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t shadow-md">
          <ul className="flex flex-col items-center gap-3 py-3 font-medium text-gray-800 dark:text-gray-200">
            <div className="flex gap-32">
              <div>{menu}</div>
              <div className="flex flex-col gap-4 text-xl mt-2">
                {/* User */}
                {/* User Icon */}
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="">
                    <LuUserRound className="cursor-pointer" />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu ml-32 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-28 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">
                        Theme
                        <span className="badge">
                          <Themes></Themes>
                        </span>
                      </a>
                    </li>
                    {/* Condition for login logouts */}
                    {user ? (
                      <>
                        <li>
                          <Link to="/profile" className="justify-between">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/cart">Order History</Link>
                        </li>
                        <li>
                          <Link onClick={handleLogedOut}>Log Out</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/signup">Sign Up</Link>
                          <Link to="/login">Sign In</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                <Link to="/cart">
                  <LuShoppingBag className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
