---

# Newstart 🪴

Newstart is a full-stack **natural remedies shop project** built with **React (Vite)** on the frontend and **Express + TypeScript** on the backend. It provides product display, checkout flow, and payment integration, designed as both a learning project and a real-world e-commerce solution.

---

## 🚀 Features
- **Frontend (Vite + React)**  
  - Responsive product catalog  
  - Shopping cart with context-based state management  
  - Checkout flow with payment integration (Stripe/PayPal ready)  
  - Modern UI with Tailwind CSS  

- **Backend (Express + TypeScript)**  
  - RESTful API for products, users, and orders  
  - Secure authentication with JWT  
  - Password hashing with bcrypt  
  - MongoDB integration via Mongoose  

---

## 📦 Tech Stack
- **Frontend:** Vite, React, Tailwind CSS  
- **Backend:** Express, TypeScript, Mongoose  
- **Database:** MongoDB  
- **Auth & Security:** JWT, bcrypt, CORS  
- **Deployment:** Render (frontend + backend), DNS setup for custom domain  

---

## ⚙️ Installation

Clone the repository:
```bash
git clone https://github.com/HopefulJim7/newstart.git
cd newstart
```

### Backend Setup
```bash
cd server
pnpm install
pnpm run build   # compile TypeScript
pnpm run start   # run compiled server
```

### Frontend Setup
```bash
cd client
pnpm install
pnpm run dev     # start Vite dev server
```

---

## 🔑 Environment Variables
Create a `.env` file in the **server** directory with:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
```

---

## 📤 Deployment (Render)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
2. On Render:
   - Create a **Web Service** for the backend.  
     - Build command: `pnpm run build`  
     - Start command: `pnpm run start`  
   - Create a **Static Site** for the frontend.  
     - Build command: `pnpm run build`  
     - Publish directory: `dist`  
3. Add environment variables in Render dashboard.  
4. Configure DNS for your custom domain (`newstart.com`).  

---

## 🧪 Testing
Run backend in dev mode:
```bash
pnpm run dev
```
Run frontend in dev mode:
```bash
pnpm run dev
```

---

## 📚 Roadmap
- [ ] Add product offers & discounts  
- [ ] Improve checkout UX with animations  
- [ ] Integrate mobile-friendly design (React Native)  
- [ ] Add admin dashboard for inventory management  

---

## 🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 📜 License
This project is licensed under the ISC License.

---
