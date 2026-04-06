import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hx-hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6 text-white hx-content">
            <h1 className="hx-title">
              Build the Future of Digital
            </h1>

            <p className="hx-subtitle">
              WEB2. WEB3. AI. UNIFIED.
            </p>

            <div className="hx-divider">
              <span></span>
              <span className="hx-green"></span>
            </div>

            <p className="hx-desc">
              We design and develop intelligent platforms that scale,
              adapt, and lead in a rapidly evolving world.
            </p>

            {/* STATS */}
            <div className="hx-stats d-flex justify-content-between align-items-center">
              <div>
                <h4>05+</h4>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <div>
                <h4>350+</h4>
                <p>PROJECTS</p>
              </div>
              <div>
                <h4>04</h4>
                <p>OFFICES</p>
              </div>
              <div>
                <h4>100+</h4>
                <p>HAPPY CLIENTS</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 d-none d-lg-block hx-visual">
            <div className="hx-diagonal"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;