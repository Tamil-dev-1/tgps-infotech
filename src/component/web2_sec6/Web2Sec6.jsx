import React from "react";
import "./Web2Sec6.css";

export default function Web2Sec6() {


    // SECTION ----- 2

    const services = [
  {
    title: "MVP Development",
    desc: "We build minimum viable products focused on core features to help you launch quickly and validate your business idea effectively.",
  },
  {
    title: "SaaS Platform Development",
    desc: "We create scalable SaaS applications with secure architecture designed to support growth, performance, and seamless user experience.",
  },
  {
    title: "Dashboard & Admin Panels",
    desc: "We develop intuitive dashboards and control panels that provide clear insights and efficient management of your platform",
  },
  {
    title: "Subscription & Billing Systems",
    desc: "We integrate secure subscription models and automated billing systems to support recurring revenue and user management.",
  },
  {
    title: "API & System Integrations",
    desc: "We connect your product with third-party tools and services to enhance functionality and streamline operations.",
  },
  {
    title: "Product Scaling & Optimization",
    desc: "We optimize and upgrade your product to handle growth, improve performance, and ensure long-term stability.",
  },
];


  return (
    <>
    <section className="branding-section3 d-flex align-items-center">
  <div className="container">

    {/* NEW TOP CENTER HEADING */}
    <div className="text-center mb-5">
      <h2 className="branding-top-heading">
       SaaS & Product Development
      </h2>
    </div>

    {/* TOP CONTENT */}
    <div className="row">
      <div className="col-lg-8">
        <h1 className="branding-title">
 Building your
ideas Into 
          <span className="branding-highlight"> Platforms </span>
        </h1>

        <p className="branding-description mt-4">
       Turn your ideas into scalable digital products. We develop powerful SaaS platforms and custom solutions designed to streamline operations, enhance user experience, and drive long-term business growth.
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
      Product Development Solutions We Deliver
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