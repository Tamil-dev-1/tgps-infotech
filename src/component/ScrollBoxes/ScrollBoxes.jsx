import React, { useLayoutEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeContext } from "../../ThemeContext";
import "./ScrollBoxes.css";

import Prouduct1 from "../../assets/images/ourproduct/product1.jpg";
import Prouduct2 from "../../assets/images/ourproduct/product2.jpg";
import Prouduct3 from "../../assets/images/ourproduct/product3.jpg";
import Prouduct4 from "../../assets/images/ourproduct/product4.jpg";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  { title: "Product1", desc: "Lorem ipsum...", img: Prouduct1 },
  { title: "Product2", desc: "Lorem ipsum...", img: Prouduct2 },
  { title: "Product3", desc: "Lorem ipsum...", img: Prouduct3 },
  { title: "Product4", desc: "Lorem ipsum...", img: Prouduct4 },
];

const StickyStackPanels = () => {
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);
  const { theme } = useContext(ThemeContext);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panelsEl = panelRefs.current;

      panelsEl.forEach((panel, i) => {
        gsap.set(panel, {
          y: i === 0 ? 0 : "120%",
          zIndex: i + 1,
        });
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${panelsEl.length * 100}%`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          pinSpacing: true,
        },
      }).to(
        panelsEl.slice(1),
        { y: "0%", ease: "none", stagger: 1 },
        0
      );
    }, sectionRef);

    return () => {
      // 🔥 HARD CLEANUP (THIS FIXES STICKY)
      ScrollTrigger.getAll().forEach(st => st.kill());
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section className="mt-5">
      <h1 className="fw-bold hero-title text-center mb-4">
        Our Products
      </h1>

      <div className="stack-wrapper">
        <section className="stack-section" ref={sectionRef}>
          {panels.map((panel, i) => (
            <div
              key={i}
              ref={(el) => (panelRefs.current[i] = el)}
              className="stack-card"
              style={{
                background: theme === "dark" ? "#0E21A0" : "#fff",
                color: theme === "dark" ? "#fff" : "#000",
              }}
            >
              <div className="card-image">
                <img src={panel.img} alt={panel.title} />
              </div>
              <div className="card-content">
                <h2>{panel.title}</h2>
                <p>{panel.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default StickyStackPanels;
