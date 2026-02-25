import React, { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import "./Individual.css";

/* ================= ANIMATIONS ================= */

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};

/* ================= COMPONENT ================= */

const Individuals = () => {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("individual");

  const content = {
    individual: {
      title: "Why Frequency Chain?",
      cards: [
        {
          img: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
          title: "Earn Rewards and Make a Positive Impact",
          desc: "Turn everyday sustainable actions into rewards with real, tradable value.",
        },
        {
          img: "https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg",
          title: "Track and Prove Your Positive Impact",
          desc: "See your contributions verified and build transparent proof of your efforts.",
        },
        {
          img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
          title: "Built for Mainstream Adoption",
          desc: "Connect with millions of people working toward measurable progress.",
        },
        {
          img: "https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg",
          title: "Simple and Accessible Technology",
          desc: "Get started easily through VeWorld and VeBetter, no crypto experience required.",
        },
      ],
    },

    business: {
      title: "Why Frequency Chain for Businesses?",
      cards: [
        {
          img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
          title: "Verify ESG Impact",
          desc: "Prove sustainability efforts with transparent and immutable data.",
        },
        {
          img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
          title: "Improve Brand Trust",
          desc: "Build credibility with customers, investors, and regulators.",
        },
        {
          img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
          title: "Engage Users at Scale",
          desc: "Incentivize participation through measurable and rewarding programs.",
        },
        {
          img: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
          title: "Enterprise-Ready Infrastructure",
          desc: "Scalable, secure, and compliant systems designed for businesses.",
        },
      ],
    },
  };

  const data = content[activeTab];

  return (
    <section className="py-5">
      <div className="container">

        {/* TITLE (SCROLL FADE) */}
        <motion.h2
          className="fw-bold mb-4"
          style={{ color: theme === "dark" ? "#fff" : "#111" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {data.title}
        </motion.h2>

        {/* TABS */}
        <div className="d-flex gap-2 mb-4">
          <button
            className={`btn rounded-pill px-4 ${
              activeTab === "individual" ? "btn-dark" : "btn-light"
            }`}
            onClick={() => setActiveTab("individual")}
          >
            For Individuals
          </button>

          <button
            className={`btn rounded-pill px-4 ${
              activeTab === "business" ? "btn-dark" : "btn-light"
            }`}
            onClick={() => setActiveTab("business")}
          >
            For Businesses
          </button>
        </div>

        {/* CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ willChange: "transform, opacity" }}
          >
            {/* ROW 1 */}
            <div className="row g-4">
              <motion.div className="col-lg-6" variants={fadeUp}>
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <img src={data.cards[0].img} className="w-100" style={{ height: 240, objectFit: "cover" }} />
                  <div className="p-4">
                    <h5 style={{ color: theme === "dark" ? "#fff" : "#111", fontSize: "18px" }}>
                      {data.cards[0].title}
                    </h5>
                    <p style={{ color: theme === "dark" ? "#a79e9e" : "#111", fontSize: "13px" }}>
                      {data.cards[0].desc}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="col-lg-6" variants={fadeUp}>
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-lg-row flex-column">
                  <div className="p-4 flex-grow-1">
                    <h4 style={{ color: theme === "dark" ? "#fff" : "#111", fontSize: "18px" }}>
                      {data.cards[1].title}
                    </h4>
                    <p style={{ color: theme === "dark" ? "#a79e9e" : "#111", fontSize: "13px" }}>
                      {data.cards[1].desc}
                    </p>
                  </div>
                  <img src={data.cards[1].img} className="w-100" style={{ height: 240, objectFit: "cover" }} />
                </div>
              </motion.div>
            </div>

            {/* ROW 2 */}
            <div className="row g-4 mt-2">
              <motion.div className="col-lg-6" variants={fadeUp}>
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-lg-row flex-column">
                  <img src={data.cards[2].img} className="w-100" style={{ height: 240, objectFit: "cover" }} />
                  <div className="p-4 flex-grow-1">
                    <h4 style={{ color: theme === "dark" ? "#fff" : "#111", fontSize: "18px" }}>
                      {data.cards[2].title}
                    </h4>
                    <p style={{ color: theme === "dark" ? "#a79e9e" : "#111", fontSize: "13px" }}>
                      {data.cards[2].desc}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="col-lg-6 row2-move-up" variants={fadeUp}>
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <img src={data.cards[3].img} className="w-100" style={{ height: 240, objectFit: "cover" }} />
                  <div className="p-4">
                    <h4 style={{ color: theme === "dark" ? "#fff" : "#111", fontSize: "18px" }}>
                      {data.cards[3].title}
                    </h4>
                    <p style={{ color: theme === "dark" ? "#a79e9e" : "#111", fontSize: "13px" }}>
                      {data.cards[3].desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Individuals;
