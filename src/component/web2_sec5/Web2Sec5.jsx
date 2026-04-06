import React from "react";
import "./Web2Sec5.css";

export default function Web2Sec5() {


    // SECTION ----- 2

    const services = [
  {
    title: "Custom App Development",
    desc: "We build tailored mobile and web applications designed to match your business needs with scalable and efficient architecture.",
  },
  {
    title: "UI/UX App Design",
    desc: "We create intuitive and user-focused app interfaces that ensure seamless navigation and engaging user experiences.",
  },
  {
    title: "Cross-Platform Development",
    desc: "We develop applications that work smoothly across multiple devices and platforms, ensuring wider reach and consistent performance.",
  },
  {
    title: "Backend & API Development",
    desc: "We build secure and robust backend systems with seamless API integrations to support scalable and high-performing applications.",
  },
  {
    title: "Web Application Development",
    desc: "We create fast and responsive web applications optimized for performance, usability, and business functionality.",
  },
  {
    title: "App Maintenance & Support",
    desc: "We provide continuous updates and technical support to keep your applications secure, optimized, and up to date.",
  },
];


  return (
    <>
    <section className="branding-section3 d-flex align-items-center">
  <div className="container">

    {/* NEW TOP CENTER HEADING */}
    <div className="text-center mb-5">
      <h2 className="branding-top-heading">
       Mobile & Web App Development
      </h2>
    </div>

    {/* TOP CONTENT */}
    <div className="row">
      <div className="col-lg-8">
        <h1 className="branding-title">
       Building your
ideas Into 
          <span className="branding-highlight"> Applications</span>
        </h1>

        <p className="branding-description mt-4">
       Transform your ideas into powerful applications. We develop scalable and high-performance mobile and web apps designed to enhance user experience, streamline operations, and drive business growth.
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
      Application Development Solutions We Deliver
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