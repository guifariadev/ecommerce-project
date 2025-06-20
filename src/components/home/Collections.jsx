import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const bannerItems = [
  { id: 1, image: "images/collection-banners/women-banner.jpg", alt: "Women collection", text: "Women's", path: "/women" },
  { id: 2, image: "images/collection-banners/men-banner.jpg", alt: "Men collection", text: "Men's", path: "/men" },
  { id: 3, image: "images/collection-banners/children-banner.jpg", alt: "Children collection", text: "Children", path: "/children" },
  // { id: 4, image: "images/collection-banners/accessories-banner.jpg", alt: "Accessories collection", text: "Accessories", path: "/accessories" },
];

const Collections = () => {
  return (
    <section id="collections" className="mt-20 mb-10 w-full flex flex-col space-y-10 justify-center items-center max-w-[1700px] mx-auto">
      <h1 className="text-center text-3xl md:text-5xl text-black">Explore the collections</h1>
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-8 p-4 max-w-[1000px] mx-auto justify-items-center">

        {bannerItems.map((item) => (
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // router-dom configs
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(item.path);
  };
  // handle mouse position
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative max-w-[350px]  max-h-[400px] lg:max-h-[500px] bg-white flex flex-col items-center text-black text-xl font-bold shadow-lg rounded-md overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 will-change-transform cursor-pointer"
      />
      <p className="absolute bg-black/70 px-3 py-1 bottom-3 rounded-sm text-white text-xl flex font-medium">
        {item.text}
      </p>
      {hovered && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute bg-white text-black px-4 py-2 rounded-md text-base whitespace-nowrap"
          style={{ top: position.y, left: position.x, transform: "translate(-50%, -50%)" }}
        >
          View Collection
        </motion.button>
      )}
    </div>
  );
};

export default Collections;