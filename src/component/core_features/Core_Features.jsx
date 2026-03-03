import React from "react";
import "./FeaturesSection.css";
import ServicesImg from '../../assets/images/Core_Features/services.png'

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="feature-card p-4 shadow-sm rounded-4 mb-4">
      <div className="icon-box mb-3">
        <i className={`bi ${icon}`}></i>
      </div>
      <h5 className="fw-bold mb-2">{title}</h5>
      <p className="text-muted small mb-0">{desc}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features-section py-5">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge feature-badge px-3 py-2 mb-3">
            Core Features
          </span>
          <h1 className="feature-title">
            Innovative IT Strategies <br /> and Solutions
          </h1>
        </div>

        {/* Content */}
        <div className="row align-items-center">

          {/* Left Features */}
          <div className="col-lg-3">
            <FeatureCard
              icon="bi-cloud"
              title="Cloud Solutions Management"
              desc="IT Infrastructure Including Network Installation"
            />

            <FeatureCard
              icon="bi-bar-chart"
              title="Analytics Business Intelligence"
              desc="Comprehensive Analytics Services Providing"
            />
          </div>

          {/* Center Image */}
          <div className="col-lg-6 text-center my-4 my-lg-0">
            <div className="center-image-wrapper mx-auto">
              <img
                src={ServicesImg}
                alt="center"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="col-lg-3">
            <FeatureCard
              icon="bi-lightbulb"
              title="Custom Software Development"
              desc="Our Services Build Reliable, Scalable, And Innovative"
            />

            <FeatureCard
              icon="bi-cpu"
              title="Machine Learning Implementation"
              desc="Harnessing The Power Of Artificial Intelligence"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;