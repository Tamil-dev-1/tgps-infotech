import { useState } from "react";
import "./WebMarqueeText.css";

export default function TextMarquee() {
  const [speed, setSpeed] = useState(20); // default speed

  const marqueeData = [
    ["React", "Angular", "Vue", "Next.js", "Node.js"],
    ["AI/ML", "Deep Learning", "NLP", "Computer Vision"],
    ["Blockchain", "Web3", "Smart Contracts", "DeFi"],
    ["AWS", "Azure", "GCP", "DevOps", "Docker", "Kubernetes"]
  ];

  return (
    <section className="marquee-section">
      <div className="container marquee-container">

        {/* SPEED CONTROL */}
        <div className="text-center mb-4">
          <button onClick={() => setSpeed(30)} className="speed-btn">Slow</button>
          <button onClick={() => setSpeed(20)} className="speed-btn active">Normal</button>
          <button onClick={() => setSpeed(10)} className="speed-btn">Fast</button>
        </div>

        {marqueeData.map((texts, i) => (
          <div className="row align-items-center marquee-row" key={i}>

            {/* LEFT HEADING */}
            <div className="col-md-3 col-12 heading-col">
              <h2 className="marquee-heading">
                {["Frontend", "AI", "Blockchain", "Cloud"][i]}
              </h2>
            </div>

            {/* VERTICAL LINE */}
            <div className="col-md-1 d-none d-md-flex justify-content-center">
              <div className="vertical-line"></div>
            </div>

            {/* MARQUEE */}
            <div className="col-md-8 col-12">
              <div className="marquee">
                <div
                  className="marquee-track"
                  style={{ animationDuration: `${speed}s` }}
                >
                  {[...texts, ...texts].map((text, index) => (
                    <span key={index} className="marquee-text">
                      {text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}