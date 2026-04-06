import React from "react";
import "./Web2Sec7.css";

export default function Web2Sec7() {


    // SECTION ----- 2

    const services = [
  {
    title: "Website & App Security",
    desc: "We implement advanced security measures to protect your websites and applications from threats and vulnerabilities.",
  },
  {
    title: "Data Protection Solutions",
    desc: "We ensure secure handling and storage of data with structured protection systems aligned with modern standards.",
  },
  {
    title: "SSL & Encryption Setup",
    desc: "We configure secure encryption protocols to protect user data and ensure safe communication across platforms.",
  },
  {
    title: "Vulnerability Assessment",
    desc: "We identify and fix potential risks through detailed analysis to strengthen your system’s security framework.",
  },
  {
    title: "Compliance Implementation",
    desc: "We help align your systems with required compliance standards to ensure legal and operational reliability.",
  },
  {
    title: "Security Monitoring & Support",
    desc: "We provide continuous monitoring and support to detect threats early and maintain a secure digital environment.",
  },
];


  return (
    <>
    <section className="branding-section3 d-flex align-items-center">
  <div className="container">

    {/* NEW TOP CENTER HEADING */}
    <div className="text-center mb-5">
      <h2 className="branding-top-heading">
       Security & Compliance
      </h2>
    </div>

    {/* TOP CONTENT */}
    <div className="row">
      <div className="col-lg-8">
        <h1 className="branding-title">
 Protecting your
business And 
          <span className="branding-highlight"> Data </span>
        </h1>

        <p className="branding-description mt-4">
      Secure your digital presence with advanced protection systems. We implement robust security and compliance solutions designed to safeguard your data, build trust, and ensure reliable operations.
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
      Security Solutions We Deliver
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