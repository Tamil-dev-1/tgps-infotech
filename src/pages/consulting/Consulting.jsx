import React from 'react'
import './consulting.css'
import Ai_Brain from '../../assets/images/ai/aibanner4.png';
import Ai_smBrain from '../../assets/images/ai/aismbrain.png';
import Web3Img from '../../assets/images/consulting/web3.png'
import { FaUsers, FaLightbulb, FaExpandArrowsAlt, FaChartLine } from "react-icons/fa";


const Consulting = () => {

    // SECTION ---- 2

const services = [
  {
    title: "Strategic AI Consulting",
    desc: "Our strategic artificial intelligence consulting services are perfectly suited to provide businesses with an in-depth understanding of AI technology and the way to implement the same in different business processes to achieve the planned goals."
  },
  {
    title: "Defining Use Cases",
    desc: "Professionals from our artificial intelligence consulting firm collaborate with your team to appraise, evaluate and define the use cases by assessing their applicability to your industry along with their potential impact on your business."
  },
  {
    title: "Setting Up AI Infrastructure",
    desc: "Our team builds a cloud-based, robust infrastructure that is perfect for deploying and operating artificial intelligence systems without any kind of interruptions or problems along with producing the desired results."
  },
  {
    title: "Machine Learning (ML) Model Development",
    desc: "Our proficient team of AI consultants provides a comprehensive suite of solutions & services for end-to-end training of ML models and preparing them in the right way for their integration into AI-powered solutions for enterprises."
  },
  {
    title: "User Training and Support",
    desc: "Our AI solutions consultants offer complete training and support to clients after the deployment of AI-based solutions in their business processes or operations to make sure that everything runs smoothly without interruption."
  },
  {
    title: "Artificial Intelligence Software Development",
    desc: "We house a talented pool of AI software developers who take care of the complete software development process including all the necessary features and functionalities in the software to make it perfectly suitable for use."
  }
];


// SECTION ------ 4

 const features = [
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      text: "We have a team of highly trained and extensively experienced experts who develop tailored NFT marketing services enabling businesses to achieve success."
    },
    {
      icon: <FaLightbulb />,
      title: "Customized Solutions",
      text: "We understand that every business has its specific requirements. Therefore our proficient team crafts tailored solutions."
    },
    {
      icon: <FaExpandArrowsAlt />,
      title: "High Scalability",
      text: "The services offered by our ICO marketing firm are highly scalable and adaptable to the evolving needs of businesses."
    },
    {
      icon: <FaChartLine />,
      title: "Growth Oriented Strategies",
      text: "Our proficient team of blockchain marketers formulates strategies that drive growth and help businesses reach the next level."
    }
  ];

   


  return (
    <>
      {/* SECTION ----1 */}
       <section className="text-white py-5 d-flex align-items-center" style={{ backgroundColor: '#0B0B0B' }}>
            <div className="container">
              <div className="row align-items-center g-5">
                
                {/* Left Column: Content */}
                <div className="col-lg-6 order-2 order-lg-1">
                  <h3 className=" text-white fw-bold mb-4">
                    Blockchain Consulting <br />
                    <span>Company </span>
                  </h3>
                  
                  <p className="lead mb-4 text-secondary" style={{ fontSize: '1rem' }}>
                    Unlock data-driven decision-making across your workflows, systems and business 
                    operations with advanced Data & AI.
                  </p>
      
                  <ul className="list-unstyled mb-5">
                    {[
                      "Rapid data-driven insights to accelerate business decision cycles",
                      "Precise predictive analytics solutions with anomaly detection",
                      "Complete end-to-end visibility through enterprise decision intelligence",
                      "Agentic layer delivers the insights to the users where they are"
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
          <h2 className="ai-consult-title">Our AI Consulting Services</h2>
          <p className="ai-consult-subtitle">
            Antier houses a team of proficient AI consultants who offer
            result-oriented AI strategy consulting services that enable businesses
            to implement the most suitable AI solutions into various processes.
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
                Best Web 3 Consultants at Your Service
              </h2>

              <p className="web3-text">
                There has been a lot of hype around web 3 and many are still
                wondering what it is all about. To state it in simple terms,
                web 3 is nothing but the present-day internet integrated with
                blockchain-based infrastructure.
              </p>

              <p className="web3-text">
                Web 3 brings with it a wide range of opportunities for various
                industries. It is exactly the situation where Antier, one of the
                top web 3 consulting companies, comes to the rescue of
                businesses by lending a helping hand to explore the
                opportunities efficiently and effectively.
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
            Why Choose Antier’s Web 3 Marketing Services
          </h2>

          <p className="web3-why-subtitle">
            Antier is a name you can trust when it comes to selecting the best ICO marketing firm.
            We cater to the varied needs of blockchain businesses in the best possible manner.
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

          
    </>
  )
}

export default Consulting
