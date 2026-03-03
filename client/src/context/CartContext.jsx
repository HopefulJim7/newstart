// src/context/CartContext.jsx
import React, { createContext, useState, useMemo, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // ✅ Load cart from localStorage on first render
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getDiscountedPrice = (item) =>
    item.discount ? item.price - item.price * (item.discount / 100) : item.price;

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));

  const increaseQuantity = (id) =>
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );

  const decreaseQuantity = (id) =>
    setCart((prevCart) =>
      prevCart
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );

  const clearCart = () => setCart([]);

  const total = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + getDiscountedPrice(item) * item.quantity,
        0
      ),
    [cart]
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const getItemTotal = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? getDiscountedPrice(item) * item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        total,
        cartCount,
        getItemTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}