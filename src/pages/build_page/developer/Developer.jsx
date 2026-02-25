import React from "react";
import { motion } from "framer-motion";
import "./Developer.css";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";


export default function Developer() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      {/* HERO */}
      <section className="dev-hero">
        <div className="dev-hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="dev-badge">Developer Platform</span>
            <h1>
              Build on <span>Frequency Chain</span>
            </h1>
            <p>
              Production-ready blockchain infrastructure with APIs, SDKs and
              tools for modern Web3 developers.
            </p>

            <div className="dev-actions">
              <button className="primary-btn">Read Docs</button>
              <button className="secondary-btn">GitHub</button>
            </div>
          </motion.div>

          {/* TERMINAL */}
          <motion.div
            className="terminal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <pre>
{`// connect
import { Frequency } from "frequency-sdk"

const freq = new Frequency()

// deploy
freq.deploy(contract)

// query
freq.getBlock()`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* BUILD FLOW */}
      <section className="build-flow">
        <h2 style={{
    color: theme === "dark" ? "#fff" : "#000",
    transition: "0.3s",
  }}>How Developers Build</h2>

        <div className="flow-grid">
          {[
            ["01", "Connect", "SDK / RPC"],
            ["02", "Develop", "Smart Contracts"],
            ["03", "Deploy", "CLI Tools"],
            ["04", "Scale", "Mainnet Infra"],
          ].map((step, i) => (
            <motion.div
              key={i}
              className="flow-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <span>{step[0]}</span>
              <h4 style={{
    color: theme === "dark" ? "#fff" : "#fff",
    transition: "0.3s",
  }}>{step[1]}</h4>
              <p style={{
    color: theme === "dark" ? "#fff" : "#fff",
    transition: "0.3s",
  }}>{step[2]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* API PLAYGROUND */}
      <section className="api-playground">
        <motion.div
          className="api-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{
    color: theme === "dark" ? "#fff" : "#fff",
    transition: "0.3s",
  }}>Live API Playground</h2>
          <p>Interact with Frequency Chain RPC</p>

          <pre>
{`POST https://rpc.frequencychain.io

{
  "jsonrpc": "2.0",
  "method": "chain_getBlock",
  "params": [],
  "id": 1
}`}
          </pre>

          <button className="primary-btn">Try Request →</button>
        </motion.div>
      </section>

      {/* ✅ NEW SECTION : USE CASES */}
      <section className="dev-usecases">
        <h2 style={{
    color: theme === "dark" ? "#fff" : "#000",
    transition: "0.3s",
  }}>What You Can Build</h2>

        <div className="usecase-grid">
          {[
            "DeFi Applications",
            "NFT Marketplaces",
            "Decentralized Identity",
            "Gaming & Metaverse",
            "Enterprise Blockchain Apps",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="usecase-card"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="dev-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Start Building Today</h2>
          <p>Everything you need to build scalable Web3 apps.</p>
          <button className="primary-btn">Get Started →</button>
        </motion.div>
      </section>
    </>
  );
}
