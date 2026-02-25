import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

const WalletGuidePage = () => {

     const {theme} = useContext(ThemeContext);
  return (
    <div className="container py-5">
      <div className="row">

        {/* ================= LEFT CONTENT ================= */}
        <div className="col-lg-8 col-md-7">

          {/* Breadcrumb */}
          <p className="text-muted small mb-2">
            HOME / GUIDES / HOW TO USE A WALLET
          </p>

          {/* <p className="text-secondary small mb-4">
            Page last updated: October 18, 2025
          </p> */}

          {/* Title */}
          <h1 className="fw-bold mb-4">How to use a wallet</h1>

          <p className="lead">
            Learn how to operate all the basic functions of a wallet. If you
            don’t have one yet, check out our <span className="text-primary text-decoration-underline"><Link to="/create-accound">
            How to create a FrequencyChain account</Link></span> guide.
          </p>

          {/* SECTION 1 */}
          <section id="open-wallet" className="mt-5">
            <h3 className="fw-bold mb-3">Open your wallet</h3>
            <p>
              After installing your wallet, open the app and unlock it using
              your password, PIN, or biometric authentication. You should see
              your dashboard with account balance and quick action buttons.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="receive" className="mt-5">
            <h3 className="fw-bold mb-3">Receive cryptocurrency</h3>
            <p>
              Click the receive button to view your wallet address and QR code.
              Share this address with the sender to receive FrequencyChain
              tokens or supported assets.
            </p>
          </section>

          {/* SECTION 3 */}
          <section id="send" className="mt-5">
            <h3 className="fw-bold mb-3">Send cryptocurrency</h3>
            <p>
              Use the send option, paste the recipient address, enter the
              amount, and confirm the transaction. Always double-check the
              address before sending.
            </p>
          </section>

          {/* SECTION 4 */}
          <section id="connect" className="mt-5">
            <h3 className="fw-bold mb-3">Connecting to projects</h3>
            <p>
              You can connect your wallet to FrequencyChain apps and platforms
              using the connect wallet button. Approve only trusted requests.
            </p>
          </section>

          {/* ================= FAQ ================= */}
          <section id="faq" className="mt-5">
            <h3 className="fw-bold mb-3">Frequently asked questions</h3>

            <div className="accordion" id="faqAcc">

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#f1"
                  >
                    If I own a FrequencyChain address, do I own the same on other blockchains?
                  </button>
                </h2>
                <div id="f1" className="accordion-collapse collapse" data-bs-parent="#faqAcc">
                  <div className="accordion-body">
                    No. Each blockchain network is separate. Addresses may look
                    similar but they are not automatically valid across all
                    chains.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#f2"
                  >
                    Can I use the same address on multiple devices?
                  </button>
                </h2>
                <div id="f2" className="accordion-collapse collapse" data-bs-parent="#faqAcc">
                  <div className="accordion-body">
                    Yes — if you import the same recovery phrase into another
                    wallet app. Keep your phrase secure when doing this.
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="col-lg-4 col-md-5">
          <div className="position-sticky" style={{ top: "110px" }}>

            <div className="d-flex justify-content-end mb-3">
              <button className="btn btn-outline-primary btn-sm">
                Edit page ↗
              </button>
            </div>

            <h6 className="text-uppercase mb-3"
                style={{
                    color: theme === "dark" ? "#685AFF" : "#111111",
                   transition: "0.3s",
                  }}
            >ON THIS PAGE</h6>

            <div className="border-start ps-3">
              <ul className="list-unstyled small">

                <li className="mb-3">
                  <a href="#open-wallet" className="text-decoration-none"
                  style={{
                    color: theme === "dark" ? "#ffffff" : "#111111",
                   transition: "0.3s",
                  }}
                  >
                    Open your wallet
                  </a>
                </li>

                <li className="mb-3">
                  <a href="#receive" className="text-decoration-none"
                   style={{
                    color: theme === "dark" ? "#ffffff" : "#111111",
                   transition: "0.3s",
                  }}
                  >
                    Receive cryptocurrency
                  </a>
                </li>

                <li className="mb-3">
                  <a href="#send" className="text-decoration-none"
                   style={{
                    color: theme === "dark" ? "#ffffff" : "#111111",
                   transition: "0.3s",
                  }}
                  >
                    Send cryptocurrency
                  </a>
                </li>

                <li className="mb-3">
                  <a href="#connect" className="text-decoration-none"
                   style={{
                    color: theme === "dark" ? "#ffffff" : "#111111",
                   transition: "0.3s",
                  }}
                  >
                    Connecting to projects
                  </a>
                </li>

                <li className="mb-3 mt-3 fw-semibold">
                  <a href="#faq" className="text-decoration-none"
                  style={{
                    color: theme === "dark" ? "#685AFF" : "#111111",
                   transition: "0.3s",
                  }}
                  >
                    Frequently asked questions
                  </a>
                </li>

                <li className="ms-3 mb-2">
                  <a href="#f1" className="text-decoration-none"
                   style={{
                    color: theme === "dark" ? "#ffffff" : "#111111",
                   transition: "0.3s",
                  }}
                  >
                    Address on other blockchains?
                  </a>
                </li>

                <li className="ms-3 mb-2">
                  <a href="#f2" className="text-decoration-none"
                   style={{
                    color: theme === "dark" ? "#ffffff" : "#111111",
                   transition: "0.3s",
                  }}
                  >
                    Same address multiple devices?
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WalletGuidePage;