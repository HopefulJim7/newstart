// src/components/PayPalButton.jsx
import React, { useEffect } from "react";

export default function PayPalButton({ total, onSuccess }) {
  useEffect(() => {
    // Ensure PayPal SDK is loaded
    if (window.paypal) {
      // Clean up any previous render to avoid duplicate buttons
      const container = document.getElementById("paypal-button-container");
      if (container) {
        container.innerHTML = "";
      }

      window.paypal.Buttons({
        style: {
          color: "blue",   // ✅ Native PayPal blue
          shape: "rect",
          label: "pay",
          layout: "vertical",
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total.toString(),
                  currency_code: "USD",
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          try {
            const order = await actions.order.capture();
            console.log("Payment successful:", order);
            alert("✅ Payment completed!");
            if (onSuccess) onSuccess(); // Clear cart after purchase
          } catch (err) {
            console.error("Error capturing order:", err);
            alert("⚠️ Something went wrong while processing your payment.");
          }
        },
        onError: (err) => {
          console.error("PayPal error:", err);
          alert("⚠️ PayPal payment failed. Please try again.");
        },
      }).render("#paypal-button-container");
    }
  }, [total, onSuccess]);

  return <div id="paypal-button-container"></div>;
}