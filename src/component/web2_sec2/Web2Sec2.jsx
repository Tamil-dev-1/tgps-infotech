import React from "react";
import "./Web2Sec2.css";

export default function Web2Sec2() {


    // SECTION ----- 2

    const services = [
  {
    title: "Strategy & Consulting",
    desc: "We create result-driven branding strategies that are structured to align with your business objectives while connecting effectively with your target audience, ensuring your brand gains visibility in a competitive space.",
  },
  {
    title: "Logo & Visual Identities",
    desc: "We design impactful logos and unified visual identities that represent your brand’s core, ensuring every element works together to build a strong and recognizable presence.",
  },
  {
    title: "Packaging Design",
    desc: "Our packaging solutions focus on both function and impact; we design packaging that protects your product while strengthening your brand presence and attracting customer attention.",
  },
  {
    title: "Brand Guidelines Creation",
    desc: "We define structured guidelines to maintain brand consistency across all platforms, ensuring a clear identity that builds recognition and trust with your audience.",
  },
  {
    title: "Print Collateral Design",
    desc: "We develop premium print materials, from brochures to business cards, that align with your brand identity and communicate your message effectively.",
  },
  {
    title: "Rebranding Solutions",
    desc: "We help transform your brand with updated designs and strategic direction that align with your evolving business goals while maintaining strong audience connection.",
  },
];


  return (
    <>
    <section className="branding-section d-flex align-items-center">
  <div className="container">

    {/* NEW TOP CENTER HEADING */}
    <div className="text-center mb-5">
      <h2 className="branding-top-heading">
       Branding
      </h2>
    </div>

    {/* TOP CONTENT */}
    <div className="row">
      <div className="col-lg-8">
        <h1 className="branding-title">
          Shaping your
         business Into a <br />
          <span className="branding-highlight">Brand</span>
        </h1>

        <p className="branding-description mt-4">
         Elevate your business into a powerful brand. We build distinctive brand identities that express your vision and values, helping you stand out in today’s competitive market.
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
         Complete Branding Solutions to Grow <br /> Your Business
        </h2>
      </div>

      <div className="col-lg-6">
        <p className="branding-text">
         First impressions define perception. Your brand is your identity, your voice, your presence. It attracts the right audience, builds credibility, and positions you ahead of the competition. We provide the branding systems to establish authority and communicate your story with clarity.
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
      Branding Services We Deliver
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