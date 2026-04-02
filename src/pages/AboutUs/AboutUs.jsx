import React from "react";
import "./AboutUs.css";
import Infotech_diff from '../../assets/images/about/infotech_diff.png'
// import Gallery from "../../component/Gallery_section/Gallery";
import globleImg from '../../assets/images/home/global.png';
import Our_Team from '../../assets/images/about/our_team.jpg';
import AboutTest from '../../component/aboutTestimonial/AboutTest'


import { MdOutlineContentPasteSearch } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
import { FcElectronics } from "react-icons/fc";
import { RiFunctionFill } from "react-icons/ri";
export default function AboutUs() {

  // section --- 2
  const data = [
  {
    title: "Research",
    desc: "Rigorous research processes and design thinking-driven methodologies ensure that you access the trusted insights, guidance and solutions required to gain essential competitive edge, operate efficiently, minimize risk, drive results and achieve business success.",
    icon: <MdOutlineContentPasteSearch />,
  },
  {
    title: "Strategy",
    desc: "Devised leveraging deep industry expertise and analytics, and provided with the accretive value of human insights, our strategy empowers businesses to act with confidence and speed.",
    icon: <PiStrategyBold />,
  },
  {
    title: "Consulting",
    desc: "Antier’s ability to identify and leverage opportunity relies on smart innovation architecture and cross-functional teams.",
    icon: <GoCommentDiscussion />,
  },
  {
    title: "Digital",
    desc: "We navigate our clients’ journey from thinking digital to being digital by leveraging cutting-edge technologies.",
    icon:<AiOutlineGlobal />,
  },
  {
    title: "Technology",
    desc: "Antier fuels digital transformation through crafted services to redefine your application portfolio.",
    icon: <FcElectronics />,
  },
  {
    title: "Operations",
    desc: "To thrive in today’s market, businesses must act quickly. We help transform operations to harness technology.",
    icon: <RiFunctionFill />,
  },
];


// SECTION ---- 4



const beliefs = [
  {
    title: "Transparency",
    desc: "Grounded in the value of open and honest communication, we operate in a completely transparent manner to ensure success of our clients.",
  },
  {
    title: "Passion",
    desc: "At Antier, we do everything with passion – for our clients and our organization. Our teams are driven by enthusiasm and commitment.",
  },
  {
    title: "Empowerment",
    desc: "We are driven to deliver results. We encourage ownership, responsibility, and adopting the right technologies.",
  },
  {
    title: "Collaboration",
    desc: "Our experts share knowledge and work together as a team to achieve common goals for clients and ourselves.",
  },
  {
    title: "Customer Focus",
    desc: "We create long-term relationships by being responsive and consistently delivering value.",
  },
  {
    title: "Integrity",
    desc: "We uphold the highest standards of governance and operate with moral and intellectual integrity.",
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
              Founded in 2011, Antier is a global team of 700+ Web3 specialists
              building trusted digital infrastructures for the decentralized
              economy. Since pivoting to blockchain in 2017, we have advanced the
              intersection of trust and intelligence - developing scalable
              solutions across stablecoins, real-world asset tokenization,
              exchanges, gaming, rollups, and unified smart accounts.

              Today, under the philosophy Trust Empowering Intelligence, we
              integrate blockchain and artificial intelligence to help
              across an increasingly connected world.
            </p>
          </div>

          {/* RIGHT */}
          <div className="what-right">
            <p>
              We have real-world experience linking blockchain technology and
              business processes—across the entire blockchain journey
              <br />
              <span>—for clients.</span>
            </p>
          </div>

        </div>

      </div>
    </section>


    {/* SECTION ----- 2 */}

    <section className="innovate py-5">
  <div className="container">
    <h2 className="innovate__title text-center mb-5">
      How we innovate
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
            Lorem ipsum dolor sit <span style={{color:"#B4E701"}}>amet Lorem, ipsum.</span>
          </h2>

          <p className="discovery-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque, asperiores vero, fugiat ducimus minus, consequatur reprehenderit illo itaque qui praesentium quo! Alias laboriosam magnam ullam maxime eveniet qui neque.
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





<AboutTest />




{/* FUTURE TECHNOLOGY VISION --------- 14 */}

<section className="ft-section d-flex align-items-center">
  <div className="container">
    <div className="row align-items-center">

      {/* Left Content */}
      <div className="col-lg-4 text-white">
        {/* <span className="ft-label">Join Our</span> */}

        <h1 className="ft-title mt-3">
          Join Our
          <span style={{color:"#C6FF00"}}> Team</span>
        </h1>

        <p className="ft-text mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam magni, pariatur illo vel soluta!
        </p>

        <button className="ft-btn mt-4">
          Learn more
        </button>
      </div>

      {/* Right Image */}
      <div className="col-lg-8 text-center">
        <img src={Our_Team} alt="Globe" className="ft-image img-fluid" />
      </div>

    </div>
  </div>
</section>
    </>
  );
}