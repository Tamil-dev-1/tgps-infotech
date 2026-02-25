import "./Activity.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="">
      <div className="hero-container">

        {/* TOP SECTION */}
        <motion.div
          className="hero-top single"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >

          {/* CENTER CONTENT */}
          <motion.div
            className="hero-left center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              The Strongest Ecosystem
            </motion.h1>

            <motion.p
              className="hero-desc"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              Activity From the all frecX network
            </motion.p>

            {/* <motion.button
              className="btn events-cta small"
              style={{
                background: theme === "dark" ? "#fff" : "#000",
                color: theme === "dark" ? "#000" : "#ffff",
                transition: "0.3s",
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enterprise FrecX
            </motion.button> */}
          </motion.div>

        </motion.div>

        {/* EXPLORE ROW */}
        <div className="explore-row center"></div>

        {/* BOTTOM CARDS (PARALLAX DEPTH) */}
        <motion.div
          className="hero-cards"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.18 },
            },
          }}
        >

          {/* CARD 1 */}
          <motion.div
            className="hero-card horizontal"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <div className="icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M6 3v18M18 6v15M3 6h6M15 3h6"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="card-content">
              <h4>$147B</h4>
              <p>Value locked in DeFi</p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="hero-card horizontal"
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <div className="icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16M14 6l6 6-6 6"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="card-content">
              <h4>$114.3B</h4>
              <p>Value protecting FrecX</p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            className="hero-card horizontal"
            variants={{
              hidden: { opacity: 0, y: 70 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <div className="icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M21 12a9 9 0 1 1-2.64-6.36"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M21 3v6h-6"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="card-content">
              <h4>$0.0018</h4>
              <p>Average transaction cost</p>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            className="hero-card horizontal"
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <div className="icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16M8 6v12M16 6v12"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="card-content">
              <h4>19.92M</h4>
              <p>Transactions in the last 24h</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
