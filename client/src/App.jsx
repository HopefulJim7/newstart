// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";   // ✅ Product detail page
import Footer from "./components/Footer";

// ✅ Import CartProvider
import { CartProvider } from "./context/CartContext";

// ✅ Import Toast Provider
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* Navbar always visible */}
          <Navbar />

          {/* Main content */}
          <main className="flex-1 py-6">
            <div className="container mx-auto px-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<Product />} />
              </Routes>
            </div>
          </main>

          {/* Footer always visible */}
          <Footer />

          {/* ✅ Toast notifications */}
          <Toaster position="bottom-center" />
        </div>
      </Router>
    </CartProvider>
  );
}