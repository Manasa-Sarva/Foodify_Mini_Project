import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartBar() {
  const { cart, getTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) return null;

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