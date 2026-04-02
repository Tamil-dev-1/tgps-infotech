import React from 'react'
import AppRouter from './Router/AppRouter'
import { useEffect } from "react";
import './theme.css'
import './App.css'
const App = () => {

  
  

useEffect(() => {
  let lastTime = 0;

  const handleMove = (e) => {
    const now = Date.now();

    // 🔥 throttle (important for smooth performance)
    if (now - lastTime < 20) return;
    lastTime = now;

    const spark = document.createElement("div");
    spark.className = "spark";

    // position
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";

    // random size (premium feel)
    const size = Math.random() * 6 + 6;
    spark.style.width = size + "px";
    spark.style.height = size + "px";

    // random slight offset (natural movement)
    spark.style.transform = `translate(${(Math.random()-0.5)*10}px, ${(Math.random()-0.5)*10}px)`;

    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 800);
  };

  window.addEventListener("mousemove", handleMove);

  return () => window.removeEventListener("mousemove", handleMove);
}, []);



  return (
    <div className='cursour'>
      <div style={{backgroundColor:"#0B0B0B"}}>
      <AppRouter />
      
    </div>
    </div>
  )
}

export default App
