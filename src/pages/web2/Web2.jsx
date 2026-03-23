import React from "react";
import LogoMarquee from "../../component/logomarquee/LogoMarquee";
import Web2Stats from '../../component/web2_stats/Web2Stats';
import WebMarqueeText from '../../component/text_marquee/webMarqueeText'
import "./Web2.css"; 
// import CountUp from "react-countup";

const Web2 = () => {


//    SECTION ----- 2
  const stats = [
    { value: 10.07, suffix: "%", label: "Revenue Growth Rate" },
    { value: 5045, suffix: "", label: "Premium Customers" },
    { value: 12.56, suffix: "%", label: "Developer Growth Rate" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      <section className="web2-banner d-flex align-items-center justify-content-center text-center">
        <div className="web2-content container">
          <h1 className="web2-heading">
            Empowering Modern <span style={{color:"#C6FF00"}}>Web2 Solutions</span>
          </h1>

          <p className="web2-text">
            We build scalable, high-performance web applications tailored
            for your business growth.
          </p>

          <p className="web2-text">
            Delivering seamless user experiences with cutting-edge
            technologies and innovation.
          </p>
        </div>
      </section>

      {/* SECTION ------ 2 */}

      <LogoMarquee />

      {/* SECTION ---- 3 */}

     <Web2Stats />

     {/* TEXT MARQUEE SECTION -------- 4 */}
     <WebMarqueeText />


     {/* CTA SECTION  */}

     <section className="web2-cta-section">
  <div className="web2-cta-overlay"></div>

  <div className="container">
    <div className="web2-cta-content text-center">

      <h2 className="web2-cta-title">
        Transform Your Digital Presence <br />
        <span>with Next-Gen Web Solutions</span>
      </h2>

      <p className="web2-cta-text">
        Build scalable, secure, and high-performance applications
        tailored for modern businesses.
      </p>

      <button className="web2-cta-btn">
        Get Started Now →
      </button>

    </div>
  </div>
</section>
    </div>
  );
};

export default Web2;