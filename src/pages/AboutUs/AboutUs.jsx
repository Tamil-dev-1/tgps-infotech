import React from "react";
import "./AboutUs.css";
import Infotech_diff from '../../assets/images/about/infotech_diff.png'
// import Gallery from "../../component/Gallery_section/Gallery";
import globleImg from '../../assets/images/home/global.png';
import Our_Team from '../../assets/images/about/ourTeam.png';
// import AboutTest from '../../component/aboutTestimonial/AboutTest'
import Flow_Img from '../../assets/images/about/flowImg.jpg'

import { MdOutlineContentPasteSearch } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
import { FcElectronics } from "react-icons/fc";
import { RiFunctionFill } from "react-icons/ri";
import { Link } from "react-router-dom";


export default function AboutUs() {

  // section --- 2
  const data = [
  {
    title: "Research",
    desc: "Insight-driven research and design thinking methodologies ensure you gain actionable intelligence, enabling smarter decisions, reduced risks, improved efficiency, and sustained business growth.",
    icon: <MdOutlineContentPasteSearch />,
  },
  {
    title: "Strategy",
    desc: "centered insights, our strategies empower businesses to move with clarity, confidence, and speed.",
    icon: <PiStrategyBold />,
  },
  {
    title: "Consulting",
    desc: "Our consulting approach focuses on identifying opportunities through innovation frameworks and cross-functional expertise to deliver scalable and impactful solutions",
    icon: <GoCommentDiscussion />,
  },
  {
    title: "Digital",
    desc: "We guide businesses from digital adoption to digital excellence by leveraging Web2, Web3, and AI-driven technologies for measurable transformation.",
    icon:<AiOutlineGlobal />,
  },
  {
    title: "Technology",
    desc: "We drive transformation through advanced technology solutions, building and optimizing applications that align with evolving business needs.",
    icon: <FcElectronics />,
  },
  {
    title: "Operations",
    desc: "We help modernize operations with intelligent systems and agile processes, enabling businesses to adapt quickly and perform efficiently in dynamic markets.",
    icon: <RiFunctionFill />,
  },
];


// SECTION ---- 4



const beliefs = [
  {
    title: "Transparency",
    desc: "We believe in open and honest communication, ensuring complete clarity in our processes to build trust and deliver successful outcomes for our clients",
  },
  {
    title: "Passion",
    desc: "We approach every project with energy and dedication, driven by a strong commitment to creating meaningful impact for our clients and our organization.",
  },
  {
    title: "Empowerment",
    desc: "We focus on delivering results by encouraging ownership, accountability, and the adoption of the right technologies to drive progress.",
  },
  {
    title: "Collaboration",
    desc: "We foster a culture of shared knowledge and teamwork, working together to achieve common goals and deliver better outcomes.",
  },
  {
    title: "Customer Focus",
    desc: "We prioritize long-term relationships by staying responsive, understanding client needs, and consistently delivering measurable value.",
  },
  {
    title: "Integrity",
    desc: "We operate with strong ethical principles, maintaining the highest standards of professionalism, accountability, and trust in everything we do.",
  },
];


  return (


    <>
    {/* SECTION - 1 */}

  
     <section className="what-section">
  <div className="container">

    <div className="what-flex">

      {/* LEFT */}
      <div className="what-left">
        <h2>What we do</h2>

        <p>
          TGPS Infotech is a global team of 90+ specialists building scalable digital ecosystems. We operate at the intersection of Web2, Web3, and AI—delivering solutions across web, mobile, SaaS, blockchain, and next-generation digital platforms.
        </p>

        <p>
          Guided by our philosophy Trust Empowering Intelligence, we integrate blockchain, AI, and advanced technologies to help businesses enhance transparency, move value, and drive smarter growth.
        </p>

        <p>
          We connect Web2, Web3, and AI with real business outcomes—covering the full journey from strategy and design to development and optimization.
        </p>
      </div>

      {/* RIGHT → IMAGE */}
      <div className="what-right">
        <img
          src={Flow_Img}
          alt="what we do"
          className="img-fluid what-img"
        />
      </div>

    </div>

  </div>
</section>


    {/* SECTION ----- 2 */}

    <section className="innovate py-5">
  <div className="container">
    <h2 className="innovate__title text-center mb-5">
      How We Innovate
    </h2>

    <div className="row g-4">
      {data.map((item, index) => (
        <div className="col-lg-4 col-md-6 col-12" key={index}>
          <div className="innovate__card h-100">
            
            <div className="innovate__icon">
              <span>{item.icon}</span>
            </div>

            <h5 className="innovate__card-title">{item.title}</h5>
            <p className="innovate__card-desc">{item.desc}</p>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    {/* SECTION ----- 3 */}

  <section className="discovery-section">
      <div className="discovery-overlay">
        <div className="container text-center discovery-content">

          <h6 className="discovery-subtitle">
            DIGITAL DISCOVERY
          </h6>

          <h2 className="discovery-title">
            Don’t Just Adapt.  <span style={{color:"#B4E701"}}>Lead the Shift.</span>
          </h2>

          <p className="discovery-text">
            Build with a team that blends Web2, Web3, and AI to create systems that don’t follow trends—they define them.
          </p>

        </div>
      </div>
    </section>



{/* SECTION ----- 4 */}


<section className="belief-section py-5">
      <div className="container">
        
        <h2 className="belief-title text-center mb-5">
          What we believe
        </h2>

        <div className="row g-4">
          {beliefs.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="belief-card h-100">
                <h5 className="belief-card-title">{item.title}</h5>
                <p className="belief-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


    
      {/* GALLERY SECTION */}

{/* <Gallery /> */}


    

    {/* SECTION ------ 2 */}


  

    {/* SECTION ----- 3 */}

     {/* <section className="cta-section">
  <div className="container">

    
    <div className="row align-items-center top-row">

      
      <div className="col-lg-4 col-md-5 text-md-start text-center mb-3 mb-md-0 left-box">
        <h3 className="cta-heading">
          Meet The Sparks <span style={{color:"#B4E701"}}>Behind Our Magic</span>
        </h3>
      </div>

    
      <div className="col-lg-8 col-md-7 text-md-end text-center right-box">
        <button className="cta-btn d-inline-flex align-items-center justify-content-center gap-2">
          org.<i class="bi bi-arrow-right"></i>
        </button>
      </div>

    </div>

    
    <div className="bottom-cta">
      <button className="cta-btn full-btn">
        Join Us Now
      </button>
    </div>

  </div>
</section> */}


{/* NEW SECTION */}

   <section className="branding-section d-flex align-items-center">
  <div className="container">

    {/* NEW TOP CENTER HEADING */}
    {/* <div className="text-center mb-5">
      <h2 className="branding-top-heading">
       Webdesign
      </h2>
    </div> */}

    {/* TOP CONTENT */}
    <div className="row">
      <div className="col-lg-8">
        <h1 className="branding-title">
         Create the career <br />you love
          <span className="branding-highlight"> Brand</span>
        </h1>

        <p className="branding-description mt-4">
        Build your future in a fast-evolving environment where innovation meets opportunity. We empower you to grow, explore your potential, and shape a career aligned with your ambitions.
        </p>

        {/* <button className="btn branding-button mt-4">
          Schedule a Call
        </button> */}
      </div>
    </div>

    {/* BOTTOM CONTENT */}
    <div className="row branding-bottom mt-5 pt-5">

      <div className="col-lg-6 mb-4">
        <h2 className="branding-subtitle">
          Experience the Advantage <br /> of Working  at TGPS Infotech
        </h2>
      </div>

      <div className="col-lg-6">
        <p className="branding-text">
          At TGPS Infotech, we are a team driven by innovation, ownership, and results. We move with speed, embrace challenges, and continuously evolve with technology. Beyond work, we foster a culture where learning, collaboration, and growth come together—creating a journey that is both rewarding and impactful. Ready to grow with us?
        </p>
      </div>

    </div>
  </div>
</section>





{/* <AboutTest /> */}




{/* FUTURE TECHNOLOGY VISION --------- 14 */}

<section className="ft-section">
  <div className="container">
    
    <div className="ft-wrapper">
      
      {/* Left Content */}
      <div className="ft-left text-white">
        <h1 className="ft-title">
          Join Our <span className="highlight">Team</span>
        </h1>

        <p className="ft-text mt-3">
          Our team thrives on innovation, collaboration, and ownership, building impactful solutions while growing together in a culture driven by trust and excellence.
        </p>

        <Link to="/contact-form2" className="text-decoration-none">
        <button className="ft-btn mt-4">
          Contact Us
        </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="ft-right">
        <img src={Our_Team} alt="Globe" className="ft-image" />
      </div>

    </div>

  </div>
</section>
    </>
  );
}