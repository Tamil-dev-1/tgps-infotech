import React from "react";
import "./AboutUs.css";
import Infotech_diff from '../../assets/images/about/infotech_diff.png'
import Gallery from "../../component/Gallery_section/Gallery";
import globleImg from '../../assets/images/home/global.png';
import AboutTest from '../../component/aboutTestimonial/AboutTest'
export default function AboutUs() {
  return (
    <>
    <div className="tgps-wrapper">

      {/* TOP CENTER SECTION */}
      <section className="top-section text-center">
        <div className="container">
          <h1 className="main-title">
            Engineering the Future of <span style={{color:"#B4E701"}}>Digital Infrastructure</span>
          </h1>

          <p className="main-para">
            We build scalable, secure, and high-performance digital solutions
            that empower businesses to innovate faster. Our expertise spans
            across AI, Blockchain, and Enterprise systems to deliver real-world
            impact and measurable growth.
          </p>
        </div>
      </section>


      {/* SECOND SECTION */}
      {/* <section className="difference-section">
        <div className="container">
          <div className="row align-items-center">

            
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-heading">
                The <span style={{color:"#B4E701"}}>TGPS INFOTECH </span>Difference
              </h2>

              <p className="section-para">
                At TGPS Infotech, we combine innovation with deep technical
                expertise to deliver solutions that are not only cutting-edge
                but also business-driven. Our team focuses on performance,
                scalability, and seamless user experience to ensure long-term
                success for our clients.
              </p>
            </div>

        
            <div className="col-lg-6 text-center">
              <img
                src={Infotech_diff}
                alt="TGPS Infotech"
                className="img-fluid custom-img"
              />
            </div>

          </div>
        </div>
      </section> */}

       <section className="difference-section">
      <div className="container-fluid">

        <div className="row align-items-center difference-row">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 left-content">
            <h2 className="section-heading">
              The <span>TGPS INFOTECH</span> <br />
              Difference
            </h2>

            <p className="section-para">
              At TGPS Infotech, we combine innovation and deep technical
              expertise to deliver solutions that are not only cutting-edge
              but also business-driven. Our team focuses on performance,
              scalability, and seamless user experience to ensure long-term
              success for our clients.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 right-content">
            <img
              src={Infotech_diff}
              alt="TGPS Infotech"
              className="img-fluid custom-img"
            />
          </div>

        </div>

      </div>
    </section>

    </div>

    {/* SECTION ------ 2 */}


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

{/* GALLERY SECTION */}

<Gallery />



<AboutTest />




{/* FUTURE TECHNOLOGY VISION --------- 14 */}

<section className="ft-section d-flex align-items-center">
  <div className="container">
    <div className="row align-items-center">

      {/* Left Content */}
      <div className="col-lg-4 text-white">
        <span className="ft-label">FUTURE TECHNOLOGY</span>

        <h1 className="ft-title mt-3">
          Future 
          Technology <br />
          <span style={{color:"#C6FF00"}}>Vision</span>
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
        <img src={globleImg} alt="Globe" className="ft-image img-fluid" />
      </div>

    </div>
  </div>
</section>
    </>
  );
}