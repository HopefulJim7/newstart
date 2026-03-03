// src/pages/Product.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>

          <p className="text-gray-700">{product.description}</p>

          <p className="text-xl font-bold text-green-700">KSh {product.price}</p>

          {/* ✅ Add to Cart with Toast */}
          <button
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            onClick={() => {
              addToCart(product);
              toast.success(`${product.name} added to cart ✅`);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}