import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateFrec.css";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const FrequencyGuideDetail = () => {
     const {theme} = useContext(ThemeContext);
  return (
    <div className="fc-doc-page">
      <div className="container py-5">
        <div className="row">

          {/* ================= LEFT CONTENT ================= */}
          <div className="col-lg-8">

            {/* Breadcrumb */}
            <div className="fc-breadcrumb mb-3">
              HOME / GUIDES /
              <span className="accent">
                {" "}HOW TO CREATE A FREQUENCYCHAIN ACCOUNT
              </span>
            </div>

            {/* <p className="fc-updated mb-4">
              Page last updated: October 22, 2025
            </p> */}

            <h1 className="fc-main-title mb-4"
            style={{
                 color: theme === "dark" ? "#ffffff" : "#111111",
                 transition: "0.3s",
            }}
            >
              How to create a FrequencyChain account
            </h1>

            <p className="fc-para"
             style={{
                 color: theme === "dark" ? "#cbd5f1" : "#111111",
                 transition: "0.3s",
            }}
            >
              Anyone can create a FrequencyChain account for free. You only
              need a compatible crypto wallet app. Wallets help you store,
              send and interact with FrequencyChain blockchain apps.
            </p>

            <p className="fc-para">
              With one wallet you can access exchanges, NFT platforms,
              dApps and FrequencyChain ecosystem tools without separate
              registrations.
            </p>

            {/* ================= STEP 1 ================= */}
            <h2 id="step1" className="fc-step-title"
              style={{
                 color: theme === "dark" ? "#ffffff" : "#111111",
                 transition: "0.3s",
            }}
            >
              Step 1: Choose a wallet
            </h2>
            <p className="fc-para">
              Select a trusted wallet that supports FrequencyChain network.
              Prefer open-source and audited wallets.
            </p>

            {/* ================= STEP 2 ================= */}
            <h2 id="step2" className="fc-step-title"
             style={{
                 color: theme === "dark" ? "#ffffff" : "#111111",
                 transition: "0.3s",
            }}
            >
              Step 2: Download and install
            </h2>
            <p className="fc-para">
              Install only from official website or app store. Never download
              wallet apps from unknown links.
            </p>

            {/* ================= STEP 3 ================= */}
            <h2 id="step3" className="fc-step-title"
             style={{
                 color: theme === "dark" ? "#ffffff" : "#111111",
                 transition: "0.3s",
            }}
            >
              Step 3: Create your account
            </h2>
            <p className="fc-para">
              Open the wallet → Create new account → Generate address for
              FrequencyChain network.
            </p>

            {/* ================= STEP 4 ================= */}
            <h2 id="step4" className="fc-step-title"
             style={{
                 color: theme === "dark" ? "#ffffff" : "#111111",
                 transition: "0.3s",
            }}
            >
              Step 4: Save recovery phrase
            </h2>
            <p className="fc-para">
              Write your recovery phrase on paper and store offline. Never
              share with anyone. This controls your funds.
            </p>

            {/* ================= FAQ ================= */}
            <h2 id="faq" className="fc-step-title"
             style={{
                 color: theme === "dark" ? "#ffffff" : "#111111",
                 transition: "0.3s",
            }}
            >
              Frequently asked questions
            </h2>

            <h5 className="fc-faq-q">
              Is wallet and FrequencyChain account same?
            </h5>
            <p className="fc-para">
              Wallet manages your keys. Account is your blockchain identity.
            </p>

            <h5 className="fc-faq-q">
              Can I reuse same address across chains?
            </h5>
            <p className="fc-para">
              Some chains support it, but always verify before sending funds.
            </p>

            <h5 className="fc-faq-q">
              Is self-custody safer than exchanges?
            </h5>
            <p className="fc-para">
              Yes — if you protect your keys properly.
            </p>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="fc-doc-sidebar">

              <button className="fc-edit-btn mb-4">
                Edit page
              </button>

              <div className="fc-side-card">
                <p className="fc-side-title">ON THIS PAGE</p>

                <ul>
                  <li><a href="#step1">Step 1: Choose wallet</a></li>
                  <li><a href="#step2">Step 2: Download</a></li>
                  <li><a href="#step3">Step 3: Create account</a></li>
                  <li><a href="#step4">Step 4: Recovery phrase</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FrequencyGuideDetail;
