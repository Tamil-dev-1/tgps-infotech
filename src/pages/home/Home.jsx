
import Hero from '../../component/hero/Hero'
import ComparisonSlider from '../../component/slider/ComparisonSlider';
import Blog from '../../component/blog/Blog';
import Core_Features from '../../component/core_features/Core_Features'
import Slider from '../../component/new_slider/Slider'
import './Home.css';
import Events from '../../component/event/Events';
import Demo from '../../assets/images/home/demo.png'
import Demo2 from '../../assets/images/home/demo2.png'
import Demo3 from '../../assets/images/home/demo3.png'
import Demo4 from '../../assets/images/home/demo4.png'
import Demo5 from '../../assets/images/home/demo5.png'
import X from '..//..//assets/images/home/x.webp'
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Activity from '../../component/Activity/Activity';
import VectorImg1 from '../../assets/images/home/vector2.jpeg';
import VectorImg2 from '../../assets/images/home/vector3.jpeg';
import { Link} from 'react-router-dom';
// react - icons
import { FaPlay } from "react-icons/fa";
import { FaLaptopCode, FaCloud, FaShieldAlt, FaDatabase } from "react-icons/fa";
import { FaSearch, FaPuzzlePiece, FaLightbulb, FaCogs } from "react-icons/fa";

// IMAGES
import Img1 from '../../assets/images/Ourservices/1.png'
import Img2 from '../../assets/images/Ourservices/2.png'
import Img3 from '../../assets/images/Ourservices/3.png'
import Img4 from '../../assets/images/Ourservices/4.png'

