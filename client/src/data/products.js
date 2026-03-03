// src/data/products.js

export const products = [
  {
    id: 1,
    name: "Chamomile Tea",
    price: 500,
    discount: 20, // %
    image: "/images/chamomile.jpg",
    category: "Herbal Tea",
    rating: 4.7,
    stock: 34,
    description:
      "A calming herbal tea known for reducing stress, improving sleep, and soothing digestion.",
    get finalPrice() {
      return Math.round(this.price - (this.price * this.discount) / 100);
    },
  },

  {
    id: 2,
    name: "Lavender Oil",
    price: 1200,
    discount: 0,
    image: "/images/lavender.jpg",
    category: "Essential Oils",
    rating: 4.9,
    stock: 18,
    description:
      "Pure lavender essential oil ideal for relaxation, aromatherapy, and natural skin care.",
    get finalPrice() {
      return Math.round(this.price - (this.price * this.discount) / 100);
    },
  },

  {
    id: 3,
    name: "Peppermint Capsules",
    price: 850,
    discount: 10,
    image: "/images/peppermint.jpg",
    category: "Supplements",
    rating: 4.6,
    stock: 42,
    description:
      "Peppermint extract capsules that support digestion, reduce bloating, and refresh the body.",
    get finalPrice() {
      return Math.round(this.price - (this.price * this.discount) / 100);
    },
  },

  {
    id: 4,
    name: "Ginger Powder",
    price: 650,
    discount: 5,
    image: "/images/ginger.jpg",
    category: "Herbal Powder",
    rating: 4.8,
    stock: 50,
    description:
      "Finely ground ginger powder known for boosting immunity, aiding digestion, and reducing inflammation.",
    get finalPrice() {
      return Math.round(this.price - (this.price * this.discount) / 100);
    },
  },

  {
    id: 5,
    name: "Turmeric Capsules",
    price: 1400,
    discount: 15,
    image: "/images/turmeric.jpg",
    category: "Supplements",
    rating: 4.9,
    stock: 27,
    description:
      "High‑potency turmeric capsules with curcumin to support joint health and reduce inflammation.",
    get finalPrice() {
      return Math.round(this.price - (this.price * this.discount) / 100);
    },
  },

  {
    id: 6,
    name: "Eucalyptus Oil",
    price: 950,
    discount: 0,
    image: "/images/eucalyptus.jpg",
    category: "Essential Oils",
    rating: 4.5,
    stock: 22,
    description:
      "Refreshing eucalyptus essential oil perfect for steam inhalation, congestion relief, and aromatherapy.",
    get finalPrice() {
      return Math.round(this.price - (this.price * this.discount) / 100);
    },
  },
];