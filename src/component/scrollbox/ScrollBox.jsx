import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollBox.css";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    title: "IT Consultancy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "",
  },
  {
    title: "Cloud Computing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "",
  },
  {
    title: "Cyber Security",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "",
  },
  {
    title: "Backup & Recovery",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "",
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