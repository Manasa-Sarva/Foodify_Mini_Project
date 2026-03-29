export default function Hero() {
  return (
    <div className="hero">
      <div className="overlay">

        {/* Floating Food Images */}
        <img
          src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
          className="food-img img1"
        />
        <img
          src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
          className="food-img img2"
        />
        <img
          src="https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg"
          className="food-img img3"
        />
        <img
          src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
          className="food-img img4"
        />

        <div className="container text-center hero-content">
          <h1>Satisfy Your Cravings 🍕</h1>
          <p>Discover the best food from top restaurants near you</p>
        </div>

      </div>
    </div>
  );
}