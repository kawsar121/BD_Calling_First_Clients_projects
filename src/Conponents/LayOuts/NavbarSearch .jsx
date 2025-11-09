import React, { useState, useEffect, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

const NavbarSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 300);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load all products
  useEffect(() => {
    axios
      .get("bd-calling-first-project-backend-ax0of9i78.vercel.app/iteams")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter products
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setFilteredProducts([]);
      setShowDropdown(false);
      return;
    }

    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setShowDropdown(filtered.length > 0);
  }, [debouncedQuery, products]);

  // Click outside → hide dropdown (even on mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const highlightText = (text, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Desktop: icon to toggle */}
      {!isMobile && !showSearch && (
        <div
          className="flex items-center rounded-md px-2 py-1 cursor-pointer transition-all duration-300"
          onClick={() => setShowSearch(true)}
        >
          <IoSearchSharp className="text-xl text-gray-600 dark:text-gray-300" />
        </div>
      )}

      {/* Search input + dropdown */}
      {(showSearch || isMobile) && (
        <div
          className={`${
            isMobile
              ? "w-full relative" // prevent overflow on mobile
              : "absolute -top-2 -right-[234px] md:-top-3 md:right-0 w-64"
          } bg-white dark:bg-gray-800 rounded-md z-50`}
        >
          <div className="flex items-center border border-gray-300 rounded-md px-1 shadow-sm">
            <IoSearchSharp className="text-gray-500 text-xl" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="ml-2 outline-none text-base bg-transparent w-full dark:text-white"
              autoFocus={!isMobile}
              onFocus={() =>
                filteredProducts.length > 0 && setShowDropdown(true)
              }
            />
          </div>

          {/* Dropdown */}
          {showDropdown && filteredProducts.length > 0 && (
            <div
              className={`absolute left-0 mt-2 w-full border rounded-md bg-white dark:bg-gray-900 shadow-md max-h-60 overflow-y-auto ${
                isMobile ? "top-full" : ""
              }`}
            >
              {filteredProducts.map((p) => (
                <Link
                  key={p._id}
                  to={`/iteams/id/${p._id}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {
                    setShowDropdown(false);
                    if (!isMobile) setShowSearch(false);
                  }}
                >
                  {highlightText(p.name, debouncedQuery)}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
