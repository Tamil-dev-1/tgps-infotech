
import Hero from '../../component/hero/Hero'
import ComparisonSlider from '../../component/slider/ComparisonSlider';
import Blog from '../../component/blog/Blog';
import Core_Features from '../../component/core_features/Core_Features'
import Slider from '../../component/new_slider/Slider'
import './Home.css';
import Enterprises from '../../component/enterpises/Enterprises';

import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

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
import globleImg from '../../assets/images/home/global.png';
import AIbrainImg from '../../assets/images/home/aibrain.png';

import { motion } from "framer-motion";
import Testimonial from '../../component/Testimonial/Testimonial';
import OurProcess from '../../component/ourprocess/OurProcess';
import ClientsPartner from '../../component/clients&partner/ClientsPartner';
import ScrollBox from '../../component/scrollbox/ScrollBox';
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
 
 {/* HERO SECTION ---- 1 */}
    
    <Hero />


    {/* DIGITAL REVOLUTION SECTION --------- 2 */}

    <section className="digital-hero-section">

      <div className="digital-hero-overlay">

        <div className="container text-center">

          <p className="digital-hero-subtitle">
            DIGITAL DISCOVERY
          </p>

          <h1 className="digital-hero-title">
            The Internet Is Changing —
            <br />
            Be Part of the Digital Revolution
          </h1>

          <p className="digital-hero-desc">
            Fast track your journey with secure digital solutions and 
            modern enterprise technology platforms.
          </p>

          <button className="digital-hero-btn">
            Start Your Journey
          </button>

        </div>

      </div>

    </section>

    
                 {/*ABOUT SECTION --------- 3 */}

    <section className="about-studio py-5">

      {/* Animated Background */}
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-7">
            <h1 className="studio-title">TGPSINFOTECH</h1>

            <p className="studio-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, ducimus blanditiis. Distinctio assumenda totam nisi,
              veniam sed perspiciatis unde? Autem laboriosam maxime tenetur
              totam incidunt in aut dignissimos eveniet eum.
            </p>

            <div className="tag-wrapper">
              <span className="tag">Our Mission</span>
              <span className="tag">Our Vision</span>
              <span className="tag">Our Awards</span>
              <span className="tag">Our Values</span>
              <span className="tag">Our Vision</span>
              <span className="tag">Our Awards</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 text-center">
            <div className="image-box">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="studio"
                className="studio-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* CORE FEATURES SECTION -------- 4 */}

    <Core_Features />


 {/* SLIDER ANMATION Blockchain CARDS SECTION --------- 5 */}

    <Slider />
      
      {/* AI OFFERING SECTION ---------- 6 */}

     <section className="ai-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-12 col-lg-8 text-center order-2 order-lg-1">
            <img src={AIbrainImg} alt="AI Brain" className="ai-image img-fluid" />
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-4 text-white text-center text-lg-start mt-5 mt-lg-0 order-1 order-lg-2">
            <span className="ai-label">FUTURE TECHNOLOGY</span>

            <h1 className="ai-title mt-3">
              AI Offerings
            </h1>

            <p className="ai-text mt-3">
              Leverage secure and scalable AI-powered solutions to
              accelerate business transformation and unlock new
              possibilities.
            </p>

            <button className="ai-btn mt-4">
              Get Started Now
            </button>
          </div>

        </div>
      </div>
    </section>

    {/* WHY CHOOSE US SECTION --------- 7*/}

    {/* <section className="why-section py-5">
      <div className="container">
        <div className="row align-items-center">

         
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

          
          <div className="col-lg-6">
            <div className="row g-4">

             
              <div className="col-md-6">
                <div className="service-card active">
                  <FaLaptopCode className="service-icon" />
                  <h5>IT Consultancy</h5>
                  <p>Astonished set expression solicitude way admiration</p>
                </div>
              </div>

              
              <div className="col-md-6">
                <div className="service-card">
                  <FaCloud className="service-icon" />
                  <h5>Cloud Computing</h5>
                  <p>Astonished set expression solicitude way admiration</p>
                </div>
              </div>

              
              <div className="col-md-6">
                <div className="service-card">
                  <FaShieldAlt className="service-icon" />
                  <h5>Cyber Security</h5>
                  <p>Astonished set expression solicitude way admiration</p>
                </div>
              </div>

              
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
    </section> */}
    <ScrollBox />
      
      {/* OUR PROCESS SECTION -------- 8 */}
      <OurProcess />


      {/* <ClientsPartner /> */}

      {/* WHY ENTERPRISES CHOOSE US SECTION --------9  */}

   <Enterprises />

    {/* CTA SECTION --------- 10  */}

   <section className="overlap-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h2 className="section-title">
              Transforming Your <span style={{color:"#C6FF00"}}>Digital Experience</span> 
            </h2>

            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a vel eaque inventore voluptatum iure? Suscipit modi quas quo quia.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6 overlap-wrapper">

            <img src='https://images.pexels.com/photos/7974/pexels-photo.jpg' alt="" className="overlap-img img-1"/>
            <img src='https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg' alt="" className="overlap-img img-2"/>
            <img src='https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg' alt="" className="overlap-img img-3"/>

          </div>

        </div>
      </div>
    </section>


    {/* BLOG SECTION ---------- 11*/}

    <Blog />


    {/* VALUES SECTION ---------- 12 */}
   <section
  className="py-5"
  style={{
    background: "#111111",
    transition: "0.3s",
  }}
>
  <div className="container text-center">

    {/* Badge */}
    <span
      className="px-3 py-1"
      style={{
        background: "#EFFE00",
        color: "#111111",
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
      className="fw-bold mt-3 "
      style={{
        fontSize: "52px",
        lineHeight: "1.2",
        fontWeight: "800",
        color: "#FFFFFF",
      }}
    >
      The internet is changing
    </h1>

    {/* Subtitle */}
    <p
      className="mt-3"
      style={{
        color: "#FFFFFF",
        transition: "0.3s",
        fontSize: "20px",
      }}
    >
      Be part of the digital revolution
    </p>

  </div>
</section>

<ComparisonSlider />



    {/*TESTIMONIAL SECTION -------- 13*/}

    <Testimonial />


 {/* FUTURE TECHNOLOGY VISION --------- 14 */}

<section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-4 text-white">
            <span className="hero-label">FUTURE TECHNOLOGY</span>

            <h1 className="tech-title mt-3">
              Future 
              Technology <br />
              Vision
            </h1>

            <p className="hero-text mt-3">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam magni, pariatur illo vel soluta!
            </p>

            <button className="tech-btn mt-4">
              Learn more
            </button>
          </div>

          {/* Right Image */}
          <div className="col-lg-8 text-center">
            <img src={globleImg} alt="Globe" className="hero-image img-fluid" />
          </div>

        </div>
      </div>
    </section>


    </>
  );
}
