import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCarousel from "./components/CategoryCarousel";
import RestaurantList from "./components/RestaurantList";
import Footer from "./components/Footer";
import RestaurantDetails from "./pages/RestaurantDetails";
import CartPage from "./pages/CartPage";
import Success from "./pages/Success";

import { CartProvider, useCart } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

import { useNavigate } from "react-router-dom";


// 🔥 Sticky Cart Bar (INLINE COMPONENT)
function CartBar() {
  const { cart, getTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  // ❌ Hide if not logged in or empty cart
  if (!user || cart.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        background: "#000",
        color: "#fff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <div>
        {cart.length} items | ₹{getTotal()}
      </div>

      <button
        className="btn btn-warning"
        onClick={() => navigate("/cart")}
      >
        View Cart
      </button>
    </div>
  );
}


// 🔥 MAIN APP
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>

          <Routes>

            {/* 🏠 HOME */}
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <Hero />

                  <div className="container-lg">
                    <CategoryCarousel />
                    <RestaurantList />
                  </div>

                  <CartBar /> {/* ✅ Sticky cart bar */}
                  <Footer />
                </div>
              }
            />

            {/* 🍽️ RESTAURANT */}
            <Route
              path="/restaurant/:id"
              element={
                <div>
                  <Navbar />
                  <RestaurantDetails />
                  <CartBar /> {/* optional here */}
                </div>
              }
            />

            {/* 🛒 CART */}
            <Route
              path="/cart"
              element={
                <div>
                  <Navbar />
                  <CartPage />
                </div>
              }
            />
          
          {/* 🛒 CART */}
            <Route
            path="/success"
            element={ 
            <div>
              <Navbar />
              <Success />
              </div>
              }
            />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;