import React from "react";
import "./FeaturesSection.css";
import ServicesImg from "../../assets/images/Core_Features/services.png";

const FeatureCard = ({ icon, title, desc, shape }) => {
  return (
    <div className={`feature-card ${shape}`}>
      <div className="icon-box">
        <i className={`bi ${icon}`}></i>
      </div>

      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="service-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="badge feature-badge px-3 py-2 mb-3">
            Core Features
          </span>

          <h1 className="feature-title">
            Innovative IT Strategies <br /> and Solutions
          </h1>
        </div>

        <div className="row align-items-center">

          {/* Left */}
          <div className="col-lg-3 d-flex flex-column gap-4">

            <FeatureCard
              icon="bi-cloud"
              title="Cloud-First Architecture"
              desc="Scalable and resilient cloud environments."
              shape="shape-1"
            />

            <FeatureCard
              icon="bi-bar-chart"
              title="AI Automation"
              desc="Smart systems that automate workflows."
              shape="shape-2"
            />

            <FeatureCard
              icon="bi-link-45deg"
              title="Blockchain"
              desc="Secure decentralized infrastructure."
              shape="shape-3"
            />

          </div>

          {/* Center Image */}
          <div className="col-lg-6 text-center my-4 my-lg-0">
            <div className="center-image-wrapper mx-auto">
              <img src={ServicesImg} alt="services"/>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-3 d-flex flex-column gap-4">

            <FeatureCard
              icon="bi-lightbulb"
              title="Data Intelligence"
              desc="Turn data into actionable insights."
              shape="shape-4"
            />

            <FeatureCard
              icon="bi-shield-lock"
              title="Cyber Security"
              desc="Security embedded into architecture."
              shape="shape-5"
            />

            <FeatureCard
              icon="bi-cpu"
              title="DevOps"
              desc="CI/CD pipelines for innovation."
              shape="shape-6"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;