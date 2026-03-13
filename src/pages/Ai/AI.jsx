import React from 'react'
import ComparisonSlider from '../../component/slider/ComparisonSlider';
import './Ai.css'
import AiImg from '../../assets/images/ai/ai.png'
import Ai_Brain from '../../assets/images/ai/aibanner4.png'
import Ai_smBrain from '../../assets/images/ai/aismbrain.png'
import Robo_Brain from '../../assets/images/ai/roboBrain.png'
import AiStacked from '../../assets/images/ai/aiStacked.png'
import { FaRobot, FaCogs, FaChartPie } from "react-icons/fa";
import { FaChartLine, FaLightbulb } from "react-icons/fa";
import { FaRocket, FaCubes, FaUsers } from "react-icons/fa";
import { useEffect } from "react";
import Particles from "react-tsparticles";
import VanillaTilt from "vanilla-tilt";
import { HiH2 } from 'react-icons/hi2';

const AI = () => {


    useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".para-card"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3
    });
  }, []);


  // SECTION ---- 3


  const stats = [
    {
      value: "15+",
      label: "Years of Experience shaping strategies with knowledge and industry insight."
    },
    {
      value: "2000+",
      label: "Global Clients highlighting our worldwide presence and long-term partnerships."
    },
    {
      value: "1000+",
      label: "Projects Delivered reflecting consistent performance and trusted delivery."
    },
    {
      value: "700+",
      label: "Experts bringing together diverse skills to deliver impactful solutions."
    }
  ];


  // SECTION ---- 9

  const models = [
    {
      title: "",
      description: "Rapid proof-of-concept delivering immediate value through targeted predictive analytics solutions.",
      icon: "🔄" // You can replace these with SVG or FontAwesome icons
    },
    {
      title: "",
      description: "End-to-end delivery of a production-ready minimum viable predictive analytics product.",
      icon: "⚙️"
    },
    {
      title: "",
      description: "Ongoing development, optimization and scaling of enterprise decision intelligence services.",
      icon: "🛡️"
    },
    {
      title: "",
      description: "Ongoing development, optimization and scaling of enterprise decision intelligence services.",
      icon: "🛡️"
    },
    {
      title: "",
      description: "Ongoing development, optimization and scaling of enterprise decision intelligence services.",
      icon: "🛡️"
    },{
      title: "",
      description: "Ongoing development, optimization and scaling of enterprise decision intelligence services.",
      icon: "🛡️"
    }
  ];


  // section --- 10


  const features = [
    { title: "Deep AI Expertise", desc: "Skilled in ML, Generative AI and agentic AI deployments" },
    { title: "Production-First Approach", desc: "Designed for reliability, observability and scalable operations" },
    { title: "Model-Agnostic Solutions", desc: "Integrates OpenAI, Anthropic, LLaMA 3, or custom AI" },
    { title: "Infrastructure & MLOps Obsessed", desc: "Continuous monitoring to prevent drift or downtime" },
    { title: "Business Outcome Focused", desc: "AI integrations designed to deliver measurable ROI" },
    { title: "Enterprise-Grade Security", desc: "Data sovereignty and robust access control for all workflows" }
  ];


  // SECTION ----- 12

   const items = [
    {
      icon: <FaRobot />,
      text: "Strategic clarity"
    },
    {
      icon: <FaCogs />,
      text: "ROI-aligned AI investments"
    },
    {
      icon: <FaChartPie />,
      text: "Enterprise control"
    }
  ];


  // SECTION ----- 13

  const services = [
{
icon: <FaChartLine />,
title: "AI Strategy Sprint",
desc: "Rapid discovery, prioritization and roadmap definition."
},
{
icon: <FaLightbulb />,
title: "Strategy-to-MVP Advisory",
desc: "Strategy support through early execution and validation."
},
{
icon: <FaCogs />,
title: "Dedicated AI Strategy Pod",
desc: "Ongoing AI strategic advisory and portfolio oversight."
}
];


