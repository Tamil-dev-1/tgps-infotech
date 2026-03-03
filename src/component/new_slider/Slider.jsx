import React, { useState } from "react";
import "./slider.css";

const techItems = [
  {
    id: 1,
    title: "BLOCKCHAIN",
    description:
      "Antier delivers breakthrough blockchain solutions to shape the next generation of enterprises move smarter and faster than ever.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
  },
  {
    id: 2,
    title: "METAVERSE & GAMING",
    description: "",
    image: "https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg",
  },
  {
    id: 3,
    title: "FINANCE SOLUTIONS",
    description: "",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
  },
  {
    id: 4,
    title: "ARTIFICIAL INTELLIGENCE",
    description: "",
    image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
  },
];

const Slider = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="container p-0 pt-5 mb-5">
      <h1 className="text-center">Heading</h1>
      <div className="tech-row-wrapper d-flex">
        {techItems.map((item) => (
          <div
            key={item.id}
            className={`tech-panel 
              ${hoveredId === item.id ? "tech-expanded" : ""} 
              ${hoveredId && hoveredId !== item.id ? "tech-collapsed" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="tech-content-box">
              <h4 className="tech-title">{item.title}</h4>
              {item.description && (
                <p className="tech-desc">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;