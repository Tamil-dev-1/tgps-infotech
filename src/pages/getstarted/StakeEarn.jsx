import React from "react";
import './StakeEarn.css';
// import Img1 from '../../assets/images/ourproduct/img1.jpg'
import { Coins, Gift } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { motion } from "framer-motion";
import StakeBanner from '../../assets/images/stake/stakebanner2.png';
import StakeBanner2 from '../../assets/images/stake/reward.png';
import Vector1 from '../../assets/images/stake/vector1.png';



const StakeEarn = () => {

  const {theme} = useContext(ThemeContext);

  // Timeline framer motion animation

  const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // timeline delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


// Framer left and right animation

const leftFade = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const rightFade = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};


  return (
    <>
      <section
      className="py-5"
      // style={{ background: "#0D0F14", color: "#fff" }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT */}
          <motion.div className="col-lg-6"
            variants={leftFade}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>

            <h1
              className="fw-semibold mb-4"
              style={{
                fontSize: "2.4rem",     // reduced text size
                lineHeight: "1.3"
              }}
            >
              Stake FrecX <Coins size={34} color="#9A86FD" /> earn rewards{" "}
              <Gift size={34} color="#A0FFB3" /> <br />
              and shape the future
            </h1>

            <p
              className="mb-4"
              style={{ fontSize: "1rem", color: "#c9c9c9" }}  // reduced text
            >
              Staking through StarGate lets you earn FREC rewards by securing the VeChain network.
            </p>

            {/* BUTTONS */}
            <div className="d-flex gap-3">
              <button
                className="btn px-4 py-2"
                style={{
                  background: "linear-gradient(135deg, #6B5BFF, #9D4CF5)",
                  color: "#fff",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "0.9rem"     // reduced
                }}
              >
                Start Staking
              </button>

              <button
                className="btn px-4 py-2"
                style={{
                  background: "#1E1F24",
                  color: "#fff",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "0.9rem"     // reduced
                }}
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="col-lg-6 text-center mt-5 mt-lg-0"
          variants={rightFade}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>
            <img
              src={StakeBanner}
              alt="stake"
              className="img-fluid"
              style={{
                borderRadius: "24px",
                width: "100%",
                maxWidth: "520px",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>

                                        {/* SECTION ============= 2 */}



        <section className="py-5">
      <div className="container text-center mt-5">

        {/* TITLE */}
        <h2 className="fw-bold mb-5 text-start">Staking Stats</h2>

        {/* ROW */}
        <motion.div className="row g-4 justify-content-center" 
        variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>

          {/* CARD 1 */}
          <motion.div className="col-md-4" variants={cardVariants}>
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "#c8c5ff",   // light lavender
                borderRadius: "20px",
              }}
            >
              <p className="mb-1" style={{ fontSize: "1rem", color: "#333" }}>
                Total Staked
              </p>

              <h1 className="fw-bold m-0" style={{ fontSize: "2.8rem",color: theme === "dark" ? "#111111" : "#111111", }}>
                7B+
                <span style={{ fontSize: "1rem", marginLeft: "6px" }}>Lorem</span>
              </h1>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div className="col-md-4"
          variants={cardVariants}>
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "#ffc5fbff",   // very light lavender
                borderRadius: "20px",
              }}
            >
              <p className="mb-1" style={{ fontSize: "1rem", color: "#333" }}>
                Total Wallets
              </p>

              <h1 className="fw-bold m-0" style={{ fontSize: "2.8rem", color: theme === "dark" ? "#111111" : "#111111", }}>
                15500+
              </h1>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div className="col-md-4"
          variants={cardVariants}>
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "#c8c5ff",
                borderRadius: "20px",
              }}
            >
              <p className="mb-1" style={{ fontSize: "1rem", color: "#333" }}>
                Rewards Distributed
              </p>

              <h1 className="fw-bold m-0" style={{ fontSize: "2.8rem",color: theme === "dark" ? "#111111" : "#111111", }}>
                1.7B
                <span style={{ fontSize: "1rem", marginLeft: "6px" }}>Lorem</span>
              </h1>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>



                                       {/* SECTION ======== 3 */}

                     <section className="py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <motion.div className="col-lg-6 text-center"
          variants={leftFade}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>
            <img
              src={StakeBanner2} 
              alt="coins"
              className="img-fluid stake-img"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div className="col-lg-6"
          variants={rightFade}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>
            <h2 className="fw-bold mb-4" style={{color: theme === "dark" ? "#ffff" : "#111111",}}>Why Stake?</h2>

            <div className="stake-line mb-4"></div>

            <h4 className="fw-semibold" style={{color: theme === "dark" ? "#ffff" : "#111111",}}>Earn rewards</h4>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quos.
            </p>

            <h4 className="fw-semibold mt-4" style={{color: theme === "dark" ? "#ffff" : "#111111",}}>Participate in governance</h4>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore id quae iste provident officiis!
            </p>

            <h4 className="fw-semibold mt-4" style={{color: theme === "dark" ? "#ffff" : "#111111",}}>Ecosystem advantages</h4>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum labore culpa! Deserunt, quibusdam quasi!
            </p>
          </motion.div>

        </div>
      </div>
    </section>


                                         {/* SECTION ====== 4   */}


     <section className="py-5"
                                      style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
      <div className="container text-center">

        <h2 className="fw-bold mb-4 premium-title">
          Learn More About Staking
        </h2>

        {/* FIXED Video Box */}
        <div className="video-box mx-auto mb-4"  style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          border:"1px solid white",
          transition: "0.3s",
        }}>
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/HYf3SPQpaNE"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <button className="btn premium-btn px-4 py-2">
          Explore More
        </button>

      </div>
    </section>        


                              {/* SECTION ===== 5 */}



