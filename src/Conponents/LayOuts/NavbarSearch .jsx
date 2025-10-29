import React, { useState, useEffect, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

// Debounce function
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
  const searchRef = useRef(null);

  // Load all products once
  useEffect(() => {
    axios
      .get("http://localhost:5000/iteams")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter products
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [debouncedQuery, products]);

  // Click outside → hide everything
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
        setSearchQuery("");
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
      {/* Search Icon */}
      {!showSearch && (
        <div
          className="flex items-center rounded-md px-2 py-1 cursor-pointer transition-all duration-300"
          onClick={() => setShowSearch(true)}
        >
          <IoSearchSharp className="text-xl text-gray-600 dark:text-gray-300" />
        </div>
      )}

      {/* Search Input & Dropdown */}
      {showSearch && (
        <div className="absolute -top-3 right-0 bg-white dark:bg-gray-800 rounded-md shadow-lg w-64 z-50">
          <div className="flex items-center border border-gray-300 rounded-md px-1 ">
            <IoSearchSharp className="text-gray-500 text-xl" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="ml-2 outline-none text-base bg-transparent w-full dark:text-white"
              autoFocus
            />
          </div>

          {filteredProducts.length > 0 && (
            <div className="mt-2 border rounded-md bg-white dark:bg-gray-900 shadow-md max-h-60 overflow-y-auto">
              {filteredProducts.map((p) => (
                <Link
                  key={p._id}
                  to={`/iteams/id/${p._id}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setShowSearch(false)}
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
