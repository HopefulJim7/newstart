// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PayPalButton from "../components/PayPalButton";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    total,
  } = useContext(CartContext);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty for now.</p>
      ) : (
        <>
          {/* Cart Items */}
          {cart.map((item) => {
            const discountedPrice = item.discount
              ? item.price - item.price * (item.discount / 100)
              : item.price;
            const itemTotal = discountedPrice * item.quantity;

            return (
              <div
                key={item.id}
                className="border p-4 rounded mb-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Price: KSh {item.price}</p>
                  {item.discount > 0 && (
                    <p className="text-red-600">
                      Discount: {item.discount}% → Final: KSh {discountedPrice}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex gap-2 mt-2">
                    <button
                      className="bg-gray-300 px-2 rounded"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="bg-gray-300 px-2 rounded"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <p className="mt-2 font-semibold text-green-700">
                    Item Total: KSh {itemTotal}
                  </p>
                </div>

                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}

          {/* Totals */}
          <div className="mt-6 border-t pt-4 space-y-2">
            <p className="font-bold text-green-700 text-lg">
              Cart Total: KSh {total}
            </p>
          </div>

          {/* Clear Cart Button */}
          <div className="mt-4">
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>

          {/* Payment Section */}
          <div className="mt-8 space-y-6">
            <h2 className="text-xl font-semibold">Proceed to Payment</h2>

            {/* ✅ PayPal Integration */}
            <div>
              <h3 className="font-semibold mb-2">Pay with PayPal</h3>
              <div className="border rounded p-4 bg-blue-50">
                <PayPalButton
                  total={total}
                  onSuccess={() => {
                    alert("✅ Payment successful! Your cart will be cleared.");
                    clearCart(); // Clear cart after purchase
                  }}
                />
              </div>
            </div>

            {/* ✅ M-Pesa Placeholder */}
            <div>
              <h3 className="font-semibold mb-2">Pay with M‑Pesa</h3>
              <button
                className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
                onClick={() => {
                  console.log("M‑Pesa SDK integration coming soon");
                  // Later: clearCart() after successful M-Pesa payment
                }}
              >
                Pay via M‑Pesa
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}