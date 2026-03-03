// src/pages/Home.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function Home() {
  const [query, setQuery] = useState("");
  const { addToCart } = useContext(CartContext);

  // Filter products based on search
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // ✅ Reusable actions for each product
  const renderActions = (item) => (
    <div className="flex gap-2 mt-4">
      <Link
        to={`/product/${item.id}`}
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
      >
        View Details
      </Link>
      <button
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
        onClick={() => {
          addToCart(item);
          toast.success(`${item.name} added to cart ✅`);
        }}
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <div className="bg-white text-gray-800">
      {/* Search Bar */}
      <div className="max-w-lg mx-auto mb-8 px-4 pt-6">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border p-3 rounded shadow-sm"
        />

        {/* Search Results */}
        {query.trim() !== "" && (
          <div className="mt-4 bg-gray-50 border rounded p-4 space-y-4">
            <h3 className="font-semibold text-lg">Search Results</h3>

            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3 border rounded hover:bg-gray-100 transition"
                >
                  {/* ✅ Use ProductCard */}
                  <ProductCard {...item} />

                  {/* ✅ Actions */}
                  {renderActions(item)}
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products found.</p>
            )}
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="bg-green-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-green-800">
          Welcome to Newstart 🌿
        </h1>
        <p className="mt-2 text-lg">Natural remedies for a healthier life</p>

        <Link to="/product/1">
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Offers Banner */}
      <section className="bg-yellow-100 py-4 text-center">
        <p className="text-md font-semibold text-yellow-800">
          🎁 Special Offer: Get 20% off on select herbal teas!
        </p>
      </section>

      {/* Featured Products */}
      <section className="py-10 px-4 md:px-12">
        <h2 className="text-2xl font-bold mb-6">Featured Remedies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer hover:shadow-lg transition rounded block p-4 border"
            >
              {/* ✅ Product Card */}
              <ProductCard {...item} />

              {/* ✅ Actions */}
              {renderActions(item)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}