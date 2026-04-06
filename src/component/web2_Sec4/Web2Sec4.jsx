import React from "react";
import "./Web2Sec4.css";

export default function Web2Sec4() {


    // SECTION ----- 2

    const services = [
  {
    title: "Brand Visual Design",
    desc: "We create consistent and impactful brand visuals that align with your identity and strengthen recognition across all platforms.",
  },
  {
    title: "Social Media Creatives",
    desc: "We design engaging and scroll-stopping creatives tailored for social platforms to boost visibility and audience interaction.",
  },
  {
    title: "Marketing Collateral Design",
    desc: "We develop high-quality brochures, flyers, and promotional materials that communicate your message effectively and professionally.",
  },
  {
    title: "Ad Creative Design",
    desc: "We design conversion-focused ad creatives optimized for performance across digital advertising platforms.",
  },
  {
    title: "UI Visual Design",
    desc: "We craft clean and modern interface visuals that enhance user experience and align with your digital product design..",
  },
  {
    title: "Creative Support & Scaling",
    desc: "We provide ongoing design support to ensure consistency, speed, and quality as your brand grows.",
  },
];


  return (
    <>
    <section className="branding-section3 d-flex align-items-center">
  <div className="container">

    {/* NEW TOP CENTER HEADING */}
    <div className="text-center mb-5">
      <h2 className="branding-top-heading">
       Graphic Design
      </h2>
    </div>

    {/* TOP CONTENT */}
    <div className="row">
      <div className="col-lg-8">
        <h1 className="branding-title">
       Designing your
     ideas Into 
          <span className="branding-highlight"> Visuals</span>
        </h1>

        <p className="branding-description mt-4">
         Bring your ideas to life with impactful visuals. We create compelling designs that communicate your message clearly, enhance brand identity, and capture audience attention.
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
      Creative Design Solutions We Deliver
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