import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Success() {
  const navigate = useNavigate();

  // Auto redirect after 3 sec (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      {/* 🎉 Animated Tick */}
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>

      <h2 className="mt-4">Order Placed Successfully 🎉</h2>
      <p>Your food is on the way!</p>

      <button
        className="btn btn-dark mt-3"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
}