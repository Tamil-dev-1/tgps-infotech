import React from "react";
import LogoMarquee from "../../component/logomarquee/LogoMarquee";
import Web2Stats from '../../component/web2_stats/Web2Stats';
import WebMarqueeText from '../../component/text_marquee/webMarqueeText'
import "./Web2.css"; 
import Web2Sec1 from "../../component/web2_sec1/Web2Sec1";
import Web2Sec2 from "../../component/web2_sec2/Web2Sec2";
import Web2Sec3 from "../../component/web2_sec3/Web2Sec3";
import Web2Sec4 from "../../component/web2_Sec4/Web2Sec4";
import Web2Sec5 from "../../component/web2_sec5/Web2Sec5";
import Web2Sec6 from "../../component/web2_sec6/Web2Sec6";
import Web2Sec7 from "../../component/web2_sec7/Web2Sec7";
// import CountUp from "react-countup";

const Web2 = () => {


//    SECTION ----- 2
  const stats = [
    { value: 10.07, suffix: "%", label: "Revenue Growth Rate" },
    { value: 5045, suffix: "", label: "Premium Customers" },
    { value: 12.56, suffix: "%", label: "Developer Growth Rate" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      <section className="web2-banner d-flex align-items-center justify-content-center text-center">
        <div className="web2-content container">
          <h1 className="web2-heading">
            Empowering Modern <span style={{color:"#C6FF00"}}>Web2 Solutions</span>
          </h1>

          <p className="web2-text">
            We build scalable, high-performance web applications tailored
            for your business growth.
          </p>

          <p className="web2-text">
            Delivering seamless user experiences with cutting-edge
            technologies and innovation.
          </p>
        </div>
      </section>

      {/* SECTION ------ 2 */}

      <LogoMarquee />


      {/* SECTION ----- 3 WEB - 1 */}

  <Web2Sec1 />
{/* 
  SECTION ------ 4 WEB - 2 */}

  <Web2Sec2 />


  {/* SECTION ------ 5 WEB - 3  */}

<Web2Sec3 />

{/* SECTION ------ 5 WEB - 4  */}

<Web2Sec4 />


{/* SECTION ------ 5 WEB - 5  */}

<Web2Sec5 />

{/* SECTION ------ 5 WEB - 6 */}

<Web2Sec6 />

{/* SECTION ------ 5 WEB - 7 */}

<Web2Sec7 />


      {/* SECTION ----  4*/}

     <Web2Stats />

     {/* TEXT MARQUEE SECTION -------- 5 */}
     <WebMarqueeText />


     {/* CTA SECTION  */}

     <section className="web2-cta-section">
  <div className="web2-cta-overlay"></div>

  <div className="container">
    <div className="web2-cta-content text-center">

      <h2 className="web2-cta-title">
       Elevate Your Digital 
        <span>{" "}Experience</span>
      </h2>

      <p className="web2-cta-text">
        with Future-Ready Web Solutions
Create scalable, secure, and high-performing digital products built for today’s evolving business landscape.
      </p>

      <button className="web2-cta-btn">
        Get Started Now →
      </button>

    </div>
  </div>
</section>
    </div>
  );
};

export default Web2;