import { motion } from "framer-motion";
import Testimonial from '../../component/Testimonial/Testimonial';
// import ScrollBoxes from "../../component/ScrollBoxes/ScrollBoxes";
export default function Home() {

 const {theme} = useContext(ThemeContext);

    const imgStyle = {
    width: "100%",
    maxWidth: "150px",
    height: "auto",
  };

  // OUR SERVICE SECTION

  const services = [
  {
    title: "Cloud Services",
    desc: "Easy mind life fact with see Chatty can elinor direct for former. Up as meant.",
    img: Img1
  },
  {
    title: "Risk Management",
    desc: "Easy mind life fact with see Chatty can elinor direct for former. Up as meant.",
    img: Img2
  },
  {
    title: "Infrastructure Plan",
    desc: "Easy mind life fact with see Chatty can elinor direct for former. Up as meant.",
    img: Img3
  },
  {
    title: "Cloud Computing",
    desc: "Easy mind life fact with see Chatty can elinor direct for former. Up as meant.",
    img: Img4
  }
];

  return (
    <>

    
    <Hero />


      
      {/* <HeroSection /> */}
      
                  {/*ABOUT SECTION=====2 */}


       <section className="about-section py-5">
      <div className="container">
        {/* Top Header */}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-8">
            <p className="about-small-title">About Your Company</p>
            <h1 className="about-main-title">
              We Execute Ideas From <br />
              Start to Finish
            </h1>
          </div>

          <div className="col-lg-4 text-lg-end text-start mt-3 mt-lg-0">
            <button className="btn btn-outline-primary px-4 py-2 rounded-pill">
              Know More
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="row ">
          {/* Left Content */}
          <div className="col-lg-5">
            {/* Item 1 */}
            <div className="d-flex mb-4">
              <div className="icon-box me-3">
                <i className="bi bi-bullseye"></i>
              </div>
              <div>
                <h5 className="fw-bold">Our Mission</h5>
                <p className="text-muted">
                  Our mission is to push boundaries, engage audiences,
                  and drive innovation through strategy.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="d-flex mb-4">
              <div className="icon-box me-3">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <div>
                <h5 className="fw-bold">Our Vision</h5>
                <p className="text-muted">
                  Our vision is to transform ideas into impactful digital
                  experiences that inspire growth.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="d-flex">
              <div className="icon-box me-3">
                <i className="bi bi-star"></i>
              </div>
              <div>
                <h5 className="fw-bold">Our Awards</h5>
                <p className="text-muted">
                  Recognized for excellence and innovation in delivering
                  world-class solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Image */}
          <div className="col-lg-3 mt-lg-0">
            <img
              src="https://images.pexels.com/photos/7640790/pexels-photo-7640790.jpeg"
              alt="team"
              className="img-fluid shadow-sm round-diagonal middle-img"
            />
            <p className="text-muted small">
              Repellendus autem quibusdam et aut officiis debitis aut re
              necessitatibus saepe eveniet ut et repudiandae sint.
              Repellendus autem quibusdam et aut officiis debitis aut re
              necessitatibus saepe eveniet ut et repudiandae sint.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <img
              src="https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg"
              alt="office"
              className="img-fluid shadow-sm right-image round-diagonal"
            />
          </div>
        </div>
      </div>
    </section>


    {/* CORE FEATURES SECTION ===== 3 */}

    <Core_Features />

    {/* SLIDER ANMATION CARDS */}

    <Slider />

    {/* WHY CHOOSE USm ========= 4 */}

    <section className="why-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p className="section-subtitle">— WHY CHOOSE US</p>

            <h2 className="section-title">
              Custom IT Solutions for <br /> Your Business
            </h2>

            <p className="section-text mt-3">
              Carried nothing on am warrant towards. Polite in of in oh needed
              itself silent course. Assistance travelling so especially do
              prosperous appearance mr no celebrated.
            </p>

            <div className="d-flex align-items-center mt-4">
              <div className="play-btn">
                <FaPlay />
              </div>
              <span className="ms-3 fw-semibold">VIDEO SHOWCASE</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="row g-4">

              {/* Card 1 */}
              <div className="col-md-6">
                <div className="service-card active">
                  <FaLaptopCode className="service-icon" />
                  <h5>IT Consultancy</h5>
                  <p>Astonished set expression solicitude way admiration</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6">
                <div className="service-card">
                  <FaCloud className="service-icon" />
                  <h5>Cloud Computing</h5>
                  <p>Astonished set expression solicitude way admiration</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6">
                <div className="service-card">
                  <FaShieldAlt className="service-icon" />
                  <h5>Cyber Security</h5>
                  <p>Astonished set expression solicitude way admiration</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6">
                <div className="service-card">
                  <FaDatabase className="service-icon" />
                  <h5>Backup & Recovery</h5>
                  <p>Astonished set expression solicitude way admiration</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>


    {/* OUR PROCESS ========= 5 */}

    <section className="process-section py-5 text-white">
      <div className="container">

        <p className="small-title text-center text-white"> OUR PROCESS</p>

        <h2 className="main-title mb-5 text-center text-white">
          Helping You Reach Your <br /> Innovative
        </h2>

        <div className="row">

          {/* STEP 1 */}
          <div className="col-lg-3 col-md-6 process-box">
            <div className="icon-circle">
              <FaSearch />
            </div>
            <h5>Researching Grow</h5>
            <p>Muchas variaciones de los pasajes de Lorem se le agregó</p>
            <a href="#">Read More →</a>
          </div>

          {/* STEP 2 */}
          <div className="col-lg-3 col-md-6 process-box">
            <div className="icon-circle">
              <FaPuzzlePiece />
            </div>
            <h5>Strategic Planning</h5>
            <p>Muchas variaciones de los pasajes de Lorem se le agregó</p>
            <a href="#">Read More →</a>
          </div>

          {/* STEP 3 */}
          <div className="col-lg-3 col-md-6 process-box">
            <div className="icon-circle">
              <FaLightbulb />
            </div>
            <h5>Customizable Solutions</h5>
            <p>Muchas variaciones de los pasajes de Lorem se le agregó</p>
            <a href="#">Read More →</a>
          </div>

          {/* STEP 4 */}
          <div className="col-lg-3 col-md-6 process-box last">
            <div className="icon-circle">
              <FaCogs />
            </div>
            <h5>Implementation Execution</h5>
            <p>Muchas variaciones de los pasajes de Lorem se le agregó</p>
            <a href="#">Read More →</a>
          </div>

        </div>
      </div>
    </section>


    {/* OUR SERVICE SECTION ======== 6 */}


  <section className="services-section text-center">
      <div className="container">

        {/* Small Title */}
        <p className="services-subtitle">OUR SERVICES</p>

        {/* Main Title */}
        <h2 className="services-title">
          We provide IT & <br /> Business solutions
        </h2>

        {/* Line */}
        <div className="title-line"></div>

        {/* Description */}
        <p className="services-desc">
          Outlived no dwelling denoting in peculiar as he believed. Behaviour
          excellent middleton be as it curiosity departure ourselves very extreme.
        </p>

        {/* Cards */}
        <div className="row mt-5">

          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="service-card">

                <img src={service.img} alt="" className="service-img" />

                <h5 className="mt-3">{service.title}</h5>

                <p>{service.desc}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>


{/* BLOG SECTION ========7 */}

 <Blog />

    {/* FINAL TESTIMONIAL SECTION */}

    <Testimonial />


{/* <section
  className="d-flex flex-column align-items-center py-5"
  style={{
    background: theme === "dark" ? "#000000" : "#ffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
>
  <div className="container">
    <motion.div
      className="col-lg-8 mx-auto text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      
      <motion.h1
        className="hero-title"
        style={{ color: theme === "dark" ? "#ffff" : "" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        About Your Company
      </motion.h1>

      
      <motion.p
        className="hero-subtitle mt-3"
        style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores
        est, reiciendis beatae voluptas doloremque consequatur expedita eius odio
        id!
      </motion.p>

     
      <motion.div
        className="text-center"
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
      
      </motion.div>
    </motion.div>
  </div>
</section> */}

                        {/* SECTION ---------  3 */}

{/* <section>
   <div className="container-fluid text-center pb-5">

    
    <motion.div
      className="row mt-5 justify-content-center"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.25 },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

     
      <motion.div
        className="col-12 col-sm-6 col-lg-3 mb-4"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
          <div
            className="topic-icon d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
            style={{
              background: theme === "dark" ? "#000000" : "#ffff",
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            <i className="bi bi-wallet2 fs-1" style={{ color: "#9357F4" }}></i>
          </div>
          <div>
            <h5 className="fw-bold" style={{ color: "#9357F4" }}>
              Pick a wallet
            </h5>
            <p className="icon-text small m-0">
              Create accounts & manage assets
            </p>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        className="col-12 col-sm-6 col-lg-3 mb-4"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
          <div
            className="topic-icon d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
            style={{
              background: theme === "dark" ? "#000000" : "#ffff",
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            <i className="bi bi-star fs-1" style={{ color: "#4371EF" }}></i>
          </div>
          <div>
            <h5 className="fw-bold" style={{ color: "#4371EF" }}>
              Get FrecX
            </h5>
            <p className="icon-text small m-0">
              The currency of Ethereum
            </p>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        className="col-12 col-sm-6 col-lg-3 mb-4"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
          <div
            className="topic-icon d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
            style={{
              background: theme === "dark" ? "#000000" : "#ffff",
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            <i className="bi bi-phone fs-1 text-success"></i>
          </div>
          <div>
            <h5 className="fw-bold" style={{ color: "#92FDDE" }}>
              Try apps
            </h5>
            <p className="icon-text small m-0">
              Finance, gaming, social
            </p>
          </div>
        </div>
      </motion.div>

     
      <motion.div
        className="col-12 col-sm-6 col-lg-3 mb-4"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
          <div
            className="topic-icon d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
            style={{
              background: theme === "dark" ? "#000000" : "#ffff",
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}
          >
            <i className="bi bi-rocket fs-1" style={{ color: "#FF52BD" }}></i>
          </div>
          <div>
            <h5 className="fw-bold" style={{ color: "#FF52BD" }}>
              Start building
            </h5>
            <p className="icon-text small m-0">
              Create your first app
            </p>
          </div>
        </div>
      </motion.div>

    </motion.div>
  </div>
</section> */}

                   {/* SECTION=====4 */}

 {/* <section className="py-5" style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }} >
      <div className="container">

        
        <div className="row mb-4 align-items-center">
          <div
            className="col-lg-6 mb-3 mb-lg-0"
            data-aos="fade-up"
          >
            <span className="learn-badge px-3 py-1">USE CASE</span>
            <h1 className="fw-bold display-5">
              A new way <br /> to use the internet
            </h1>
          </div>

          <div className="col-lg-6" data-aos="fade-left" >
            <div
              className="gradient-box gradient-1 rounded-2 shadow p-4 d-flex flex-column flex-md-row align-items-center gap-4 text-center text-md-start"
              
            >
              <img
                src={Demo}
                className="img-fluid rounded-3"
                style={imgStyle}
                alt=""
              />

              <div>
                <h4 className="fw-bold mb-2" style={{color: theme === "dark" ? "#ffffff" : "#111111",}}>Crypto without volatility</h4>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <button className="btn btn-dark btn-sm rounded-pill px-3">
                  Discover stablecoins →
                </button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="row g-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up">
  <div
    className="gradient-box gradient-2 rounded-2 shadow p-4
               d-flex flex-column align-items-center
               text-center h-100"
  >
    
    <img
      src={Demo3}
      className="img-fluid rounded-3 mb-3"
      style={imgStyle}
      alt=""
    />

    
    <div>
      <h5
        className="fw-bold mb-2"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111" }}
      >
        A fairer financial system
      </h5>

      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>

      <button className="btn btn-dark btn-sm rounded-pill px-3">
        Explore DeFi →
      </button>
    </div>
  </div>
</div>


          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
  <div
    className="gradient-box gradient-3 rounded-2 shadow p-4
               d-flex flex-column align-items-center
               text-center h-100"
  >
    
    <div className="mb-3">
      <h5 className="fw-bold mb-2">
        The network of networks
      </h5>

      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <button className="btn btn-dark btn-sm rounded-pill px-3">
        Explore benefits →
      </button>
    </div>

    
    <img
      src={Demo4}
      className="img-fluid rounded-3 mt-auto"
      style={imgStyle}
      alt=""
    />
  </div>
</div>


          <div className="col-lg-4 col-md-12" data-aos="fade-up" data-aos-delay="200">
  <div
    className="gradient-box gradient-4 rounded-2 shadow p-4
               d-flex flex-column align-items-center
               text-center h-100"
  >
    
    <img
      src={Demo5}
      className="img-fluid rounded-3 mb-3"
      style={imgStyle}
      alt=""
    />

    
    <div className='mt-5'>
      <h5 className="fw-bold mb-2">
        Innovative apps
      </h5>

      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <button className="btn btn-dark btn-sm rounded-pill px-3">
        Browse apps →
      </button>
    </div>
  </div>
</div>


        </div>

        
        <div className="row mt-4">
          <div className="col-12" data-aos="fade-up">
            <div
              className="gradient-box gradient-5 rounded-2 shadow p-4 d-flex flex-column flex-md-row align-items-center gap-4 text-center text-md-start"
              
            >
              <img
                src={Demo2}
                className="img-fluid rounded-3"
                style={{ width: "100%", maxWidth: "250px" }}
                alt=""
              />

              <div>
                <h4 className="fw-bold mb-2"  style={{color: theme === "dark" ? "#ffffff" : "#111111",}}>The internet of assets</h4>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="btn btn-dark btn-sm rounded-pill px-3">
                  More on NFTs →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> */}


                                  {/* SECTION======5 */}
  {/* <section className="eco-wrapper" >
      <div className="container px-1 px-md-5">

        <div className="row align-items-center gy-5">

         
          <div className="col-12 col-lg-6">
            <img
              src="https://images.pexels.com/photos/6766086/pexels-photo-6766086.jpeg"
              className="img-fluid w-75 eco-image"
              alt="ecosystem"
            />
          </div>

        
          <div className="col-12 col-lg-6 ps-lg-5 d-flex flex-column justify-content-center">

            <span className="eco-label mb-5">ACTIVITY</span>
          
            <h2 className="eco-title mb-5 hero-title">The strongest ecosystem</h2>

            <p className="eco-subtitle" style={{ color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",}}
          >
              Activity from all frecX networks
            </p>

           
            <div className="stats-card mt-4">
              <div className="row g-0">

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">$147B</div>
                  <div className="stats-text" 
                  style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>Value locked in DeFi</div>
                </div>

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">$114.3B</div>
                  <div className="stats-text"
                      style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>Value protecting FrecX</div>
                </div>

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">$0.0018</div>
                  <div className="stats-text" 
                      style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>Average transaction cost</div>
                </div>

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">19.92M</div>
                  <div className="stats-text"
                      style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>Transactions in the last 24h</div>
                </div>

              </div>
            </div>

            
            <div className="eco-buttons d-flex flex-wrap gap-3">
              <button className="btn btn-primary px-4 py-2">
                Enterprise FrecX
              </button>

              <button className="btn btn-outline-dark px-4 py-2" style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>
                More ecosystem resources →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section> */}
   <section className='mt-5 mb-5'>
     <Activity />
   </section>


                                   {/* SECTION=====6 */}
<section className="py-5" style={{overflowX:"hidden"}}>
  <div className="container">
    <div className="row align-items-start gx-5">

      {/* LEFT CONTENT (fade + slide from LEFT) */}
      <motion.div
        className="col-lg-7 order-2 order-lg-1"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="learn-badge px-3 py-1">LEARN</span>

        <h1 className="fw-bold display-5 mt-3 hero-title">
          Understand FrecX
        </h1>

        <p
          className="mt-2"
          style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          laudantium dolorum fugit harum, esse unde obcaecati sapiente!.
        </p>

        <h5 className="fw-semibold mt-4">Popular topics</h5>

        <div className="row g-4 mt-2">

        
          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
             
            <div
              className="topic-icons"
              style={{
                background: theme === "dark" ? "#000000" : "#ffff",
                color: "#ff2fab",
                transition: "0.3s",
              }}
            >
              <i className="bi bi-gear-fill"></i>
            </div>
            <span >
              <Link className="topic-text hover-underline" to="/frecx"
                        style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}
              >What is FrecX?</Link>
            </span>
            
          </div>
        

          {/* <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div
              className="topic-icons"
              style={{
                background: theme === "dark" ? "#000000" : "#ffff",
                color: "#ff2fab",
                transition: "0.3s",
              }}
            >
              <i className="bi bi-wallet2"></i>
            </div>
            <span className="topic-text hover-underline">
              What are crypto wallets?
            </span>
          </div> */}

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div
              className="topic-icons"
              style={{
                background: theme === "dark" ? "#000000" : "#ffff",
                color: "#ff2fab",
                transition: "0.3s",
              }}
            >
              <i className="bi bi-box-fill"></i>
            </div>
           
            <span className="topic-text hover-underline">
               <Link to='/frecx-guid'
                         style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}
               >
              How to start, step by step
              </Link>
            </span>
            
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div
              className="topic-icons"
              style={{
                background: theme === "dark" ? "#000000" : "#ffff",
                color: "#ff2fab",
                transition: "0.3s",
              }}
            >
              <i className="bi bi-file-earmark-text-fill"></i>
            </div>
            <span className="topic-text hover-underline">
             <Link to="/whitepaper"
              style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}
             >FrecX Whitepaper</Link>
            </span>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div
              className="topic-icons"
              style={{
                background: theme === "dark" ? "#000000" : "#ffff",
                color: "#ff2fab",
                transition: "0.3s",
              }}
            >
              <i className="bi bi-signpost-split"></i>
            </div>
            <span className="topic-text hover-underline ">
              <Link to="/roadmap" style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>FrecX roadmap</Link>
            </span>
          </div>

        </div>

        {/* <button
          className="btn btn-outline-dark mt-4 px-4 py-2"
          style={{
            background: theme === "dark" ? "#000000" : "#ffff",
            color: theme === "dark" ? "#ffff" : "#000",
            transition: "0.3s",
          }}
        >
          Other topics →
        </button> */}
      </motion.div>

      {/* RIGHT IMAGE (fade + slide from RIGHT) */}
      <motion.div
        className="col-lg-5 order-1 order-lg-2 mb-4 mb-lg-0"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={VectorImg1}
          alt="Learn FrecX"
          className="img-fluid learn-img"
        />
      </motion.div>

    </div>
  </div>
