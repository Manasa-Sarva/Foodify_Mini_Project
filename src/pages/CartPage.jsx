import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, getTotal, increaseQty, decreaseQty, clearCart } = useCart();

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      {/* 🔙 Back Button */}
      <div className="mb-3">
        <button className="btn " onClick={() => navigate(-1)}>
          ← Back to Menu
        </button>
        <hr></hr>

        <h2 className="mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cart.map((item, i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center p-3 mb-3 glass-card"
              >
                {/* LEFT: Name + Price */}
                <div
                  style={{ flex: 2, cursor: "pointer" }}
                  onClick={() => navigate(`/restaurant/${item.restaurantId}`)}
                >
                  <h6 className="mb-1">{item.name}</h6>
                  <p className="mb-0 text-muted">₹{item.price}</p>
                </div>

                {/* CENTER: Quantity Controls */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ flex: 1, gap: "10px" }}
                >
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => decreaseQty(item.name)}
                  >
                    -
                  </button>

                  <span style={{ minWidth: "20px", textAlign: "center" }}>
                    {item.quantity}
                  </span>

                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => increaseQty(item.name)}
                  >
                    +
                  </button>
                </div>

                {/* RIGHT: Total Price */}
                <div
                  style={{
                    flex: 1,
                    textAlign: "right",
                    fontWeight: "600",
                  }}
                >
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}

            {/* TOTAL */}
            <div className="mt-4 text-end">
              <h4>Total: ₹{getTotal()}</h4>

              <button
                className="btn btn-success mt-2"
                onClick={() => {
                  clearCart(); // ✅ clears state + storage
                  navigate("/success");
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
