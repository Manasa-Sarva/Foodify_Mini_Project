<<<<<<< HEAD
# 🍔 Foodify - Modern Food Ordering Web App

A fully responsive **Food Ordering Web Application** built using **React, Bootstrap, and Context API**, inspired by real-world apps like Swiggy and Zomato.

---

## 🚀 Live Features

### 🔐 Authentication

* Simple **Sign In / Sign Up (localStorage-based)**
* User must log in to access cart functionality

### 🍽️ Restaurant Browsing

* Explore multiple food categories
* View restaurant listings with ratings & delivery time
* Navigate to detailed restaurant menu pages

### 🛒 Cart Functionality

* Add items to cart
* Increase / decrease item quantity
* Remove items automatically when quantity reaches 0
* Cart persists using **localStorage**
* Cart visible **only after login**

### 📱 Sticky Cart Bar

* Swiggy-style sticky bottom cart
* Displays total items and price
* Quick navigation to cart page

### 💳 Checkout Flow

* View total price before checkout
* Checkout clears cart state
* Redirects to **Order Success Page**

### 🎉 Order Success Animation

* Animated success tick
* Auto redirect to home page

---

## 🧠 Tech Stack

* ⚛️ React (Functional Components + Hooks)
* 🔀 React Router DOM (Routing)
* 🧩 Context API (Global State Management)
* 💾 LocalStorage (Persistence)
* 🎨 Bootstrap + Custom CSS (Glass UI + Animations)

---

## 📂 Folder Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Hero.jsx
 │    ├── CategoryCarousel.jsx
 │    ├── RestaurantList.jsx
 │
 ├── pages/
 │    ├── RestaurantDetails.jsx
 │    ├── CartPage.jsx
 │    ├── Success.jsx
 │
 ├── context/
 │    ├── AuthContext.jsx
 │    ├── CartContext.jsx
 │
 ├── App.jsx
 ├── index.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/Manasa-Sarva/Foodify_Mini_Project.git
```

2. Navigate to project folder

```bash
cd Foodify_Mini_Project
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm run dev
```

---

## 💡 Key Concepts Implemented

* Context API for scalable state management
* Protected actions (cart only after login)
* Dynamic routing using URL params
* UI/UX inspired by real-world apps
* Persistent state using localStorage
* Clean and reusable component architecture

---

## 🔥 Future Enhancements

* 💳 Payment Integration (Razorpay / Stripe)
* 📦 Order History Page
* 🔔 Toast Notifications
* 🌙 Dark Mode
* 🔍 Search & Filter functionality
* 🧾 Multi-restaurant cart restriction

---

## 👨‍💻 Author

**Manasa Sarva**

Frontend Developer 

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share your feedback!

---
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 1b109be (Initial clean commit)
