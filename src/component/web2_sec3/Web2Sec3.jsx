import React from "react";
import "./Web3Sec3.css";

export default function Web2Sec3() {


    // SECTION ----- 2

    const services = [
  {
    title: "Answer Engine Optimization (AEO)",
    desc: "Optimize your content for search engines and AI platforms to deliver direct answers, improving visibility across voice search and next-gen search experiences.",
  },
  {
    title: "Performance Marketing",
    desc: "Run data-driven campaigns focused on conversions and ROI across platforms, ensuring your brand reaches the right audience at the right time.",
  },
  {
    title: "Search Engine Optimization",
    desc: "Enhance your website visibility and ranking with advanced SEO strategies designed to attract high-intent traffic and improve search performance..",
  },
  {
    title: "Local Search Optimization",
    desc: "Strengthen your presence in location-based searches to attract nearby customers and improve discoverability across maps and local listings.",
  },
  {
    title: "Full-Funnel Marketing Strategy",
    desc: "Implement a complete marketing approach that covers awareness, engagement, and conversion to maximize customer acquisition and retention.",
  },
  {
    title: "Social Media Growth Management",
    desc: "Build a strong digital presence with strategic content, audience engagement, and platform-specific growth techniques designed for modern brands.",
  },
];


  return (
    <>
    <section className="branding-section3 d-flex align-items-center">
  <div className="container">

    {/* NEW TOP CENTER HEADING */}
    <div className="text-center mb-5">
      <h2 className="branding-top-heading">
       Digital Marketing
      </h2>
    </div>

    {/* TOP CONTENT */}
    <div className="row">
      <div className="col-lg-8">
        <h1 className="branding-title">
         Transforming your
     brand Into 
          <span className="branding-highlight"> growth</span>
        </h1>

        <p className="branding-description mt-4">
         Strengthen your brand with data-driven digital marketing. We create performance-focused strategies that increase visibility, engage your audience, and drive consistent business growth.
        </p>

        {/* <button className="btn branding-button mt-4">
          Schedule a Call
        </button> */}
      </div>
    </div>

    {/* BOTTOM CONTENT */}
    {/* <div className="row branding-bottom mt-5 pt-5">

      <div className="col-lg-6 mb-4">
        <h2 className="branding-subtitle">
         Complete Branding Solutions to Grow <br /> Your Business
        </h2>
      </div>

      <div className="col-lg-6">
        <p className="branding-text">
         First impressions define perception. Your brand is your identity, your voice, your presence. It attracts the right audience, builds credibility, and positions you ahead of the competition. We provide the branding systems to establish authority and communicate your story with clarity.
        </p>
      </div>

    </div> */}
  </div>
</section>

    {/* SECTION --- 2 */}

   <section className="services-section">
  <div className="container">

    {/* TITLE */}
    <h2 className="services-title text-center">
      Digital Marketing Solutions We Deliver
    </h2>

    {/* CARDS */}
    <div className="row mt-5">
      {services.map((item, index) => (
        <div className="col-lg-4 col-md-6 mb-4" key={index}>
          <div className="service-card h-100">
            <h4 className="service-title">{item.title}</h4>
            <p className="service-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* DIVIDER */}
    <div className="services-divider"></div>

  </div>
</section>
    </>
  );
}