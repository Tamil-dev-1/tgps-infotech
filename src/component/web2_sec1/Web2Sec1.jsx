import React from "react";
import "./Web2Sec1.css";

export default function Web2Sec1() {


    // SECTION ----- 2

    const services = [
  {
    title: "WordPress Solutions",
    desc: "Custom WordPress development for easy control and high-speed performance built to match your evolving business goals.",
  },
  {
    title: "E-commerce Solutions",
    desc: "Launch powerful online stores with secure, scalable, and conversion-focused e-commerce platforms.",
  },
  {
    title: "Corporate Website Solutions",
    desc: "Strategic websites created to boost brand trust and engage your audience with clarity and impact.",
  },
  {
    title: "Content Management Systems",
    desc: "User-friendly CMS platforms that enable you to control and update your website with ease.",
  },
  {
    title: "UI/UX Experience Enhancement",
    desc: "Smart design improvements focused on delivering seamless and engaging user journeys.",
  },
  {
    title: "Website Maintenance & Support",
    desc: "Consistent support and timely updates to keep your website secure, optimized, and running smoothly.",
  },
];


  return (
    <>
    <section className="branding-section d-flex align-items-center">
  <div className="container">

    {/* NEW TOP CENTER HEADING */}
    <div className="text-center mb-5">
      <h2 className="branding-top-heading">
       Webdesign
      </h2>
    </div>

    {/* TOP CONTENT */}
    <div className="row">
      <div className="col-lg-8">
        <h1 className="branding-title">
          We Build <br />
          Next-Gen Websites <br />
          For your{" "}
          <span className="branding-highlight">Brand</span>
        </h1>

        <p className="branding-description mt-4">
         We craft visually engaging, conversion-driven websites aligned to your business built to attract users, improve engagement, and accelerate digital growth.
        </p>

        {/* <button className="btn branding-button mt-4">
          Schedule a Call
        </button> */}
      </div>
    </div>

    {/* BOTTOM CONTENT */}
    <div className="row branding-bottom mt-5 pt-5">

      <div className="col-lg-6 mb-4">
        <h2 className="branding-subtitle">
          End-to-End Branding Solutions <br />
          to Elevate Your Business
        </h2>
      </div>

      <div className="col-lg-6">
        <p className="branding-text">
          First impressions matter. Your brand is your handshake, your voice,
          your story. It attracts the right audience, inspires trust, and
          sets you apart from the faceless masses. We equip you with the
          branding power tools to own your space and tell your story with
          impact.
        </p>
      </div>

    </div>
  </div>
</section>

    {/* SECTION --- 2 */}

   <section className="services-section">
  <div className="container">

    {/* TITLE */}
    <h2 className="services-title text-center">
      Modern Web Design Solutions We Deliver
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