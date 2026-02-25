import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const EventDetail = () => {
  return (
    <div className="bg-dark text-light min-vh-100">

      {/* Hero */}
      <motion.section
        className="py-5 text-center border-bottom border-secondary"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h1 className="fw-bold">FrequencyChain Hackathon 2026</h1>
          <p className="lead mt-3 text-secondary">
            Build next-gen blockchain solutions with Web3 innovators
          </p>
          <button className="btn btn-primary btn-lg mt-3 px-4">
            Register Now
          </button>
        </div>
      </motion.section>

      {/* Event Info */}
      <div className="container py-5">
        <div className="row g-4">

          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card bg-black border-secondary h-100">
              <div className="card-body">
                <h5>Date</h5>
                <p className="text-secondary">April 20, 2026</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: 0, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="card bg-black border-secondary h-100">
              <div className="card-body">
                <h5>Location</h5>
                <p className="text-secondary">Online + Chennai Hub</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="card bg-black border-secondary h-100">
              <div className="card-body">
                <h5>Prize Pool</h5>
                <p className="text-secondary">$25,000</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* About Section */}
      <motion.section
        className="container pb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="row">
          <div className="col-lg-8">
            <h3 className="fw-bold mb-3">About This Event</h3>
            <p className="text-secondary">
              FrequencyChain Hackathon is a global blockchain innovation event
              where developers, designers, and Web3 builders collaborate to
              create decentralized applications, smart contracts, and DeFi tools.
              Participants will receive mentorship, resources, and live judging.
            </p>

            <p className="text-secondary">
              Teams can build across DeFi, NFT infra, Layer-2 scaling,
              cross-chain bridges, and enterprise blockchain solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Speakers */}
      <section className="container pb-5">
        <h3 className="fw-bold mb-4">Key Speakers</h3>

        <div className="row g-4">
          {["Web3 Architect", "DeFi Researcher", "Security Lead"].map(
            (role, i) => (
              <motion.div
                key={i}
                className="col-md-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
              >
                <div className="card bg-black border-secondary text-center h-100">
                  <div className="card-body">
                    <div
                      className="rounded-circle bg-secondary mx-auto mb-3"
                      style={{ width: 80, height: 80 }}
                    />
                    <h5>Speaker {i + 1}</h5>
                    <p className="text-secondary">{role}</p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-5 text-center border-top border-secondary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="container">
          <h3 className="fw-bold">Ready to Build on Blockchain?</h3>
          <button className="btn btn-outline-primary btn-lg mt-3 px-5">
            Join FrequencyChain Event
          </button>
        </div>
      </motion.section>

    </div>
  );
};

export default EventDetail;
