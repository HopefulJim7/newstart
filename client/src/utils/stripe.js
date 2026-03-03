import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export async function handleCheckout(cartItems) {
  const stripe = await stripePromise;

  const response = await fetch("http://localhost:8000/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: cartItems }),
  });

  const session = await response.json();
  await stripe.redirectToCheckout({ sessionId: session.id });
}