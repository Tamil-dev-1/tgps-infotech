import React from "react";
import "./Gallery.css";

const teamData = [
  {
    category: "CORE TEAM",
    title: "Chief Executive Officer",
    desc: "Blockchain Architecture & Strategy",
  },
  {
    category: "CORE TEAM",
    title: "Chief Technology Officer",
    desc: "Distributed Systems & AI",
  },
  {
    category: "CORE TEAM",
    title: "Chief Operations Officer",
    desc: "Infrastructure & Operations",
  },
  {
    category: "ADVISORY BOARD",
    title: "Strategic Advisor",
    desc: "Renewable Energy Finance",
  },
  {
    category: "ADVISORY BOARD",
    title: "Technical Architect",
    desc: "Layer-1 Protocol Design",
  },
  {
    category: "ADVISORY BOARD",
    title: "Industry Advisor",
    desc: "DeFi & Tokenomics",
  },
];

export default function Team() {
  return (
    <section className="team">
      <div className="container">

        {/* Heading */}
        <div className="team__header text-center">
          <p className="team__subtitle">THE PEOPLE</p>

          <h2 className="team__title text-white">
            Our <span className="team__highlight">Team</span>
          </h2>

          <p className="team__description">
            A team of blockchain architects, energy specialists, AI engineers,
            and ecosystem builders united by a common mission.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {teamData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="team__card d-flex align-items-center">

                {/* Icon */}
                <div className="team__icon">
                  <i className="bi bi-shield"></i>
                </div>

                {/* Content */}
                <div className="team__content">
                  <p className="team__category">{item.category}</p>
                  <h5 className="team__role">{item.title}</h5>
                  <p className="team__text">{item.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}