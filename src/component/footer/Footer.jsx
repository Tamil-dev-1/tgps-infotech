import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Footer = () => {

   const {theme} = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer"
     style={{
    background: theme === "dark" ? "#000000" : "#ffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
    >
      <div className="container">
        <p className="last-updated">Website last updated: December 8, 2025</p>

        {/* 5 columns */}
        <div className="row gx-5 gy-5">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 footer-column">
            <h6 className="title">Learn</h6>
            <ul className="footer-links">
              <li>Learn Hub</li>
              <li>What is Frequency Chain?</li>
              <li>What is FrecX?</li>
              <li>FrecX wallets</li>
              <li>What is Web3?</li>
              <li>Smart contracts</li>
              <li>Gas fees</li>
              <li>Run a node</li>
              <li>Frequency security</li>
              <li>Quiz Hub</li>
              <li>Frequency glossary</li>
            </ul>
          </div>

          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 footer-column">
            <h6 className="title">Use</h6>
            <ul className="footer-links">
              <li>Guides</li>
              <li>Choose your wallet</li>
              <li>Get FrecX</li>
              <li>Application explorer</li>
              <li>Stablecoins</li>
              <li>NFTs</li>
              <li>DeFi</li>
              <li>DAOs</li>
              <li>Decentralized identity</li>
              <li>Stake FrecX</li>
              <li>Layer 2</li>
            </ul>
          </div>

          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 footer-column">
            <h6 className="title">Build</h6>
            <ul className="footer-links">
              <li>Builder's home</li>
              <li>Tutorials</li>
              <li>Documentation</li>
              <li>Learn by coding</li>
              <li>Set up environment</li>
              <li>Grants</li>
              <li>Foundational topics</li>
              <li>UX/UI fundamentals</li>
              <li>Mainnet Frequency</li>
              <li>Founders</li>
            </ul>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 footer-column">
            <h6 className="title">Participate</h6>
            <ul className="footer-links">
              <li>Community hub</li>
              <li>Online communities</li>
              <li>Frequency Chain events</li>
              <li>Contributing to frequencyChain.org</li>
              <li>Translation Program</li>
              <li>Frequency bug bounty</li>
              <li>Frequency Foundation</li>
              <li>Foundation Blog (↗)</li>
              <li>Ecosystem Support Program (↗)</li>
              <li>Devcon (↗)</li>
            </ul>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 footer-column">
            <h6 className="title">Research</h6>
            <ul className="footer-links">
              <li>Frequency Whitepaper</li>
              <li>Frequency roadmap</li>
              <li>Improved security</li>
              <li>Technical history</li>
              <li>Open research</li>
              <li>EIPs</li>
              <li>Frequency governance</li>
              <li>Trillion dollar project</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bottom-bar py-4 position-relative"
           style={{
    background: theme === "dark" ? "#280A3E" : "#E9DEFD",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
        >
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">

            {/* Social Icons */}
            <div className="icons d-flex gap-4">
              <i className="bi bi-github" style={{ fontSize: "1.8rem" }}></i>
              <i className="bi bi-twitter-x" style={{ fontSize: "1.8rem" }}></i>
              <i className="bi bi-discord" style={{ fontSize: "1.8rem" }}></i>
            </div>

            {/* Footer Links */}
            <div
              className="small-links text-center text-md-start d-flex flex-wrap justify-content-center gap-3"
              style={{ fontSize: "0.95rem", fontWeight: "500" }}
            >
              <span>About us</span>
              <span>Brand assets</span>
              <span>Jobs</span>
              <span>Privacy policy</span>
              <span>Terms of use</span>
              <span>Cookie policy</span>
              <span>Press</span>
            </div>

          </div>

          {/* GO TO TOP BUTTON */}
          <button
            className="go-top-btn"
            onClick={scrollToTop}
            aria-label="Go to top"
          >
            ↑
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
