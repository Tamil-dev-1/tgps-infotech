import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Hero.css";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: "https://cdn.prod.website-files.com/68be881d1e561d10d9755876/68e4963beaf3aad7f57ed76c_Slide%20v1.4%20-%20Scale%20v2.2.json",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    return () => anim.destroy();
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Renewable Energy with BlockChain Technology</h1>
        <p>Driving sustainability and accelerating global decarbonization.</p>
      </div>

      <div className="hero-lottie" ref={containerRef}></div>
    </section>
  );
}
