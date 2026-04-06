import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./faq.css";

const Faq = () => {
  return (
    <section className="faq-section py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <span className="faq-badge">FAQ</span>
          <h2 className="faq-title mt-3">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            If you have any additional questions that are not covered below,
            please <span className="faq-link">contact us</span>.
          </p>
        </div>

        {/* Accordion */}
        <div className="accordion faq-accordion" id="faqAccordion">

          {[
            {
              q: "What services does TGPS Infotech provide?",
              a: "TGPS Infotech offers Web2 development, Web3 solutions, AI integrations, mobile and web app development, SaaS platforms, digital marketing, and branding services."
            },
            {
              q: "How can AI solutions improve my business?",
              a: "AI solutions automate workflows, enhance decision-making, personalize user experiences, and improve efficiency by analyzing data in real time."
            },
            {
              q: "Do I need Web3 or blockchain for my business?",
              a: "Not every business needs Web3. We evaluate your use case and recommend blockchain only if it adds value in terms of security, transparency, or decentralization."
            },
            {
              q: "What is the difference between Web2 and Web3 solutions?",
              a: "Web2 focuses on centralized platforms and user experience, while Web3 enables decentralized systems with greater transparency, ownership, and security."
            },
            {
              q: "Can you build both web and mobile applications?",
              a: "Yes, we develop scalable web and mobile applications with modern frameworks, ensuring performance, security, and seamless user experience."
            },
            {
              q: "How long does it take to develop a digital product?",
              a: "Timelines depend on features and complexity. Most projects start with an MVP within a few months, followed by continuous improvements and scaling."
            },


             {
              q: "Do you provide end-to-end product development?",
              a: "Yes, we handle the complete process from strategy and design to development, deployment, and ongoing support."
            },
             {
              q: "Can you upgrade or modernize my existing system?",
              a: "Yes, we enhance existing platforms by improving performance, integrating new technologies, and aligning them with current business needs."
            },
             {
              q: "How do you ensure security in applications?",
              a: "We implement secure architectures, encryption, compliance standards, and regular monitoring to protect data and ensure system reliability."
            },
             {
              q: "Do you offer digital marketing and growth services?",
              a: "Yes, we provide SEO, AEO, performance marketing, social media growth, and full-funnel strategies to drive traffic and conversions."
            },
          ].map((item, index) => (
            <div className="accordion-item faq-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button faq-btn ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                >
                  {item.q}
                </button>
              </h2>

              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body faq-body">
                  {item.a}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Faq;