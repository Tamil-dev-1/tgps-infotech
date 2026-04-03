import React from 'react'
import './consulting.css'
import Ai_Brain from '../../assets/images/ai/aibanner4.png';
import Ai_smBrain from '../../assets/images/ai/aismbrain.png';
import Web3Img from '../../assets/images/consulting/web3.png'
import Brand1 from '../../assets/images/consulting/brand1.jpg'
import Brand2 from '../../assets/images/consulting/brand2.jpg'
import Brand3 from '../../assets/images/consulting/brand3.jpg'
import { FaUsers, FaLightbulb, FaExpandArrowsAlt, FaChartLine, FaFileInvoice } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { Link } from 'react-router-dom';



const Consulting = () => {

    // SECTION ---- 2

const services = [
  {
    title: "Strategic AI Advisory",
    desc: "Our AI strategy services provide organizations with a clear understanding of AI capabilities, along with actionable roadmaps to effectively integrate AI into business processes and achieve defined objectives"
  },
  {
    title: "Use Case Identification & Evaluation",
    desc: "Our experts work closely with your team to identify, assess, and prioritize high-impact AI use cases based on industry relevance, feasibility, and potential business value."
  },
  {
    title: "AI Infrastructure Setup",
    desc: "We design and deploy secure, scalable, cloud-based infrastructure that supports seamless development, deployment, and management of AI applications without operational disruptions."
  },
  {
    title: "Machine Learning Model Development",
    desc: "Our team delivers end-to-end ML solutions, including data preparation, model training, optimization, and integration into enterprise-grade AI systems."
  },
  {
    title: "Training, Adoption & Support",
    desc: "We provide comprehensive training and ongoing support to ensure smooth adoption of AI solutions, enabling teams to operate systems efficiently and confidently."
  },
  {
    title: "AI Software Development",
    desc: "Our AI engineers build custom software solutions with advanced features and intelligent capabilities, tailored to meet specific business requirements and performance goals."
  }
];


// SECTION ------ 4

 const features = [
    {
      icon: <FaUsers />,
      title: "Proven Expertise Across AI & Blockchain",
      text: "Deep technical knowledge combined with real-world implementation experience across industries and enterprise environments."
    },
    {
      icon: <FaLightbulb />,
      title: "End-to-End Solution Ownership",
      text: "From strategy and architecture to deployment and optimization, we manage the complete lifecycle of your digital transformation."
    },
    {
      icon: <FaExpandArrowsAlt />,
      title: "Scalable & Future-Ready Architecture",
      text: "Solutions designed for performance, flexibility, and long-term growth across evolving business and technology landscapes."
    },
    {
      icon: <FaChartLine />,
      title: "Security, Compliance & Governance First",
      text: "Built with strong data protection, regulatory alignment, and enterprise-grade governance at every layer."
    },
     {
      icon: <FaFileInvoice />,
      title: "Innovation-Driven Approach",
      text: "We leverage the latest advancements in AI, Web3, and data intelligence to deliver cutting-edge, competitive solutions"
    },
     {
      icon: <IoIosBusiness />,
      title: "Business-Centric Execution",
      text: "Every solution is aligned with your business goals, ensuring measurable outcomes, ROI, and operational efficiency"
    }
  ];

   


  return (
    <>
      {/* SECTION ----1 */}
       <section className="text-white py-5 d-flex align-items-center" style={{ backgroundColor: '#0B0B0B',marginTop:"60px" }}>
            <div className="container">
              <div className="row align-items-center g-5">
                
                {/* Left Column: Content */}
                <div className="col-lg-6 order-2 order-lg-1">
                  <h3 className=" text-white fw-bold mb-4">
                    Blockchain Consulting & Advisory Services, Enabling Intelligent,  <br />
                    <span>Scalable Web3 Transformation </span>
                  </h3>
                  
                  <p className="lead mb-4" style={{ fontSize: '1rem',color:"#bfbfbf" }}>
                   Unlock smarter, data-driven decision-making across your digital ecosystems with advanced blockchain and AI-powered solutions designed for modern enterprises.
                  </p>
      
                  <ul className="list-unstyled mb-5">
                    {[
                      " Real-time insights to accelerate strategic and operational decision-making",
                      "Advanced analytics with predictive intelligence and anomaly detection",
                      " End-to-end transparency across systems with unified data visibility",
                      "Intelligent agent layer delivering insights directly within user workflows"
                    ].map((text, index) => (
                      <li key={index} className="d-flex align-items-start mb-3">
                        <span className="me-3 text-info">✔</span>
                        <span className="text-light-emphasis">{text}</span>
                      </li>
                    ))}
                  </ul>
      
                  
                </div>
      
                {/* Right Column: Hero Image/Graphic */}
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <div className="position-relative">
                    {/* Replace with your actual image path */}
                    <img 
                      src={Ai_Brain}
                      alt="AI Decision Intelligence" 
                      className="img-fluid ai-brain-img"
                      style={{ filter: 'drop-shadow(0 0 20px rgba(0, 124, 240, 0.3))' }}
                    />
                    
                    {/* Optional: Simple CSS glow effect behind the image */}
                    <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 rounded-circle" 
                      style={{ 
                        background: 'radial-gradient(circle, rgba(0,124,240,0.15) 0%, transparent 70%)',
                        zIndex: -1 
                      }}>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
          </section>

          {/* SECTION ---- 2 */}


 <section className="ai-consult-section">
      <div className="container">

        <div className="text-center ai-consult-header">
          <h2 className="ai-consult-title">Our AI Consulting & Implementation Services</h2>
          <p className="ai-consult-subtitle">
            We bring together a team of experienced AI specialists who deliver outcome-focused consulting services, helping businesses identify, adopt, and scale the right AI solutions across their operations.
          </p>
        </div>

        <div className="row ai-consult-grid">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="ai-consult-card">
                <h5 className="ai-consult-card-title">{service.title}</h5>
                <p className="ai-consult-card-text">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>




    {/* SECTION ----- 3 */}

    <section className="web3-sections">
      <div className="container">
        <div className="row align-items-center">

          {/* Image */}
          <div className="col-lg-5 col-md-12 text-center">
            <div className="web3-image-wrapper">
              <img
                src={Web3Img}
                alt="Web3 Consulting"
                className="img-fluid web3-image"
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-7 col-md-12">
            <div className="web3-content">
              <h2 className="web3-title">
                Expert Web3 Consulting Services for Future-Ready Businesses
              </h2>

              <p className="web3-text">
                Web3 is transforming the digital landscape, yet many organizations are still exploring how it applies to their business. In simple terms, Web3 represents the evolution of the internet powered by decentralized technologies and blockchain-based infrastructure.
              </p>

              <p className="web3-text">
                Web3 unlocks new possibilities across industries—from digital ownership to decentralized applications and tokenized ecosystems. This is where our Web3 consulting expertise helps businesses identify opportunities, define clear strategies, and successfully adopt decentralized solutions with confidence and efficiency.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* SECTION ------ 4 */}



    <section className="web3-why-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center web3-why-header">
          <h2 className="web3-why-title">
            Why Choose TGPS Info Tech
          </h2>

          <p className="web3-why-subtitle">
           At TGPS Info Tech, we go beyond technology delivery—we partner with businesses to build scalable, future-ready digital ecosystems powered by AI, blockchain, and next-generation innovations.

          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">

          {features.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">

              <div className="web3-why-card text-center">

                <div className="web3-why-icon">
                  {item.icon}
                </div>

                <h5 className="web3-why-card-title">
                  {item.title}
                </h5>

                <p className="web3-why-card-text">
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>



    {/* CTA SECTION --- CONSULTING */}


   <section className="cta-section container">
      <div className="row align-items-center">

        {/* LEFT */}
        <div className="col-lg-6 col-12 cta-text">
          <span className="badge">Get Started</span>

          <h1>
          Build a Personal Brand
          </h1>

          <p>
Our products and services are designed to support creators at every stage of their journey—empowering them to grow, scale, and take full control of their digital presence and long-term success.
          </p>

          <div className="cta-buttons">
            <Link to="/contact-form1" className="text-decoration-none">
              <button className="btn-primary">Schedule a Demo</button>
            </Link>
          </div>
        </div>

        {/* RIGHT DIAGONAL STACK */}
        <div className="col-lg-6 col-12 cta-images">
          <div className="stack-wrapper">

            <div className="img-card card-1">
              <img src={Brand1} alt="" />
            </div>

            <div className="img-card card-2">
              <img src={Brand2} alt="" />
            </div>

            <div className="img-card card-3">
              <img src={Brand3} alt="" />
            </div>

          </div>
        </div>

      </div>
    </section>

          
    </>
  )
}

export default Consulting