<section className="py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <motion.div className="col-lg-6 text-center"
          variants={leftFade}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>
            <img
              src={Vector1} 
              alt="coins"
              className="img-fluid round-corner stake-img rounded-top-end rounded-bottom-start shadow"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div className="col-lg-6"
          variants={rightFade}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>
            <h2 className="fw-bold mb-4" style={{color: theme === "dark" ? "#ffff" : "#111111",}}>How to Get Started</h2>

            <div className="stake-line mb-4"></div>

            <h4 className="fw-semibold" style={{color: theme === "dark" ? "#ffff" : "#111111",}}>Connect your wallet</h4>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quos.
            </p>

            <h4 className="fw-semibold mt-4" style={{color: theme === "dark" ? "#ffff" : "#111111",}}>Stake Frec</h4>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore id quae iste provident officiis!
            </p>

            <h4 className="fw-semibold mt-4" style={{color: theme === "dark" ? "#ffff" : "#111111",}}>Earn rewards</h4>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum labore culpa! Deserunt, quibusdam quasi!
            </p>

            <div className="d-flex gap-3">
             <button className="btn premium-btn px-4 py-2">
          Start Stacking
        </button>

         <button className="btn premium-btn px-4 py-2">
          Learn More
        </button>
           </div>
          </motion.div>
           
           
        </div>
      </div>
    </section>

                                       {/* SECTION ======= 6 */}

   <section style={{paddingTop:"100px"}}>
      <div className="container">

        <motion.div className="row text-center justify-content-between" 
        variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>

          {/* 1 — Choose NFT */}
          <motion.div className="col-lg-3 col-md-6 mb-4" variants={cardVariants}>
            <div className="icon-circle mb-3" style={{ background: "#E5F5D9" }}>
              <i className="bi bi-camera" />
            </div>
            <h5 className="fw-bold">Choose your NFT</h5>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.
            </p>
          </motion.div>

          {/* 2 — Earn rewards */}
          <motion.div className="col-lg-3 col-md-6 mb-4" variants={cardVariants}>
            <div className="icon-circle mb-3" style={{ background: "#EFEAFF" }}>
              <i className="bi bi-gift" />
            </div>
            <h5 className="fw-bold">Earn rewards</h5>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.
            </p>
          </motion.div>

          {/* 3 — Ecosystem */}
          <motion.div className="col-lg-3 col-md-6 mb-4" variants={cardVariants}>
            <div className="icon-circle mb-3" style={{ background: "#DFF6E4" }}>
              <i className="bi bi-arrow-left-right" />
            </div>
            <h5 className="fw-bold">Ecosystem</h5>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.
            </p>
          </motion.div>

          {/* 4 — Governance */}
          <motion.div className="col-lg-3 col-md-6 mb-4" variants={cardVariants}>
            <div className="icon-circle mb-3" style={{ background: "#E0FAF9" }}>
              <i className="bi bi-diagram-3" />
            </div>
            <h5 className="fw-bold">Governance</h5>
            <p style={{color: theme === "dark" ? "#969696ff" : "#6c6363ff",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>


                               {/* SECTION ========= 7 */}



                               <section className="py-5">
      <div className="container">

        <div className="earn-card mx-auto p-5 d-flex justify-content-between align-items-center">
          
          {/* LEFT TEXT */}
          <motion.div className="content-area"
          variants={leftFade}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>
            <h2 className="earn-title mb-4">
              Start earning by securing the FrequencyChain blockchain
            </h2>

            <div className="d-flex gap-3">
              <button className="btn btn-primary stake-btn">Stake FrecX</button>
              <button className="btn btn-dark buy-btn">Buy FrecX</button>
            </div>
          </motion.div>

          {/* RIGHT DECORATION */}
          <div className="decor-area">
            <div className="decor-lines"></div>
          </div>

        </div>

      </div>
    </section>



    </>
  );
};

export default StakeEarn;
