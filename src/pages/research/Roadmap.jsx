import React from "react";
import './Roadmap.css'
import  { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";


export default function RoadmapPage() {

  const {theme} = useContext(ThemeContext);
  return (
    <>
      {/* HERO */}
      <section
        className="py-5 text-center text-white"
        // style={{
        //   background:
        //     "linear-gradient(135deg, #6b4dfb 0%, #4736d8 50%, #2a1fa6 100%)",
        //   borderRadius: "0 0 40px 40px",
        // }}

         style={{
    background: theme === "dark" ? "#000000" : "linear-gradient(135deg, #6b4dfb 0%, #4736d8 50%, #2a1fa6 100%)",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
      >
        <div className="container py-5">
          <h1 className="fw-bold display-4">Roadmap</h1>
          <p className="mt-3" style={{ fontSize: "18px", opacity: "0.9" }}>
            The future of Frequency Chain — building step-by-step towards the decentralized world.
          </p>
        </div>
      </section>

      {/* ROADMAP TIMELINE */}
      <section className="py-5">
        <div className="container">

          <h2 className="fw-bold text-center mb-5"
          style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}
          >Our Journey</h2>

          <div className="position-relative mx-auto" style={{ maxWidth: "850px" }}>
            {/* Vertical line */}
            <div
              className="position-absolute top-0 start-50 translate-middle-x d-none d-md-block"
              style={{
                width: "4px",
                height: "100%",
                background: "#dcdcdc",
                borderRadius: "10px",
                opacity: 0.7,
              }}
            ></div>

            {/* ---- Q1 ---- */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6 text-md-end mb-3 mb-md-0">
                <h4 className="fw-bold"
                style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>Q1 2025</h4>
                <p className="">
                  Network upgrade, improved validator performance and dev tools enhancement.
                </p>
              </div>

              <div className="col-md-6">
                <div
                  className="p-4 rounded-4 shadow-sm "
                  style={{ borderLeft: "4px solid #6b4dfb",
                    background: theme === "dark" ? "linear-gradient(90deg,rgba(2, 0, 36, 1) 21%, rgba(9, 9, 121, 1) 99%)" : "#ffff",
                     transition: "0.3s",
                   }}
                >
                  <h6 className="fw-bold">Key Milestones</h6>
                  <ul className=" small mt-2 mb-0">
                    <li>Validator performance improvements</li>
                    <li>JS SDK v2.0 release</li>
                    <li>API rate-limit optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ---- Q2 ---- */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6 order-md-2 text-start mb-3 mb-md-0">
                <h4 className="fw-bold" style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>Q2 2025</h4>
                <p className="">
                  Smart contract upgrades and expanded developer APIs.
                </p>
              </div>

              <div className="col-md-6 order-md-1 text-md-end">
                <div
                  className="p-4 rounded-4 shadow-sm"
                  style={{ borderRight: "4px solid #6b4dfb",
                    background: theme === "dark" ? "linear-gradient(90deg,rgba(2, 0, 36, 1) 21%, rgba(9, 9, 121, 1) 99%)" : "#ffff",
                     transition: "0.3s",
                   }}
                >
                  <h6 className="fw-bold">Key Milestones</h6>
                  <ul className="small mt-2 mb-0">
                    <li>Smart contracts v1.3</li>
                    <li>Extended RPC API</li>
                    <li>New multi-sig deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ---- Q3 ---- */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6 text-md-end mb-3 mb-md-0">
                <h4 className="fw-bold" style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>Q3 2025</h4>
                <p className="">
                  Launch of the Frequency Ecosystem & cross-chain integration.
                </p>
              </div>

              <div className="col-md-6">
                <div
                  className="p-4 rounded-4 shadow-sm"
                  style={{ borderLeft: "4px solid #6b4dfb",
                    background: theme === "dark" ? "linear-gradient(90deg,rgba(2, 0, 36, 1) 21%, rgba(9, 9, 121, 1) 99%)" : "#ffff",
                     transition: "0.3s",
                   }}
                >
                  <h6 className="fw-bold">Key Milestones</h6>
                  <ul className="small mt-2 mb-0">
                    <li>Cross-chain bridge beta</li>
                    <li>Ecosystem marketplace launch</li>
                    <li>Web3 identity integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ---- Q4 ---- */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6 order-md-2 text-start mb-3 mb-md-0">
                <h4 className="fw-bold" style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>Q4 2025</h4>
                <p className="">
                  Global scaling, partnerships and community expansion.
                </p>
               
              </div>

              <div className="col-md-6 order-md-1 text-md-end">
                <div
                  className="p-4 rounded-4 shadow-sm"
                  style={{ borderRight: "4px solid #6b4dfb",
                    background: theme === "dark" ? "linear-gradient(90deg,rgba(2, 0, 36, 1) 21%, rgba(9, 9, 121, 1) 99%)" : "#ffff",
                     transition: "0.3s",
                   }}
                >
                  <h6 className="fw-bold">Key Milestones</h6>
                  <ul className="small mt-2 mb-0">
                    <li>20+ ecosystem partners</li>
                    <li>Node scaling improvement</li>
                    <li>Community developer fund</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5"
          style={{ color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}
          >What’s Coming Next</h2>

          <div className="row g-4">
            {/* Card */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm h-100"
              style={{
                background: theme === "dark" ? "linear-gradient(90deg,rgba(2, 0, 36, 1) 21%, rgba(9, 9, 121, 1) 99%)" : "#ffff",
                     transition: "0.3s",
              }}
              >
                <h5 className="fw-bold">Layer-2 Scaling</h5>
                <p className="small">
                  High-speed rollups designed to reduce gas fees and increase throughput.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm h-100"
              style={{
                background: theme === "dark" ? "linear-gradient(90deg,rgba(2, 0, 36, 1) 21%, rgba(9, 9, 121, 1) 99%)" : "#ffff",
                     transition: "0.3s",
              }}
              >
                <h5 className="fw-bold">Cross-Chain Bridge</h5>
                <p className="small">
                  Seamless interoperability with major blockchain networks.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm h-100"
              style={{
                background: theme === "dark" ? "linear-gradient(90deg,rgba(2, 0, 36, 1) 21%, rgba(9, 9, 121, 1) 99%)" : "#ffff",
                     transition: "0.3s",
              }}
              >
                <h5 className="fw-bold">Decentralized Identity</h5>
                <p className="small">
                  Secure Web3 identity for authentication and data sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #4736d8, #2a1fa6)",
        }}
      >
        <h2 className="fw-bold">Be Part of the Future</h2>
        <p className="mt-2">Watch our progress and contribute to the chain evolution.</p>
        <button className="btn btn-light px-4 py-2 fw-semibold mt-3">
          Join the Community →
        </button>
      </section>
    </>
  );
}
