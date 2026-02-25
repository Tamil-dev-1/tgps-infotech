import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./frecx.css";
import FrecXImg from '../../assets/images/frec/frecHero.png';
// import FrecXcoin from '../../assets/images/frec/frecXcoin.png';
import FrecXsend from '../../assets/images/frec/frecXsend.png';
import FrecXscaling from '../../assets/images/frec/frecXscaling.png';
import FrecXsuplly from '../../assets/images/frec/frecXsupply.png';
import { motion } from "framer-motion";


const FrecXSection = () => {
   const {theme} = useContext(ThemeContext);

  //  Time line framer animation

  const timelineContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // timeline gap
    },
  },
};

const timelineItem = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


   const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

  return (
    <>
    <section className="frecx-section d-flex align-items-center"
    style={{
    background: theme === "dark" ? "#000000" : "#ffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <motion.div className="col-lg-6 col-md-12 text-white"
           initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
            <span className="frec-subtitle">WHAT IS FRECX?</span>

            <h1 className="frecx-title"
            style={{color: theme === "dark" ? "#ffffff" : "#111111",
                   transition: "0.3s",}}
            >
              What is FrecX?
            </h1>

            <p className="frecx-desc"
            style={{color: theme === "dark" ? "#ffff" : "#25343F",
                   transition: "0.3s",}} 
            >
              FrecX is the native digital asset that powers the FrecX network.
              It is used to pay transaction fees, secure the network through
              staking, and enable decentralized applications. FrecX operates
              without control from any central authority and serves as a core
              asset for payments and investments.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div className="col-lg-6 col-md-12 text-center mt-5 mt-lg-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            <img
              src={FrecXImg }
              alt="FrecX"
              className="img-fluid frecx-image"
            />
          </motion.div>

        </div>
      </div>
    </section>

     {/* section ----- 2 */}

     <section className="frecx-intro container-fluid">
      <div className="row">
        <motion.div className="col-lg-8"
          variants={containerVariant}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}>

          {/* Meta info */}
          <motion.p variants={fadeUpVariant} className="frecx-updated">
            Page last update: <span>December 2, 2025</span>
          </motion.p>

          <motion.div className="frecx-contributors">
            <div className="avatars">
              <span className="avatar"></span>
              <span className="avatar"></span>
            </div>
            <a href="#" className="contributors-link">See contributors</a>
          </motion.div>

          {/* Main content */}
          <motion.p className="frecx1-text"  style={{color: theme === "dark" ? "#ffff" : "#25343F",
                   transition: "0.3s",}}>
            FrecX, commonly known as <strong>FrecX</strong>, is the fuel that
            powers the FrecX blockchain. Unlike bitcoin, which primarily
            serves as digital money, FrecX has multiple uses within the
            FrecX ecosystem.
          </motion.p>

          <motion.p
          variants={fadeUpVariant} className="frecx-text frecx-bold" style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>
            As FrecX's native cryptocurrency, FrecX is used to:
          </motion.p>

          <ol className="frecx-list1">
            <motion.li  variants={fadeUpVariant} style={{color: theme === "dark" ? "#ffff" : "#25343F",
                   transition: "0.3s",}}>
              Pay transaction fees (gas) for using the network and its applications
            </motion.li>
            <motion.li variants={fadeUpVariant} style={{color: theme === "dark" ? "#ffff" : "#25343F",
                   transition: "0.3s",}}>
              Secure the FrecX network through staking
            </motion.li>
          </ol>

          <p className="frecx-text1" style={{color: theme === "dark" ? "#ffff" : "#25343F",
                   transition: "0.3s",}}>
            FrecX was introduced in 2025 as part of the FrecX network launch
            and has since grown to become one of the
            <a href="#" className="frecx-link"> most valuable digital assets in the world</a>.
          </p>

        </motion.div>
      </div>
    </section>

    {/* SECTION ----- 3 */}

      <section className="frecx-usecases container-fluid">
      <div className="row">
        <motion.div className="col-lg-9"
         
  variants={timelineContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>

          {/* FOR CONSUMERS */}
          <motion.div className="frecx-row d-flex"
          variants={timelineItem}>
            <div className="frecx-icon consumer">
              <i className="bi bi-person"></i>
            </div>
            <div className="frecx-content" style={{ 
              color: theme === "dark" ? "#ffffff" : "#111111",
             transition: "0.3s",}}>
              <h3>For consumers</h3>
              <p style={{
              color: theme === "dark" ? "#ffffff" : "#111111",
             transition: "0.3s",}}>
                 FrecX enables global payments without banks, purchases of
                non-fungible tokens (NFTs), and access to decentralized
                finance (DeFi) apps. It's censorship-resistant with 24/7
                cross-border functionality.
              </p>
            </div>
          </motion.div>

          <hr />

          {/* FOR DEVELOPERS */}
          <motion.div className="frecx-row d-flex"
          variants={timelineItem}>
            <div className="frecx-icon developer">
              <i className="bi bi-code-slash"></i>
            </div>
            <div className="frecx-content" style={{ 
              color: theme === "dark" ? "#ffffff" : "#111111",
             transition: "0.3s",}}>
              <h3 
              >For developers</h3>
              <p 
              style={{ color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>
                FrecX pays for transaction fees when deploying smart contracts
                on the FrecX mainnet. It's also the primary currency used within
                many applications in the FrecX ecosystem.
              </p>
            </div>
          </motion.div>

          <hr />

          {/* FOR INVESTORS */}
          <motion.div className="frecx-row d-flex"
          variants={timelineItem}>
            <div className="frecx-icon investor">
              <i className="bi bi-bank"></i>
            </div>
            <div className="frecx-content">
              <h3 
              style={{ color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>For investors</h3>
              <p style={{ color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>
                FrecX functions as a store of value and yield-generating asset
                through staking. It provides exposure to Web3 growth and the
                expanding digital economy.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>

      {/* SECTION ----- 4 */}

<section className="container-fluid frecx-buy-section">
  <div className="row">
    <motion.div
      className="col-lg-8"
      variants={timelineContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      <motion.h2
        variants={timelineItem}
        className="frecx-title1"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        How to buy FrecX
      </motion.h2>

      <motion.p
        variants={timelineItem}
        className="frecx-text"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        Buying FrecX is straightforward with several options based on your
        needs and location. Always start with a trusted platform offering
        strong security.
      </motion.p>

      <motion.p
        variants={timelineItem}
        className="frecx-text"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        For consumers, buy FrecX through cryptocurrency exchanges or wallet apps.
      </motion.p>

      {/* SIDENOTE BOX */}
      <motion.div variants={timelineItem} className="frecx-sidenote">
        <div className="sidenote-icon">💡</div>
        <div>
          <strong>Sidenote</strong>
          <p>
            When buying FrecX you'll hear <b>"account/address"</b> and
            <b> "wallet"</b>:
          </p>
          <ul>
            <li>
              Think of your <b>account</b> like your email address where people
              send you money.
            </li>
            <li>
              Think of your <b>wallet</b> like your email app where you check
              balances and make payments.
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.h4
        variants={timelineItem}
        className="frecx-subtitle"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        You can purchase FrecX with:
      </motion.h4>

      <ul className="frecx-list">
        <motion.li
          variants={timelineItem}
          style={{ color: theme === "dark" ? "#ffffff" : "#A8BBA3", transition: "0.3s" }}
        >
          <b>Credit/debit cards</b> instantly but with higher fees
        </motion.li>

        <motion.li
          variants={timelineItem}
          style={{ color: theme === "dark" ? "#ffffff" : "#A8BBA3", transition: "0.3s" }}
        >
          <b>Bank transfers</b> slower but with lower fees
        </motion.li>

        <motion.li
          variants={timelineItem}
          style={{ color: theme === "dark" ? "#ffffff" : "#A8BBA3", transition: "0.3s" }}
        >
          <b>PayPal</b> or similar services where available
        </motion.li>
      </ul>

      <motion.p
        variants={timelineItem}
        className="frecx-text"
        style={{ color: theme === "dark" ? "#ffffff" : "#000", transition: "0.3s" }}
      >
        For businesses, exchanges offer corporate accounts with higher limits,
        better support, compliance features, volume discounts, and enhanced
        security.
      </motion.p>

      <motion.h4
        variants={timelineItem}
        className="frecx-subtitle"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        Other ways to get FrecX:
      </motion.h4>

      <ul className="frecx-list">
        <motion.li
          variants={timelineItem}
          style={{ color: theme === "dark" ? "#ffffff" : "#A8BBA3", transition: "0.3s" }}
        >
          Receive payments from people you know
        </motion.li>

        <motion.li
          variants={timelineItem}
          style={{ color: theme === "dark" ? "#ffffff" : "#A8BBA3", transition: "0.3s" }}
        >
          Provide liquidity on decentralized finance protocols
        </motion.li>

        <motion.li
          variants={timelineItem}
          style={{ color: theme === "dark" ? "#ffffff" : "#A8BBA3", transition: "0.3s" }}
        >
          Stake FrecX to earn rewards while securing the FrecX network
        </motion.li>
      </ul>

    </motion.div>
  </div>
</section>


   {/* SECTION ----- 5 */}

<section className="container-fluid frecx-send-section">
  <div className="row">
    <motion.div
      className="col-lg-8"
      variants={timelineContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      {/* Top Icon (optional) */}
      {/* 
      <motion.div variants={timelineItem} className="frecx-top-icon">
        <img src={FrecXcoin} alt="FrecX" />
      </motion.div> 
      */}

      <motion.h2
        variants={timelineItem}
        className="frecx-title2"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        How to send and receive FrecX
      </motion.h2>

      <motion.p
        variants={timelineItem}
        className="frecx-text"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        <strong>Sending FrecX</strong> requires a wallet and recipient address.
        Enter their address, specify the amount, review the transaction fee,
        and confirm. Transactions typically arrive in under 30 seconds and
        cannot be reversed once confirmed.
      </motion.p>

      <motion.p
        variants={timelineItem}
        className="frecx-text"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        <strong>Receiving FrecX</strong> requires sharing your FrecX address
        or QR code with the sender. Funds appear in your wallet after network
        confirmation, with most wallets providing notifications.
      </motion.p>

      <motion.p
        variants={timelineItem}
        className="frecx-text"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        <strong>Need help?</strong> Read the
        <a href="#" className="frecx-link"> How to use a wallet guide</a>.
      </motion.p>

      {/* SIDENOTE */}
      <motion.div variants={timelineItem} className="frecx-sidenote">
        <div className="sidenote-icon">💡</div>
        <div>
          <strong>Sidenote</strong>
          <p>
            Only share your FrecX address with trusted contacts. Since FrecX
            is built on a public ledger, others can view your balance and
            transactions. They can’t access your funds, but privacy is
            recommended.
          </p>
        </div>
      </motion.div>

      <motion.p
        variants={timelineItem}
        className="frecx-text"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111", transition: "0.3s" }}
      >
        For larger amounts, consider hardware wallets for added security.
      </motion.p>

    </motion.div>
  </div>
</section>

  {/* SECTION ----- 6 */}

<section className="container-fluid frecx-time-section">
  <div className="row align-items-start">

    {/* LEFT IMAGE – slide from left */}
    <motion.div
      className="col-lg-5 frecx-time-image"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img src={FrecXsend} alt="FrecX transaction device" />
    </motion.div>

    {/* RIGHT CONTENT – slide from right */}
    <motion.div
      className="col-lg-7"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      viewport={{ once: true }}
    >
      <h2
        className="frecx-time-title"
        style={{
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
      >
        How long does it take to send FrecX?
      </h2>

      <p
        className="frecx-time-text"
        style={{
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
      >
        FrecX transactions typically complete in under 30 seconds. The FrecX
        network processes blocks at regular intervals, though transactions
        may queue during periods of high congestion.
      </p>

      <p
        className="frecx-time-text"
        style={{
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
      >
        Transactions achieve <strong>finality</strong> after approximately
        15 minutes, ensuring the transfer is permanently secured on the
        network.
      </p>

      <p
        className="frecx-time-text"
        style={{
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
      >
        During heavy network usage, you can speed up transactions by paying
        higher transaction fees, placing your transaction ahead in the queue.
        Fees are distributed between validators and the network’s burn
        mechanism.
      </p>
    </motion.div>

  </div>
</section>


 {/* SECTION ------ 7 */}

 <section className="enter-l2-section py-5">
  <div className="container">

    <div className="row align-items-center">

      {/* LEFT SIDE – TEXT (fade + slide up) */}
      <motion.div
        className="col-lg-6 mb-4 mb-lg-0 order-2 order-lg-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          className="fw-bold mb-4 l2-text"
          style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          Enter L2s: Scaling FrecX
        </h2>

        <p
          className="mb-3 l2-text-p"
          style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          As <span className="fw-semibold">FrecX</span>&apos;s
          popularity grows, keeping transaction fees low becomes challenging.
          <span className="fw-semibold"> Layer 2 (L2)</span> networks
          address this issue.
        </p>

        <p className="mb-3">
          L2s like{" "}
          <a href="#" className="text-decoration-none text-info">
            Optimism ↗
          </a>{" "}
          and{" "}
          <a href="#" className="text-decoration-none text-info">
            Arbitrum ↗
          </a>{" "}
          offer <strong>10–100x cheaper fees</strong>{" "}
          while inheriting <strong>FrecX</strong>&apos;s
          security. They process transactions offchain and post data back to
          the FrecX network.
        </p>

        <p
          className="mb-3"
          style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          Think of them as express lanes that provide faster, cheaper
          transactions alongside the FrecX main network.
        </p>

        <p
          style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          <strong>
            L2 transfers typically cost less than $0.01
          </strong>
          , bringing FrecX to millions more users through integrations with
          platforms like Robinhood, PayPal, and Shopify.
        </p>
      </motion.div>

      {/* RIGHT SIDE – IMAGE (fade + slide from right) */}
      <motion.div
        className="col-lg-6 order-1 order-lg-2"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="l2-image-wrapper">
          <img
            src={FrecXscaling}
            alt="FrecX Layer 2 Illustration"
            className="img-fluid rounded-4"
          />
        </div>
      </motion.div>

    </div>

  </div>
</section>


    {/* SECTION ------ 8 */}

    <section className="frecx-supply-section py-5">
  <div className="container">

    <div className="row align-items-center">

      {/* LEFT SIDE – IMAGE (fade + slide from left) */}
      <motion.div
        className="col-lg-6 mb-4 mb-lg-0"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={FrecXsuplly} // change image path
          alt="FrecX Supply Illustration"
          className="img-fluid rounded-4"
        />
      </motion.div>

      {/* RIGHT SIDE – TEXT (fade + slide up) */}
      <motion.div
        className="col-lg-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true }}
      >
        <h2
          className="fw-bold mb-4"
          style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          What is the FrecX supply?
        </h2>

        <p
          className="mb-4"
          style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          Unlike Bitcoin&apos;s fixed 21 million cap,{" "}
          <strong>FrecX</strong> has dynamic supply mechanics:
        </p>

        <ul className="ps-3 mb-4">
          <li
            className="mb-2"
            style={{
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            New <strong>FrecX</strong> is issued to reward network validators
            at a limited rate calculated by the protocol
          </li>

          <li
            className="mb-2"
            style={{
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            A portion of every transaction fee is permanently{" "}
            <strong>burned</strong> (deleted from existence)
          </li>

          <li
            style={{
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            This creates alternating periods of inflation and deflation
            based on network usage
          </li>
        </ul>

        <p
          style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          <strong>Expected equilibrium:</strong> The system balances
          network security with long-term value preservation. High usage
          leads to deflation; low usage results in inflation.
        </p>
      </motion.div>

    </div>

  </div>
</section>


    </>
  );
};

export default FrecXSection;
