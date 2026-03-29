import { useEffect, useRef } from "react";

const categories = [
  { name: "Biryani", img: "https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg" },
  { name: "Pizza", img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" },
  { name: "Burger", img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" },
  { name: "Dessert", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" },
  { name: "Chinese", img: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg" },
  { name: "South Indian", img: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg" },
  { name: "North Indian", img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
  { name: "Noodles", img: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg" },
  { name: "Shawarma", img: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg" },
  { name: "Ice Cream", img: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg" },
  { name: "Cakes", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" },
];

export default function CategoryCarousel() {
  const scrollRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!isPaused.current) {
        container.scrollLeft += 2.0;

        // Reset smoothly when half reached
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className=" mt-4">
      <h5 className="mb-3 fw-semibold">What's on your mind?</h5>

      <div
        className="scroll-row" ref={scrollRef}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        {[...categories, ...categories].map((item, i) => (
          <div className="category-item text-center p-2" key={i}>
            <img src={item.img} 
            alt={item.name}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}