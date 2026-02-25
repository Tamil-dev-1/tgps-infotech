import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FrecxGuid.css";
import  { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Link } from 'react-router-dom'

const FrequencyGuides = () => {
     const {theme} = useContext(ThemeContext);
  return (
    <div className="fc-guides-page">
      <div className="container py-5">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-8">

            {/* Breadcrumb */}
            <div className="fc-breadcrumb mb-3">
              <Link to="/">HOME</Link> <span>/</span> <span className="accent">GUIDES</span>
            </div>

            {/* <p className="fc-updated mb-4">
              Page last updated: April 25, 2025
            </p> */}

          <h2 className={`fc-title mb-4 ${theme === "dark" ? "title-dark" : "title-light"}`}>
  FrequencyChain guides
</h2>


            <p className="fc-desc mb-5"
            style={{
                color: theme === "dark" ? "#cbd5f1" : "#111111",
                transition: "0.3s",
            }}
            >
              Start your FrequencyChain blockchain journey with practical,
              step-by-step guides. Learn wallets, smart contracts, tokens,
              and secure blockchain usage.
            </p>

            {/* ================= GETTING STARTED ================= */}
            <h2 id="getting-started" className="fc-section-title"
            style={{
                    color: theme === "dark" ? "#ffffff" : "#111111",
                    transition: "0.3s",
            }}
            >
              Getting started
            </h2>

            <ol className="fc-list">
              <li>
                {/* <a href="#" className="fc-link">
                  How to "create" an FrecX account
                </a> */}
                <p>

                    <Link to="/create-accound">
                  <span href="#" className="fc-link"
                   style={{
                color: theme === "dark" ? "#a78bfa" : "#5B23FF",
                transition: "0.3s",
            }}
                  >How to "create" an FrequencyChain account</span> </Link>Anyone can create a wallet for free to use FrequencyChain apps.
                </p>
              </li>

              <li>
                <p>
                  <Link to='/use-wallet'>
                     <span className="fc-link"
                       style={{
                color: theme === "dark" ? "#a78bfa" : "#5B23FF",
                transition: "0.3s",
            }}
                 > Use your wallet </span>
                  </Link>
               Send, receive tokens and connect wallet to FrequencyChain dApps.
                </p>
              </li>
            </ol>

            {/* ================= SECURITY BASICS ================= */}
            <h2 id="security-basics" className="fc-section-title mt-5"
             style={{
                    color: theme === "dark" ? "#ffffff" : "#111111",
                    transition: "0.3s",
            }}
            >
              Security basics
            </h2>

            <ol className="fc-list">
              <li>
                <a href="#" className="fc-link">
                  Revoke smart contract access
                </a>
                <p>
                  Remove unwanted contract approvals to protect your crypto funds.
                </p>
              </li>

              <li>
                <a href="#" className="fc-link">
                  Identify scam tokens
                </a>
                <p>
                  Learn how fake tokens appear legitimate and how to detect them.
                </p>
              </li>
            </ol>

            {/* ================= USING FREQUENCYCHAIN ================= */}
            <h2 id="using-frequencychain" className="fc-section-title mt-5"
             style={{
                    color: theme === "dark" ? "#ffffff" : "#111111",
                    transition: "0.3s",
            }}
            >
              Using FrequencyChain
            </h2>

            <ol className="fc-list">
              <li>
                <a href="#" className="fc-link">
                  Bridge tokens to Layer 2
                </a>
                <p>
                  Move assets to Layer-2 networks to reduce transaction fees.
                </p>
              </li>

              <li>
                <a href="#" className="fc-link">
                  Swap tokens
                </a>
                <p>
                  Exchange tokens easily using FrequencyChain DEX platforms.
                </p>
              </li>
            </ol>

            <hr className="fc-divider" />

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="fc-sidebar">

              <button className="fc-edit-btn mb-4">
                Edit page
              </button>

              <div className="fc-side-box">
                <p className="fc-side-title">ON THIS PAGE</p>
                <ul>
                  <li><a href="#getting-started">Getting started</a></li>
                  <li><a href="#security-basics">Security basics</a></li>
                  <li><a href="#using-frequencychain">Using FrequencyChain</a></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FrequencyGuides;
