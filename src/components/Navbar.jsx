import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, login, logout } = useAuth();

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand fw-bold text-white text-decoration-none">
  Foodify
</Link>

      <div>
        {/* ✅ Show Cart ONLY if user logged in */}
        {user && (
          <Link to="/cart" className="btn btn-warning btn-sm me-3">
            Cart ({cart.length})
          </Link>
        )}

        {!user ? (
          <>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => login("User")}
            >
              Sign in
            </button>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => login("New User")}
            >
              Sign up
            </button>
          </>
        ) : (
          <button className="btn btn-danger btn-sm" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}