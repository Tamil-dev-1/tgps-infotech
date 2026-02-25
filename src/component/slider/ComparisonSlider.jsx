
import "bootstrap/dist/css/bootstrap.min.css";
import './ComparisonSlider.css';
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";


export default function ComparisonSlider() {

   const {theme} = useContext(ThemeContext); 

  const topItems = [
    "Equal Access",
    "Privacy Oriented",
    "Integrated",
    "Decentralized",
    "Censorship Resistant",
  ];

  const bottomItems = [
    "Restricted Ownership",
    "Discriminatory",
    "No Privacy",
    "Fragmented",
    "Centralized",
  ];

  return (
    <div className="container py-5" 
     style={{
          background: theme === "dark" ? "#3D4CEB" : "#ffff",
          transition: "0.3s",
        }}>

      {/* TOP ROW (→ scroll) */}
      <div className="overflow-hidden mb-4">
        <div className="scroll-row scroll-left">
          {[...topItems, ...topItems].map((item, i) => (
            <div key={i} className="pill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                stroke="currentColor" strokeWidth="3" fill="none">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW (← scroll) */}
      <div className="overflow-hidden">
        <div className="scroll-row scroll-right">
          {[...bottomItems, ...bottomItems].map((item, i) => (
            <div key={i} className="pill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                stroke="currentColor" strokeWidth="3" fill="none">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
