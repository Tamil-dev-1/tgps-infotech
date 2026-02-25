import "./Event.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"
export default function Events() {
  const { theme } = useContext(ThemeContext);

  const events = [
    {
      banner: "https://images.pexels.com/photos/3689547/pexels-photo-3689547.jpeg",
      title: "Frec Riyadh",
      date: "February 1–28, 2026",
      location: "RIYADH, KSA",
      badge: "View on YouTube →", 
      bigText: "Lorem ",
    },
    {
      banner: "https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg",
      title: "FrecConf",
      date: "June 8–10, 2026",
      location: "NEW YORK, USA",
      badge: "Get Tickets",
      bigText: "Lorem",
    },

    {
      banner: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
      title: "FrecConf",
      date: "June 8–10, 2026",
      location: "NEW YORK, USA",
      badge: "Get Tickets",
      bigText: "Lorem",
    },
  ];

  /* Animation Variants */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="events-section py-5">
      <div className="container">
        {/* Heading */}
        <motion.h1
          className="fw-bold hero-title mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Events
        </motion.h1>

        <motion.p
          className="events-desc mb-5"
          style={{ color: theme === "dark" ? "#fff" : "#877979ff" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          asperiores.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="row g-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {events.map((item, i) => (
            <motion.div
              className="col-lg-4"
              key={i}
              variants={card}
            >
              <motion.div
                className="event-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="event-banner"
                  style={{ backgroundImage: `url(${item.banner})` }}
                >
                  <div className="event-overlay">
                    <motion.h3
                      className="event-bigtext"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.bigText}
                    </motion.h3>

                    <motion.button
                      className="event-badge"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.badge}
                    </motion.button>
                  </div>
                </div>

                <h4
                  className="fw-bold mt-3"
                  style={{ color: theme === "dark" ? "#fff" : "#231d1dff" }}
                >
                  {item.title}
                </h4>

                <p
                  className="fst-italic mb-1"
                  style={{ color: theme === "dark" ? "#ccc" : "#867777ff" }}
                >
                  {item.date}
                </p>

                <small className="text-uppercase text-secondary fw-semibold">
                  {item.location}
                </small>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/all-events">
          <motion.button
           style={{
            background: theme === "dark" ? "#fff" : "#000",
            color: theme === "dark" ? "#000" : "#ffff",
            transition: "0.3s",
          }}
            className="btn events-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See all events →
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
