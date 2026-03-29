import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const restaurants = [
  {
    name: "Hyderabadi Biryani",
    image: "https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg",
    rating: 4.4,
    time: "30 mins"
  },
  {
    name: "Cheese Burst Pizza",
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
    rating: 4.5,
    time: "25 mins"
  },
  {
    name: "Classic Burger",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    rating: 4.2,
    time: "20 mins"
  },
  {
    name: "Chocolate Dessert",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    rating: 4.6,
    time: "35 mins"
  },
  {
    name: "Chinese Noodles",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
    rating: 4.3,
    time: "28 mins"
  },
  {
    name: "South Indian Meals",
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
    rating: 4.5,
    time: "30 mins"
  },
  {
    name: "Shawarma Roll",
    image: "https://tse2.mm.bing.net/th/id/OIP.d0-y_axsARPhVwE6g5PoCQHaEJ?w=626&h=351&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.2,
    time: "22 mins"
  },
  {
    name: "Ice Cream Bowl",
    image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
    rating: 4.6,
    time: "18 mins"
  },

  {
  name: "Paneer Butter Masala",
  image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
  rating: 4.5,
  time: "32 mins"
},
{
  name: "Masala Dosa",
  image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
  rating: 4.4,
  time: "25 mins"
},
{
  name: "Chicken Tandoori",
  image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg",
  rating: 4.6,
  time: "30 mins"
},
{
  name: "Veg Fried Rice",
  image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
  rating: 4.3,
  time: "22 mins"
},
{
  name: "Chocolate Cake",
  image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  rating: 4.7,
  time: "20 mins"
}, 
{
  name: "Butter Chicken",
  image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg",
  rating: 4.6,
  time: "35 mins"
},
{
  name: "Veg Manchurian",
  image: "https://img.freepik.com/premium-photo/top-view-vegetable-manchurian-with-gravy_641503-88234.jpg?w=1060",
  rating: 4.4,
  time: "25 mins"
},
{
  name: "Margherita Pizza",
  image: "https://lizarecipes.com/wp-content/uploads/2025/01/Image_1-47.png",
  rating: 4.5,
  time: "20 mins"
},
{
  name: "Pani Puri",
  image: "https://tse3.mm.bing.net/th/id/OIP.MQLlJZdycZrCcQTM0OOIVAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  rating: 4.3,
  time: "15 mins"
},
{
  name: "Grilled Sandwich",
  image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg",
  rating: 4.2,
  time: "18 mins"
}
];

const menuItems = [
  { name: "Chicken Biryani", price: 250 },
  { name: "Veg Biryani", price: 180 },
  { name: "Paneer Butter Masala", price: 220 },
  { name: "Butter Naan", price: 40 },
  { name: "Garlic Naan", price: 50 },
  { name: "Chicken Curry", price: 260 },
  { name: "Fried Rice", price: 200 },
  { name: "Noodles", price: 190 },
  { name: "Ice Cream", price: 120 },
  { name: "Soft Drinks", price: 50 }
];

export default function RestaurantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const restaurant = restaurants[id];

  if (!restaurant) {
    return <h2 className="text-center mt-5">Restaurant Not Found</h2>;
  }

  return (
    <div>

      {/* 🔙 Back Button */}
      <div className="container mt-3">
        <button className="btn btn-dark" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      {/* 🔥 Hero Section */}
      <div className="position-relative mt-3">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            filter: "brightness(70%)"
          }}
        />

        {/* Overlay */}
        <div
          className="position-absolute text-white"
          style={{ bottom: "20px", left: "40px" }}
        >
          <h1 className="fw-bold">{restaurant.name}</h1>
          <p>⭐ {restaurant.rating} • {restaurant.time} delivery</p>
        </div>
      </div>

      {/* 🧾 Info Section */}
      <div className="container mt-4">
        <div
          className="p-4"
          style={{
            borderRadius: "20px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
          }}
        >
          <h4>About</h4>
          <p>
            Enjoy delicious food made with fresh ingredients. Fast delivery and amazing taste guaranteed!
          </p>
        </div>
      </div>

      {/* 🍽️ Menu List */}
      <div className="container mt-5">
        <h4 className="mb-4 fw-semibold">Menu</h4>

        <div className="list-group">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{
                borderRadius: "12px",
                marginBottom: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                transition: "0.2s"
              }}
            >
              {/* Left */}
              <div>
                <h6 className="mb-1">{item.name}</h6>
                <p className="mb-0 text-muted">₹{item.price}</p>
              </div>

              {/* Right */}
              <button 
              className="btn btn-warning" 
              onClick={() => 
              addToCart
              ({ 
                name: item.name, 
                price: item.price,
                restaurantId: id 
                })
                }
                >
                  Add
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}