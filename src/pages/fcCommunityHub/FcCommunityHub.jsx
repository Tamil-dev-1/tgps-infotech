import React from "react";

import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Img1 from '../../assets/images/home/demo.webp';
import Img2 from '../../assets/images/home/demo2.webp';
import Img3 from '../../assets/images/home/demo3.webp';
import Img4 from '../../assets/images/home/demo4.webp';
import CommunityHub from '../../assets/images/hub/hubBG.png'
import ComHub from '../../assets/images/hub/cumImg.png'
 import { motion } from "framer-motion";

 // Framer variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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


// animation variants
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// animation variants
const containerVariantss = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const CommunityHeroSection = () => {
     const {theme} = useContext(ThemeContext);
  return (
    <>
   

<section className="container-fluid p-0">
  {/* HERO WRAPPER */}
  <div className="position-relative">

    {/* Background Image */}
    <img
      src={CommunityHub}
      alt="Community Hero"
      className="w-100"
      style={{ height: "500px", objectFit: "cover" }}
    />

    {/* Overlay Card — Framer Motion Fade From Left */}
    <motion.div
      className="position-absolute rounded"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        top: "90px",
        left: "80px",
        maxWidth: "520px",
      }}
    >
      <div
        className="p-4 p-md-5 shadow rounded"
        style={{
          backdropFilter: "blur(6px)",
          background:
            theme === "dark"
              ? "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 47%, rgba(33, 60, 81, 1) 100%)"
              : "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
          transition: "0.3s",
        }}
      >
        <p
          className="text-uppercase mb-3"
          style={{
            letterSpacing: "1px",
            color: "#ffffff",
            transition: "0.3s",
          }}
        >
          Join the community
        </p>

        <h2
          className="fw-bold mb-3"
          style={{
            color: "#ffffff",
            transition: "0.3s",
          }}
        >
          Welcome to the FrequencyChain community hub
        </h2>

        <p
          className="mb-0"
          style={{
            color: "#BFC9D1",
            transition: "0.3s",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          magnam doloribus accusantium quam nesciunt hic quisquam enim
          consequatur distinctio voluptatem Lorem ipsum dolor sit amet
          consectetur adipisicing.
        </p>
      </div>
    </motion.div>

    {/* Floating Help Button */}
    <div
      className="position-absolute"
      style={{ right: "24px", bottom: "24px" }}
    >
      {/* <button className="btn btn-primary rounded-pill shadow px-4 py-2">
        👍 Is this page helpful?
      </button> */}
    </div>

  </div>
</section>


    {/* SECTION ---- 2 */}

    {/* style={{ background: "#f5f6f7" }} */}

    <section className="py-5">
  <div className="container">

    {/* Title */}
    <div className="text-center mb-5">
      <h2
        className="fw-bold"
        style={{
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
      >
        Why get involved?
      </h2>
    </div>

    {/* Cards Row with stagger */}
    <motion.div
      className="row g-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

      {/* Card 1 */}
      <div className="col-lg-4">
        <motion.div
          variants={cardVariants}
          className="border rounded p-4 h-100"
          style={{
            background: theme === "dark" ? "#001F3D" : "#ffff",
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          <div className="mb-3 fs-2">🧙‍♂️</div>
          <h4
            className="fw-bold mb-3"
            style={{
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            Find your tribe
          </h4>
          <p
            className="mb-0"
            style={{
              color: theme === "dark" ? "#BFC9D1" : "#576A8F",
              transition: "0.3s",
            }}
          >
            There is a tribe for everyone. Find and connect with like minded
            individuals to discuss, ponder, and celebrate FrequencyChain
            together.
          </p>
        </motion.div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-4">
        <motion.div
          variants={cardVariants}
          className="border rounded p-4 h-100"
          style={{
            background: theme === "dark" ? "#001F3D" : "#ffff",
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          <div className="mb-3 fs-2">💵</div>
          <h4
            className="fw-bold mb-3"
            style={{
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            Earn a living
          </h4>
          <p
            className="mb-0"
            style={{
              color: theme === "dark" ? "#BFC9D1" : "#576A8F",
              transition: "0.3s",
            }}
          >
            Everyone has bills to pay. FrequencyChain allows you to find
            meaningful work, and get paid well to do it.
          </p>
        </motion.div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-4">
        <motion.div
          variants={cardVariants}
          className="border rounded p-4 h-100"
          style={{
            background: theme === "dark" ? "#001F3D" : "#ffff",
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          <div className="mb-3 fs-2">💥</div>
          <h4
            className="fw-bold mb-3"
            style={{
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            Make a difference
          </h4>
          <p
            className="mb-0"
            style={{
              color: theme === "dark" ? "#BFC9D1" : "#576A8F",
              transition: "0.3s",
            }}
          >
            Getting involved with FrequencyChain allows you to be an active
            stakeholder in a technology that is having a positive impact on
            millions of people.
          </p>
        </motion.div>
      </div>

    </motion.div>
  </div>
</section>

    {/* SECTION ----- 3 */}

    <section className="py-5">
  <div className="container">

    {/* ===== Top Intro Row ===== */}
    <div className="row align-items-center mb-5">

      {/* Left Text */}
      <motion.div
        className="col-lg-6"
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className="fw-bold mb-3"
          style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          How can I get involved?
        </h2>

        <p
          style={{
            color: theme === "dark" ? "#BFC9D1" : "#111111",
            transition: "0.3s",
          }}
        >
          There are many ways to get involved in the fast-growing
          FrequencyChain community; you can join one of the popular online
          communities, attend an event, join a meetup group, contribute to
          a project, or participate in forums.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="col-lg-6 text-lg-end mt-4 mt-lg-0"
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={ComHub}
          alt="Get involved"
          className="img-fluid"
          style={{ maxHeight: "260px" }}
        />
      </motion.div>

    </div>

    {/* ===== Cards Grid ===== */}
    <div className="row g-4 mt-5">

      {/* Card 1 — Left */}
      <div className="col-lg-6">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-4 shadow-sm h-100 d-flex"
        >
          <div
            className="p-4 d-flex align-items-center justify-content-center rounded-4"
            style={{ width: "180px", background: "#e9eef1" }}
          >
            <img src={Img1} alt="" className="img-fluid" />
          </div>

          <div
            className="p-4 rounded-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            <h5 className="fw-bold">Join an online community</h5>
            <p
              className="mb-0 small"
              style={{
                color: theme === "dark" ? "#BFC9D1" : "#576A8F",
                transition: "0.3s",
              }}
            >
              Find your tribe and participate in community with other
              FrequencyChain enthusiasts.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Card 2 — Right */}
      <div className="col-lg-6">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-4 shadow-sm h-100 d-flex"
        >
          <div
            className="p-4 d-flex align-items-center justify-content-center rounded-4"
            style={{ width: "180px", background: "#e9eef1" }}
          >
            <img src={Img2} alt="" className="img-fluid" />
          </div>

          <div
            className="p-4 rounded-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            <h5 className="fw-bold">FrequencyChain events</h5>
            <p
              className="mb-0 small"
              style={{
                color: theme === "dark" ? "#BFC9D1" : "#576A8F",
                transition: "0.3s",
              }}
            >
              Find and participate in conferences, hackathons, and meetups.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Card 3 — Left */}
      <div className="col-lg-6">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-5 shadow-sm h-100 d-flex"
        >
          <div
            className="p-4 d-flex align-items-center justify-content-center rounded-4"
            style={{ width: "180px", background: "#e9eef1" }}
          >
            <img src={Img3} alt="" className="img-fluid" />
          </div>

          <div
            className="p-4 rounded-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            <h5 className="fw-bold">Contribute to a project</h5>
            <p
              className="mb-0 small"
              style={{
                color: theme === "dark" ? "#BFC9D1" : "#576A8F",
                transition: "0.3s",
              }}
            >
              Use your skills and professional background to contribute to
              open projects.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Card 4 — Right */}
      <div className="col-lg-6">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-4 shadow-sm h-100 d-flex"
        >
          <div
            className="p-4 d-flex align-items-center justify-content-center rounded-4"
            style={{ width: "180px", background: "#e9eef1" }}
          >
            <img src={Img4} alt="" className="img-fluid" />
          </div>

          <div
            className="p-4 rounded-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            <h5 className="fw-bold">Search for grants</h5>
            <p className="text-secondary mb-0 small">
              Funding grants are available to help you get a project off
              the ground.
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  </div>
</section>

    {/* SECTION -----4 */}

     <section className="py-5">
  <div className="container">

    {/* Title */}
    <motion.h3
      className="fw-bold mb-4"
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      Try FrequencyChain for yourself
    </motion.h3>

    {/* Cards Row — stagger parent */}
    <motion.div
      className="row g-4 mb-5"
      variants={containerVariantss}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

      {/* Card 1 */}
      <div className="col-md-6">
        <motion.div
          variants={itemVariants}
          className="p-4 rounded-4 h-100 position-relative"
          style={{
            background:
              theme === "dark"
                ? "#001F3D"
                : "linear-gradient(180deg,#cfd8e3,#b9d7cf)",
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          <div className="text-center mb-3">
            <img
              src="/eth-card.png"
              alt=""
              style={{ height: "110px", objectFit: "contain" }}
            />
          </div>

          <h5 className="fw-bold">Get some ETH</h5>

          <p
            style={{
              color: theme === "dark" ? "#BFC9D1" : "#576A8F",
              transition: "0.3s",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tempore quam suscipit quidem laudantium qui iusto.
          </p>

          <button className="btn btn-primary">
            Get FrecX
          </button>
        </motion.div>
      </div>

      {/* Card 2 */}
      <div className="col-md-6">
        <motion.div
          variants={itemVariants}
          className="p-4 rounded-4 h-100"
          style={{
            background:
              theme === "dark"
                ? "#001F3D"
                : "linear-gradient(180deg,#cfd8e3,#b9d7cf)",
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          <div className="text-center mb-3">
            <img
              src="/dapp-card.png"
              alt=""
              style={{ height: "110px", objectFit: "contain" }}
            />
          </div>

          <h5 className="fw-bold">Try some dapps</h5>

          <p
            style={{
              color: theme === "dark" ? "#BFC9D1" : "#576A8F",
              transition: "0.3s",
            }}
          >
            Dapps are applications built on FrequencyChain. Dapps are
            disrupting current business models and inventing new ones.
          </p>

          <button className="btn btn-primary">
            Explore dapps
          </button>
        </motion.div>
      </div>

    </motion.div>

  </div>
</section>
    </>
  );
};

export default CommunityHeroSection;
