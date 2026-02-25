import React from "react";
import { motion } from "framer-motion";
import fcoin from '../../assets/images/herocoin/logocoins.png';

export default function EcosystemHero({ theme = "light" }) {
  const bubbleBase = {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: "50%",
    background: theme === "dark" ? "#111" : "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    zIndex: 1,
  };

  const Float = ({ children, style, duration = 8, delay = 0 }) => (
    <motion.div
      style={{ ...bubbleBase, ...style }}
      animate={{
        y: [0, -25, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="d-none d-md-flex"
    >
      {children}
    </motion.div>
  );

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{
        background: theme === "dark" ? "#000" : "#f8f9fa",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* FLOATING LOGOS */}
      <Float style={{ top: "12%", left: "8%" }} duration={7}>
        <img src={fcoin} width={60} alt="" />
      </Float>

      <Float style={{ top: "18%", right: "10%" }} duration={9} delay={0.3}>
        <img src={fcoin} width={40} alt="" />
      </Float>

      <Float style={{ bottom: "20%", left: "12%" }} duration={6}>
        <img src={fcoin} width={70} alt="" />
      </Float>

      <Float style={{ bottom: "15%", right: "14%" }} duration={8} delay={0.5}>
        <img src={fcoin} width={100} alt="" />
      </Float>

      <Float style={{ top: "35%", left: "20%" }} duration={10}>
        <img src={fcoin} width={75} alt="" />
      </Float>

      <Float style={{ top: "40%", right: "22%" }} duration={7}>
        <img src={fcoin} width={85} alt="" />
      </Float>

      {/* CENTER CONTENT */}
      <div className="container text-center position-relative" style={{ zIndex: 2 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2"
          style={{ color: theme === "dark" ? "#aaa" : "#666" }}
        >
          Our Governance
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="fw-semibold mb-3"
          style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)" }}
        >
          Have your say  on the future <br />  of FrequencyChain
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-4"
          style={{
            maxWidth: 640,
            color: theme === "dark" ? "#b5b5b5" : "#6c757d",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur vitae possimus animi tempore voluptas ullam labore placeat perspiciatis alias libero.
        </motion.p>

        {/* <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="btn px-5 py-3 rounded-pill fw-semibold"
          style={{
            background: "#8BE28B",
            border: "none",
            fontSize: "1.05rem",
          }}
        >
          Explore the Governance
        </motion.button> */}
      </div>
    </section>
  );
}
