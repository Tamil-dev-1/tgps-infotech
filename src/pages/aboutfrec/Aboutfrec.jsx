import React, { useContext } from "react";
import Individuals from '../../component/aboutFrecX/Individuals';
import { ThemeContext } from "../../ThemeContext";
import { motion } from "framer-motion";
import { PiPlantFill } from "react-icons/pi";




const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,   // timeline spacing
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};


//  section-4 animations code

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 80, scale: 1.1 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



// Product section framer animation


const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 }, // slightly more drop
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,       // slower fade
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.3,      // stagger each card individually
    },
  }),
};

 
const Aboutfrec = () => {
  // ✅ Get theme from context
  const { theme } = useContext(ThemeContext);

  // Features array
  const features = [
    { icon: "↕️", bg: "#E6F8E9", title: "Scalable", desc: "Over 530 million transactions with 100% uptime since 2017." },
    { icon: "🛡️", bg: "#EFEAFF", title: "Secure", desc: "350+ applications built on FrequencyChain." },
    { icon: "⚡", bg: "#F3FCE2", title: "Fast", desc: "Trusted by leading global brands." },
    { icon: "💲", bg: "#E4FAF5", title: "Compliant", desc: "Aligned with global standards and regulatory requirements." },
    { icon: "💜", bg: "#F3E9FF", title: "Purpose-led", desc: "Designed to measure and reward real-world impact." },
  ];

  // Items array
  const items = [
    { title: "Product-1", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: "https://images.pexels.com/photos/7598019/pexels-photo-7598019.jpeg" },
    { title: "Product-2", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg" },
    { title: "Product-3", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: "https://media.istockphoto.com/id/1182604339/photo/businessman-using-mobile-smartphone-and-icon-network-connection-data-with-growth-graph.jpg?s=1024x1024&w=is&k=20&c=FB3_j4N9bKv3GOxtOBr3FMP-5p6uakJukmvP3bpvkeM=" },
    
   
    
  ];

  return (
    <div>

      {/* ====== SECTION 1: Hero ====== */}
      <motion.section
  className="py-5"
  style={{
    background: theme === "dark" ? "#000000" : "#FADAEB",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.6, ease: "easeInOut" }}
>
  <div className="container">
    <div className="row align-items-center justify-content-between">

      {/* LEFT SIDE TEXT */}
      <motion.div
        className="col-lg-5 col-md-6 col-12 mb-5 mb-md-0"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <h1 className="fw-bold mb-3">
          Lorem, ipsum.{" "}
          <span
            style={{
              // background: theme === "dark" ? "#1a2033" : "#1f1f1f",
              // padding: "6px 12px",
              // borderRadius: "50px",
              // fontSize: "22px",
            }}
          >
            {/* 🌱 */}<PiPlantFill className="text-success" size={43} />
          </span>
        </h1>

        <p className={theme === "dark" ? "text-white-50" : "text-dark-50"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit.
        </p>

        <p className={theme === "dark" ? "text-white-50" : "text-dark-50"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum!
        </p>
      </motion.div>

      {/* RIGHT SIDE IMAGES */}
      <motion.div
        className="col-lg-5 col-md-6 col-12 d-flex justify-content-center position-relative"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="people"
          className="img-fluid"
          style={{
            width: "260px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "20px",
            zIndex: 3,
          }}
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="forest"
          className="img-fluid d-none d-md-block"
          style={{
            width: "220px",
            height: "260px",
            objectFit: "cover",
            borderRadius: "20px",
            position: "absolute",
            bottom: "-30px",
            right: "-40px",
            zIndex: 1,
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Decorative shapes – subtle fade */}
        <motion.div
          className="d-none d-md-block"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "4px solid #a3ff75",
            position: "absolute",
            top: "20px",
            right: "-30px",
            borderTop: "none",
            borderLeft: "none",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        />

        <motion.div
          className="d-none d-md-block"
          style={{
            width: "60px",
            height: "60px",
            borderLeft: "3px solid #8bc6ff",
            borderBottom: "3px solid #8bc6ff",
            position: "absolute",
            bottom: "10px",
            left: "-20px",
            transform: "rotate(20deg)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
      </motion.div>

    </div>
  </div>
</motion.section>


      {/* ====== SECTION 2: Features ====== */}
      <motion.section
  className=""
  data-theme={theme}
  style={{
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-120px" }}
>
  <div className="container" style={{ paddingTop: "200px", paddingBottom: "100px" }}>
    <motion.div
      className="row text-center justify-content-between"
      variants={containerVariants}
    >
      {features.map((item, index) => (
        <motion.div
          key={index}
          className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4"
          variants={itemVariants}
        >
          <motion.div
            className="d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: item.bg,
              fontSize: "26px",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {item.icon}
          </motion.div>

          <h5 className="fw-semibold mb-2">{item.title}</h5>

          <p style={{ fontSize: "14px", opacity: 0.85 }}>
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>


      {/* ====== SECTION 3: Individuals Component ====== */}
      <Individuals title="For Individuals" theme={theme} />

      {/* ====== SECTION 4 ====== */}
 <section
      className="py-5"
      style={{
        background: theme === "dark" ? "#000000" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#111111",
        transition: "0.3s",
      }}
    >
      <div className="container">

        {/* TITLE */}
        <motion.h2
        style={{color: theme === "dark" ? "#ffffff" : "#111111",}}
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Frequency Chain?
        </motion.h2>

        {/* ROW 1 */}
        <motion.div
          className="row g-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* CARD */}
          <div className="col-lg-4">
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.04, rotateX: 4, rotateY: -4 }}
              className="p-3 rounded-4 h-100 mx-auto"
              style={{
                background: theme === "dark" ? "#151A2D" : "#ffffff",
                maxWidth: "95%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 className="fw-bold text-center" style={{ fontSize: "18px" }}>
                Prove Your Impact with Confidence
              </h4>
              <p className="text-center" style={{ fontSize: "13px", color: "#a79e9e" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </motion.div>
          </div>

          {/* IMAGE */}
          <div className="col-lg-4">
            <motion.div
              variants={imageVariant}
              className="rounded-4 overflow-hidden mx-auto"
              style={{ maxWidth: "95%" }}
            >
              <img
                src="https://images.pexels.com/photos/7651627/pexels-photo-7651627.jpeg"
                alt=""
                className="img-fluid w-100"
                style={{ height: "260px", objectFit: "cover" }}
              />
            </motion.div>
          </div>

          {/* CARD */}
          <div className="col-lg-4">
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.04, rotateX: -4, rotateY: 4 }}
              className="p-3 rounded-4 h-100 mx-auto"
              style={{
                background: theme === "dark" ? "#151A2D" : "#ffffff",
                maxWidth: "95%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 className="fw-bold" style={{ fontSize: "18px" }}>
                Compliance & Confidence
              </h4>
              <p className="text-center" style={{ fontSize: "13px", color: "#a79e9e" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ROW 2 */}
        <motion.div
          className="row g-4 mt-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* IMAGE */}
          <div className="col-lg-4">
            <motion.div
              variants={imageVariant}
              className="rounded-4 overflow-hidden mx-auto"
              style={{ maxWidth: "95%" }}
            >
              <img
                src="https://images.pexels.com/photos/7651803/pexels-photo-7651803.jpeg"
                alt=""
                className="img-fluid w-100"
                style={{ height: "260px", objectFit: "cover" }}
              />
            </motion.div>
          </div>

          {/* CARD */}
          <div className="col-lg-4">
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.04 }}
              className="p-3 rounded-4 h-100 mx-auto"
              style={{
                background: theme === "dark" ? "#151A2D" : "#ffffff",
                maxWidth: "95%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 className="fw-bold" style={{ fontSize: "18px" }}>
                ESG Tracking
              </h4>
              <p className="text-center" style={{ fontSize: "13px", color: "#a79e9e" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </motion.div>
          </div>

          {/* IMAGE */}
          <div className="col-lg-4">
            <motion.div
              variants={imageVariant}
              className="rounded-4 overflow-hidden mx-auto"
              style={{ maxWidth: "95%" }}
            >
              <img
                src="https://images.pexels.com/photos/7688455/pexels-photo-7688455.jpeg"
                alt=""
                className="img-fluid w-100"
                style={{ height: "260px", objectFit: "cover" }}
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>


      {/* ====== SECTION 5: Products ====== */}
      <section
  className="py-5"
  style={{
    background: theme === "dark" ? "#000000" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
>
  <div className="container">
    {/* Section Title */}
    <h2
      className="fw-bold mb-4 text-center"
      style={{ color: theme === "dark" ? "#ffffff" : "#111111" }}
    >
      Our Products
    </h2>

    {/* Animated Cards Container */}
    <motion.div
      className="row g-4"
      variants={containerVariants}  // parent container variants
      initial="hidden"
      animate="show"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="col-lg-4 col-md-6"
          variants={fadeUpVariant}
          custom={index}  // individual card fade-up
        >
          <div
            className="rounded-4 shadow-sm overflow-hidden h-100"
            style={{
              background: theme === "dark" ? "#151A2D" : "#ffffff",
              color: theme === "dark" ? "#ffffff" : "#111111",
            }}
          >
            <img
              src={item.img}
              className="w-100"
              style={{ height: "200px", objectFit: "cover" }}
              alt={item.title}
            />
            <div className="p-4">
              <h5 className="fw-bold">{item.title}</h5>
              <p className="mb-0">{item.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


    </div>
  );
};

export default Aboutfrec;
