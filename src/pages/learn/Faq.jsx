import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Faq.css";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";


const faqs = [
  {
    q: "What is Frequency Chain?",
    a: "Frequency Chain is a high-performance blockchain designed for decentralized apps, identity systems, and scalable Web3 solutions."
  },
  {
    q: "How do I start developing?",
    a: "Install the SDK, explore API docs, and start building with our developer tools."
  },
  {
    q: "Is Frequency open source?",
    a: "Yes, the core, SDKs, and APIs are fully open source on GitHub."
  },
  {
    q: "How do I get support?",
    a: "Join Discord, raise GitHub issues, or contact support directly."
  },
  {
    q: "Is it enterprise ready?",
    a: "Yes. Built for high throughput, security, and enterprise scalability."
  }
];

export default function FAQPage() {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="faq-hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Everything you need to know about Frequency Chain.
        </motion.p>
      </section>

      {/* STATS */}
      <section className="stats-section ">
        {[
          ["10k+", "Developers"],
          ["99.99%", "Uptime"],
          ["1M+", "Transactions"],
          ["50+", "Partners"]
        ].map((item, i) => (
          <motion.div
            key={i}
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{item[0]}</h2>
            <p  style={{
    color: theme === "dark" ? "#fff" : "#fff",
    transition: "0.3s",
  }}>{item[1]}</p>
          </motion.div>
        ))}
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              className="faq-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActive(active === index ? null : index)}
            >
              <div className="faq-question">
                <h5>{item.q}</h5>
                <motion.span
                  animate={{ rotate: active === index ? 45 : 0 }}
                >
                  +
                </motion.span>
              </div>

              <motion.div
                className="faq-answer"
                initial={false}
                animate={{
                  height: active === index ? "auto" : 0,
                  opacity: active === index ? 1 : 0
                }}
                transition={{ duration: 0.35 }}
              >
                <p>{item.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEV CTA */}
      <section className="dev-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            color: theme === "dark" ? "#fff" : "fff",
            transition: "0.3s",
          }}>Build on Frequency</h2>
          <p>Start building secure, scalable Web3 applications today.</p>
          <Link to='/doc'>
          <button>View Documentation →</button>
          </Link>
        </motion.div>
      </section>

      {/* RESOURCES */}
      <section className="resource-section">
        <h2 style={{
    color: theme === "dark" ? "#fff" : "#000",
    transition: "0.3s",
  }}>Resources</h2>

        <div className="resource-grid">
          {["Documentation", "GitHub", "Discord", "API Reference"].map(
            (res, i) => (
              <motion.div
                key={i}
                className="resource-card"
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span style={{
                  color: theme === "dark" ? "#fff" : "#fff",
                  transition: "0.3s",
                }}>{res}</span>
              </motion.div>
            )
          )}
        </div>
      </section>
    </>
  );
}
