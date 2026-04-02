import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollBox.css";
import Sales_Img from '../../assets/images/home/sales.jpg'
import Security_Img from '../../assets/images/home/security.jpg'
import Future_Img from '../../assets/images/home/future.jpg'
import End_Img from '../../assets/images/home/end.jpg'

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    title: "Built for Scale",
    desc: " We design systems that grow with your business —from startup to enterprise-level operations.Our solutions are engineered for performance, reliability, and long-term scalability.",
    img: Sales_Img,
  },
  {
    title: "Security-First Approach",
    desc: "Security is not an afterthought — it’s built into every layer. From infrastructure to application level, we ensure your systems remain protected, compliant, and resilient." ,
    img: Security_Img,
  },
  {
    title: "Future-Ready Technology",
    desc: "We don’t just follow trends — we implement what truly matters.From AI to cloud-native architecture and decentralized systems,we build technology that keeps you ahead.",
    img: Future_Img,
  },
  {
    title: "End-to-End Execution",
    desc: "From idea to deployment and beyond — we handle everything. Strategy, development, integration, and scaling — all under one roof.",
    img: End_Img,
  },
];

export default function ScrollBox() {
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);

  useLayoutEffect(() => {
    const panelsEl = panelRefs.current;

    const ctx = gsap.context(() => {
      // Initial state (hide all except first)
      panelsEl.forEach((panel, i) => {
        if (i === 0) return;
        gsap.set(panel, { y: "120%", opacity: 0 });
      });

      // Responsive scroll distance
      const scrollAmount = panelsEl.length * window.innerHeight * 0.9;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollAmount}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate cards one by one
      panelsEl.forEach((panel, i) => {
        if (i === 0) return;

        tl.to(panel, {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="sb-section">
      <h1 className="title">
        Why <span>Choose Us</span>
      </h1>

      <div className="sb-wrapper">
        <section className="sb-stack-section" ref={sectionRef}>
          {panels.map((panel, i) => (
            <div
              key={i}
              ref={(el) => (panelRefs.current[i] = el)}
              className="sb-card"
            >
              <div className="sb-card-image">
                <img src={panel.img} alt={panel.title} />
              </div>

              <div className="sb-card-content">
                <h2>{panel.title}</h2>
                <p>{panel.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}