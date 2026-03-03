// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({
  id,
  name,
  price,
  discount,
  image,
  rating,
  stock,
  actions, // ✅ optional actions (buttons/links) passed from parent
}) {
  const finalPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="relative border rounded shadow-sm p-4 flex flex-col items-center text-center">
      {/* Discount Badge */}
      {discount > 0 && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          {discount}% OFF
        </span>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded mb-4"
      />

      {/* Product Name */}
      <h3 className="font-semibold text-lg mb-2">{name}</h3>

      {/* Price */}
      <div className="mb-2">
        {discount > 0 ? (
          <>
            <p className="text-green-700 font-bold">KSh {finalPrice}</p>
            <p className="text-gray-500 line-through text-sm">KSh {price}</p>
          </>
        ) : (
          <p className="text-green-700 font-bold">KSh {price}</p>
        )}
      </div>

      {/* Rating */}
      <div className="text-yellow-500 mb-2">
        {"⭐".repeat(Math.round(rating))}
        {"☆".repeat(5 - Math.round(rating))}
      </div>

      {/* Stock */}
      <p className="text-sm text-gray-600 mb-4">
        {stock > 0 ? `${stock} in stock` : "Out of stock"}
      </p>

      {/* ✅ Actions injected from parent */}
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  );
}