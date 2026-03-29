import { useNavigate } from "react-router-dom";

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

export default function RestaurantList({ query = "" }) {
  const navigate = useNavigate();

  return (
    <div className="row g-3">
      {restaurants.map((item, index) => (
        <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
          
          <div
            className="card glass-card restaurant-card"
            style={{ cursor: "pointer", overflow: "hidden" }}
            onClick={() => navigate(`/restaurant/${index}`)}
          >
            <img 
            src={item.image} 
            alt={item.name} 
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              transition: "0.3s"
              }}
            />

            <div className="card-body">
              <h6>{item.name}</h6>
              <p>⭐ {item.rating}</p>
              <p>{item.time} delivery</p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}