</section>

                                           {/* SECTION=====7 */} 


  <section className="py-5">
      <div className="container text-center">

        {/* Badge */}
        <span
          className="px-3 py-1"
          style={{
            background: "#efe4ff",
            color: "#7c3aed",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          VALUES
        </span>

        {/* Main Heading */}
        <h1
          className="fw-bold mt-3 hero-title"
          style={{
            fontSize: "52px",
            lineHeight: "1.2",
            fontWeight: "800",
          }}
        >
          The internet is changing
        </h1>

        {/* Subtitle */}
        <p
          className="mt-3"

               style={{
          color: theme === "dark" ? "#ffff" : "#6c5f5fff",
          transition: "0.3s",
          fontSize:'20px'
        }}
        >
          Be part of the digital revolution
        </p>

      </div>
    </section>

<ComparisonSlider />

                         {/* BUILD THE COMMUNITY */}

 

<section className="py-5" style={{ overflowX: "hidden" }}>
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT CONTENT */}
      <motion.div
        className="col-lg-6 col-md-12"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >

        {/* Tag */}
        <span
          className="px-3 py-1 rounded-pill fw-semibold d-inline-block"
          style={{
            background: "#f0e5ff",
            fontSize: "12px",
            color: "#7b44d6",
          }}
        >
          FREQUENCYCHAIN.ORG COMMUNITY
        </span>

        <h1
          className="fw-bold mt-3 hero-title"
          style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
        >
          Built by the community
        </h1>

        <p
          className=" mt-3"
          style={{
            color: theme === "dark" ? "#ffffff" : "#5a5353ff",
            transition: "0.3s",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos nemo dolor quas?
        </p>

        <p
          style={{
            color: theme === "dark" ? "#ffffff" : "#5a5353ff",
            transition: "0.3s",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates velit, saepe deserunt voluptate ipsam aliquid.
        </p>

        <p
          className="mb-4"
          style={{
            color: theme === "dark" ? "#ffffff" : "#5a5353ff",
            transition: "0.3s",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, consectetur.
        </p>

        {/* BUTTONS */}
        <div className="d-flex flex-wrap align-items-center gap-3">

          <button
            className="btn fw-semibold text-white"
            style={{
              background: "#7b44d6",
              padding: "10px 22px",
              borderRadius: "10px",
            }}
          >
           <Link style={{color:"#fff"}} to="/communityhub"> More on frequencychain.org →</Link>
          </button>

          <button
            className="btn btn-light shadow-sm d-flex align-items-center justify-content-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              border:'1px solid gray'
            }}
          >
            <i className="bi bi-discord" style={{ fontSize: "22px",}}></i>
          </button>

          <button
            className="btn btn-light shadow-sm d-flex align-items-center justify-content-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              border:'1px solid gray'
            }}
          >
            <i className="bi bi-github" style={{ fontSize: "22px" }}></i>
          </button>

        </div>

        {/* NEXT CALLS CARD */}
        <div
          className="p-4 rounded-4 mt-5 shadow-sm w-100"
          style={{
            border: "1px solid #eee",
            maxWidth: "100%", 
          }}
        >
          <h6 className="fw-semibold d-flex align-items-center gap-2 mb-3">
            <i className="bi bi-calendar3"></i> Next calls
          </h6>

          {/* Item 1 */}
          <div className="d-flex justify-content-between align-items-start py-3 border-bottom flex-wrap gap-3">
            <div className="flex-grow-1">
              <p className="fw-semibold mb-1" style={{ fontSize: "14px" }}>
                QA session - frequencychain.org portal
              </p>
              <p className="small mb-0" style={{
                color: theme === "dark" ? "#989292ff" : "#5a5353ff",
                transition: "0.3s",
              }}>
                December 10, 2025 at 5:45 PM
              </p>
            </div>

            <button className="btn btn-sm btn-outline-primary">
              Add to calendar
            </button>
          </div>

          {/* Item 2 */}
          <div className="d-flex justify-content-between align-items-start py-3 flex-wrap gap-3">
            <div className="flex-grow-1">
              <p className="fw-semibold mb-1" style={{ fontSize: "14px" }}>
                frequencychain.org Community - December 2025
              </p>
              <p className="small mb-0" style={{
                color: theme === "dark" ? "#989292ff" : "#5a5353ff",
                transition: "0.3s",
              }}>
                December 18, 2025 at 5:00 PM
              </p>
            </div>

            <button className="btn btn-sm btn-outline-primary">
              Add to calendar
            </button>
          </div>
        </div>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="col-lg-6 col-md-12 mt-4 mt-lg-0 text-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        <img
          src={VectorImg2}
          alt="Community illustration"
          className="img-fluid shadow-sm learn-img"
          style={{
            width: "100%",
            maxWidth: "500px",
            objectFit: "cover",
          }}
        />
      </motion.div>

    </div>
  </div>
</section>


  
   <Events />






    </>
  );
}
