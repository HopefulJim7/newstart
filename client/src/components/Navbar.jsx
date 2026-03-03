// src/components/Navbar.jsx
import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaShoppingCart, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useContext(CartContext); // ✅ use cartCount instead of cart.length
  const location = useLocation();

  // Helper: check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-green-700 text-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Newstart
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-semibold">
          <Link
            to="/"
            className={`flex items-center gap-2 transition ${
              isActive("/") ? "text-white" : "text-green-200 hover:text-white"
            }`}
          >
            <FaHome /> Home
          </Link>

          <Link
            to="/cart"
            className={`flex items-center gap-2 transition relative ${
              isActive("/cart") ? "text-white" : "text-green-200 hover:text-white"
            }`}
          >
            <FaShoppingCart /> Cart
            {/* ✅ Cart Badge shows total quantity */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/about"
            className={`flex items-center gap-2 transition ${
              isActive("/about") ? "text-white" : "text-green-200 hover:text-white"
            }`}
          >
            <FaInfoCircle /> About
          </Link>

          <Link
            to="/contact"
            className={`flex items-center gap-2 transition ${
              isActive("/contact") ? "text-white" : "text-green-200 hover:text-white"
            }`}
          >
            <FaPhoneAlt /> Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-green-800 px-6 py-4 space-y-4 text-lg font-semibold">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            <FaHome /> Home
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            <FaInfoCircle /> About
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            <FaPhoneAlt /> Contact
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 hover:text-gray-300 relative"
            onClick={() => setOpen(false)}
          >
            <FaShoppingCart /> Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}