// SECTION ---- 14

 const aiFeatures = [
    {
      title: "AI Designed Around Enterprise Data Realities",
      desc: "Models are grounded in governed, structured and unstructured enterprise datasets."
    },
    {
      title: "Governance-First GenAI System Architecture",
      desc: "Guardrails, access controls and auditability are embedded from day one."
    },
    {
      title: "Proven Production Deployment Frameworks",
      desc: "AI systems are engineered to perform reliably across real-world enterprise workloads."
    },
    {
      title: "Deep Domain and Workflow Alignment",
      desc: "AI solutions are mapped directly to business processes and operational decision paths."
    }
  ]

  return (
    <>

     <section className="ai-agents-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 text-white">
            <h1 className="ai-title">
              AI Agents & Copilots <br />
              Development Services for <br />
              Enterprise Automation
            </h1>

            <p className="ai-desc">
              We build Enterprise AI Agents that automate workflows and support
              role-based decisions across core business systems. Designed to run
              seamlessly across CRM, ERP, support platforms and enterprise data
              environments.
            </p>

            <ul className="ai-list">
              <li>Deploy intelligent agents faster to automate routine decisions in real time.</li>
              <li>Multi-LLM architecture with governance delivers consistent outcomes.</li>
              <li>Human-in-the-loop oversight and real-time monitoring keep AI policy aligned.</li>
            </ul>

            {/* <button className="btn ai-btn">
              Schedule a Call
            </button> */}
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={AiImg}
              alt="AI Agents"
              className="img-fluid ai-image"
            />
          </div>

        </div>
      </div>
    </section>


    {/* SECTION ------ 2    */}

      <section
  className="py-5"
  style={{
    
    transition: "0.3s",
  }}
>
  <div className="container text-center">

    {/* Badge */}
    {/* <span
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
    </span> */}

    {/* Main Heading */}
    <h1
      className="fw-bold mt-3 "
      style={{
        fontSize: "25px",
        lineHeight: "1.2",
        fontWeight: "800",
        color: "#FFFFFF",
      }}
    >
      Delivering Solutions to Market Leaders Worldwide
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

{/* SECTION ------ 3 */}

<section className="ai-stats-wrapper">
  <section className="ai-stats-banner">

    <div className="container-fluid">

      <div className="row text-center">

        {stats.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-12 ai-stat-col">

            <h2 className="ai-stat-number">{item.value}</h2>

            <p className="ai-stat-text">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </div>

  </section>
</section>


{/* SECTION ------- 4 */}

  <section className="ai-hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">

            <h1 className="ai-hero-title">
              Build Intelligent Conversational <br /> AI That Works
            </h1>

            <p className="ai-hero-desc">
              We deliver enterprise-grade Conversational AI development solutions that enable natural,
              contextual interactions. Chatbots, Voicebots and AI avatars are designed to work seamlessly
              across all enterprise channels and workflows.
            </p>

            <ul className="ai-hero-list">
              <li>Faster Responses, Lower Wait Times</li>
              <li>Knowledge-Grounded, Accurate AI Answers</li>
              <li>Seamless Human-in-the-Loop Oversight</li>
              <li>Secure, Scalable Enterprise Deployments</li>
            </ul>

            {/* <div className="ai-hero-buttons">

              <button className="btn btn-primary ai-btn-primary">
                Talk to Our AI Architect
              </button>

              <button className="btn btn-outline-light ai-btn-secondary">
                Request a Free Call
              </button>

            </div> */}

          </div>


          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center">

            <img
              src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
              alt="AI"
              className="img-fluid ai-hero-image"
            />

          </div>

        </div>
      </div>
    </section>


    {/* SECTION ------ 5 */}



     <section className="conversation-section">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
            <img
              src='https://images.pexels.com/photos/159108/light-lamp-electricity-power-159108.jpeg'
              alt="AI Conversation"
              className="img-fluid conversation-image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12">

            <h2 className="conversation-title">
              The Intelligence Behind Every Conversation
            </h2>

            <p className="conversation-text">
              Conversational AI development brings together NLP, large language models,
              speech technologies, dialogue orchestration and enterprise integrations
              to power Chatbots, Voicebots and AI avatars that understand context and intent.
            </p>

            <p className="conversation-text">
              These systems improve with real usage, connect directly to enterprise data
              and automate interactions across support, sales and internal operations,
              enabling faster, smarter and more consistent business experiences at scale.
            </p>

          </div>

        </div>

      </div>
    </section>


    {/* SECTION ------- 6 */}

    <section className="doc-section text-white text-center">

      {/* Floating particles */}
      <Particles
        className="particles-bg"
        options={{
          background: { color: "#000000" },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { speed: 1 },
            color: { value: "#C6FF00" },
            opacity: { value: 0.4 }
          }
        }}
      />

      <div className="container position-relative">

        <h1 className="main-heading">
          Intelligent Document Processing <br />
          Services for Enterprises
        </h1>

        <p className="main-para">
          Turn unstructured documents into trusted, decision-ready data using
          enterprise-grade Intelligent Document Processing built to run across
          workflows, systems and data platforms.
        </p>

        <div className="row g-4 mt-5">

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="para-card">
              <div className="para-card-inner">
                <i className="fa-solid fa-bolt icon"></i>
                <span>Faster document processing across teams</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="para-card">
              <div className="para-card-inner">
                <i className="fa-solid fa-circle-check icon"></i>
                <span>Higher data accuracy with automated validation</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="para-card">
              <div className="para-card-inner">
                <i className="fa-solid fa-chart-line icon"></i>
                <span>Full visibility into document workflows</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="para-card">
              <div className="para-card-inner">
                <i className="fa-solid fa-shield-halved icon"></i>
                <span>Controlled exception handling and governance</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* SECTION ----- 7 */}

    <section className="engage-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Design */}
          <div className="col-lg-5 text-center mb-5 mb-lg-0">
            <div className="shape-wrapper">
              <div className="shape-box box1"></div>
              <div className="shape-box box2"></div>
              <div className="circle-shape"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-7">

            <h2 className="engage-title">
              Ways to Engage with Antier
            </h2>

            <p className="engage-desc">
              Choose the engagement model that best fits your document complexity,
              scale and timelines.
            </p>

            <div className="engage-cards">

              <div className="engage-card">
                <h5>AI Sprint</h5>
                <p>Rapid IDP assessment and solution design</p>
              </div>

              <div className="engage-card">
                <h5>MVP Delivery</h5>
                <p>Production-ready Intelligent Document Processing pipeline</p>
              </div>

              <div className="engage-card">
                <h5>Dedicated AI Pod</h5>
                <p>Continuous optimization and scaling support</p>
              </div>

              <div className="engage-card">
                <h5>AI Augmentation</h5>
                <p>Extend existing automation and teams</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

    {/* SECTION ----- 8 */}

    <section className="bg-dark text-white py-5 d-flex align-items-center" style={{ backgroundColor: '#020617' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <h3 className=" text-white fw-bold mb-4">
              Predictive Analytics & <br />
              <span>Decision Intelligence Services</span>
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


    {/* SECTION ------- 9 */}

    <section className="engagement-section py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h3 className="fw-bold text-white mb-3">Our Flexible Engagement Models</h3>
          <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Choose the engagement model that best fits your business goals, timelines and maturity, 
            whether you need rapid validation, scalable delivery or continuous decision intelligence services.
          </p>
        </div>

        <div className="row g-4">
          {models.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="engagement-card h-100">
                <div className="icon-wrapper mb-3">
                  {/* Using text for demo, but icon should go here */}
                  <span className="fs-2">{item.icon}</span>
                </div>
                <p className=" fw-bold text-white mb-3">{item.title}</p>
                <p className="card-text text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION ---- 10 */}

    <section className="why-choose-combined py-5 bg-black">
      <div className="container py-5">
        {/* Header Part */}
        <div className="text-center mb-5 pb-4">
          <h3 className="fw-bold text-white mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing.</h3>
          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '800px' }}>
            Antier combines deep AI expertise with enterprise-grade MLOps solutions to make your models production-ready.
            We ensure scalable, reliable and secure AI integrations that deliver measurable business outcomes.
          </p>
        </div>

        {/* Grid Part */}
        <div className="row g-0 row-cols-1 row-cols-md-2 row-cols-lg-3 grid-container">
          {features.map((item, index) => (
            <div key={index} className="col feature-box">
              <div className="p-4 p-md-5">
                <h3 className="h5 fw-bold text-white mb-3">{item.title}</h3>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION ------ 11 */}

    <section className="ai-enterprise-section bg-black text-white">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          {/* Left Side: Image/Graphic */}
          <div className="col-lg-6">
            <div className="image-container position-relative">
              {/* Replace with your transparent AI hand image */}
              <img 
                src={Robo_Brain}
                alt="AI Intelligence" 
                className="img-fluid rounded-4 shadow-lg"
              />
              {/* Optional: Theme glow effect behind image */}
              <div className="glow-overlay"></div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4 text-white">
              From AI Experiments to <br />
              <span className="">Enterprise-Grade Intelligence</span>
            </h3>
            
            <div className="content-body">
              <p className="lead-text mb-4">
                AI Integration Services bridge the gap between standalone AI models and actionable enterprise workflows. 
                Coupled with MLOps, they ensure your AI runs reliably, scales effortlessly and continuously learns. 
                Together, they enable enterprises to operationalize AI safely and efficiently.
              </p>
              
              {/* <p className="secondary-text">
                By embedding AI directly into ERP, CRM and core operational systems, organizations move from 
                isolated insights to real-time execution. This foundation ensures AI delivers consistent value 
                under real-world enterprise workloads, governance requirements and security constraints.
              </p> */}
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* SECTION ---- 12 */}

<section className="ai-strategy-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h2 className="ai-titleS">
              
AI Strategy and Consulting Services Company
            </h2>

            <p className="ai-desc">
              AI initiatives often fail not because of ambition, but because value,
              readiness and ownership are not engineered upfront. Without structured
              AI value engineering services and feasibility checks, even well-defined
              strategies struggle to reach production.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-lg-6">

            {items.map((item, index) => (
              <div className="ai-card d-flex align-items-center" key={index}>

                <div className="ai-icon">
                  {item.icon}
                </div>

                <p className="ai-card-text">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>

    {/* SECTION ---- 13 */}

    <section className="engage-ai-section">

<div className="container">

<div className="row align-items-center g-5">

{/* LEFT IMAGE */}

<div className="col-lg-6 text-center">
<img
src={Ai_smBrain}
alt="AI Strategy"
className="img-fluid ai-engage-img"
/>
</div>

{/* RIGHT CONTENT */}

<div className="col-lg-6">

<h2 className="engage-title">
Ways to Engage Our AI Strategy Services
</h2>

<p className="engage-desc">
We offer flexible engagement models that let enterprises tap into AI
strategy consulting services exactly when and how they need, from
rapid discovery to ongoing strategic oversight.
</p>

{/* SERVICE LIST */}

{services.map((item, index) => (
<div className="engage-item d-flex" key={index}>

<div className="engage-icon">
{item.icon}
</div>

<div>
<h5 className="engage-item-title">
{item.title}
</h5>

<p className="engage-item-desc">
{item.desc}
</p>
</div>

</div>
))}

</div>

</div>

</div>

</section>

{/* SECTION ------ 14 */}

<section className="ai-engage-section py-5">
  <div className="container">
    <div className="row align-items-center g-5">

      {/* LEFT CONTENT */}
      <div className="col-lg-6 order-2 order-lg-1">

        <h2 className="section-title mb-3">
          Custom AI & GenAI Application <span>Development Services</span>
        </h2>

        <p className="section-desc mb-4">
          We offer flexible engagement models that allow enterprises to
          rapidly test, build and scale AI solutions, ensuring measurable
          outcomes, secure deployment and long-term support.
        </p>

        {/* ITEM 1 */}
        <div className="engage-item d-flex">
          <div className="icon-box">
            <FaRocket />
          </div>

          <div>
            <h5>AI Sprint</h5>
            <p>
              Rapidly validate GenAI use cases and assess potential impact
              within enterprise workflows.
            </p>
          </div>
        </div>

        <hr />

        {/* ITEM 2 */}
        <div className="engage-item d-flex">
          <div className="icon-box">
            <FaCubes />
          </div>

          <div>
            <h5>MVP Delivery</h5>
            <p>
              Build and deploy production-ready AI applications across
              enterprise systems end-to-end.
            </p>
          </div>
        </div>

        <hr />

        {/* ITEM 3 */}
        <div className="engage-item d-flex">
          <div className="icon-box">
            <FaUsers />
          </div>

          <div>
            <h5>Dedicated AI Pod</h5>
            <p>
              Embed long-term AI engineering teams to continuously develop,
              optimize and maintain systems.
            </p>
          </div>
        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="col-lg-6 text-center order-1 order-lg-2">
        <img
          src={AiStacked}
          alt="AI Platform"
          className="img-fluid ai-image"
        />
      </div>

    </div>
  </div>
</section>

    {/* SECTION ----- 15 */}

 <section className="production-ai-wrapper py-5">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src=''
              alt="AI"
              className="production-ai-image img-fluid"
            />
          </div>


          {/* RIGHT CONTENT */}
          <div className="col-lg-6">

            <h2 className="production-ai-title mb-3">
              Why Antier’s AI & GenAI Approach Works in Production
            </h2>

            <p className="production-ai-description mb-4">
              Our approach is built for enterprise reality, not experimentation,
              combining data governance, system integration and domain alignment
              to deliver AI that scales reliably in live environments.
            </p>

            {aiFeatures.map((item, index) => (
              <div key={index} className="production-ai-card">
                <h6 className="production-ai-card-title">{item.title}</h6>
                <p className="production-ai-card-text">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>

    
    </>
  )
}

export default AI
