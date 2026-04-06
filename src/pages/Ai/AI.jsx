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
import { Cpu, Layers, Database, GitBranch } from "lucide-react";
import { useEffect } from "react";
import Particles from "react-tsparticles";
import VanillaTilt from "vanilla-tilt";
import { HiH2 } from 'react-icons/hi2';
import CTA_pattern_img from '../../assets/images/ai/cta-patternImg.png'
import Generation_img from '../../assets/images/ai/generation.png'
import DigitalAi_img from '../../assets/images/ai/digitalAi.jpg'
import Generative_img from '../../assets/images/ai/Generative.jpg'
import { Link } from 'react-router-dom';

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
      title: "AI Discovery Sprint",
      description: "Quickly validate use cases and unlock immediate value through focused AI and data-driven solution exploration.",
      icon: "🔄" // You can replace these with SVG or FontAwesome icons
    },
    {
      title: "Full-Scale Solution Delivery",
      description: "End-to-end implementation of production-ready AI and analytics systems designed for scalability and performance.",
      icon: "⚙️"
    },
    {
      title: "Managed AI Services",
      description: "Continuous monitoring, enhancement, and scaling of AI-driven decision intelligence across enterprise operations.",
      icon: "🛡️"
    },
    {
      title: "Innovation Acceleration",
      description: "Drive faster experimentation and rollout of advanced AI capabilities across business units.",
      icon: "🚀 "
    },
    {
      title: "System Integration & Expansion",
      description: "Seamlessly extend existing platforms with AI-powered features and intelligent automation..",
      icon: "🔗"
    },{
      title: "Continuous Optimization & Growth",
      description: "Enhance performance, improve accuracy, and scale solutions with ongoing data-driven refinements.",
      icon: "📈"
    }
  ];


  // section --- 10


  const features = [
    { title: "Advanced AI Capabilities", desc: "Expertise across machine learning, generative AI, and intelligent agent-based systems" },
    { title: "Deployment-Ready Architecture", desc: "Engineered for scalability, stability, and seamless production environments" },
    { title: "Flexible AI Model Integration", desc: "Compatible with multiple AI frameworks and adaptable to custom-built models" },
    { title: "Robust Infrastructure & MLOps", desc: "Continuous monitoring, optimization, and lifecycle management for AI systems" },
    { title: "Results-Driven Implementation", desc: "Solutions designed to deliver tangible outcomes and business growth" },
    { title: "Enterprise-Level Security & Compliance", desc: "Strong data protection, governance, and access control across all systems" }
  ];


  // SECTION ----- 12

   const items = [
    {
      icon: <FaRobot />,
      text: "Clear strategic direction and actionable AI roadmaps"
    },
    {
      icon: <FaCogs />,
      text: "Outcome-driven investments aligned with measurable ROI "
    },
    {
      icon: <FaChartPie />,
      text: "Strong governance, ownership, and enterprise-level control"
    }
  ];


  // SECTION ----- 13

  const services = [
{
icon: <FaChartLine />,
title: "AI Discovery Sprint",
desc: "Focused assessment, use-case identification, and strategic roadmap creation"
},
{
icon: <FaLightbulb />,
title: "Strategy-to-Execution Advisory",
desc: "Guidance from strategy formulation through early-stage implementation and validation"
},
{
icon: <FaCogs />,
title: "Dedicated AI Strategy Team",
desc: "Continuous advisory, performance tracking, and enterprise-wide AI portfolio management"
}
];


// SECTION ---- 15

 const aiFeatures = [
    {
      title: "Built on Enterprise-Grade Data Foundations",
      desc: "AI models are trained and deployed using well-managed, structured, and unstructured enterprise data sources"
    },
    {
      title: "Governance-Centric GenAI Architecture",
      desc: "Security controls, compliance frameworks, and full auditability are embedded from the ground up"
    },
    {
      title: "Proven Frameworks for Real-World Deployment",
      desc: "AI solutions are engineered to deliver consistent performance across complex enterprise workloads"
    },
    {
      title: "Aligned with Business Processes & Decisions",
      desc: "AI systems are tightly integrated with workflows and decision-making pathways to drive real impact"
    }
  ]


  // SECTION ------ 17


const serviceses = [
    {
      icon: <Cpu size={42} />,
      text: "Structured model management with clear version control, approvals, and ownership tracking "
    },
    {
      icon: <Layers size={42} />,
      text: "Custom AI governance platforms aligned with enterprise architecture and organizational needs "
    },
    {
      icon: <Database size={42} />,
      text: "Unified visibility through centralized AI asset inventory and risk categorization "
    },
    {
      icon: <GitBranch size={42} />,
      text: "Governance processes integrated with leadership oversight and regulatory compliance frameworks"
    }
  ];

  return (
    <>

     <section className="ai-agents-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 text-white">
            <h1 className="ai-title">
              Enterprise AI Agents & Copilot Solutions
           Intelligent Automation Services for <br /> Modern Businesses
            </h1>

            <p className="ai-desc">
              We develop enterprise-grade AI agents that streamline operations and enable context-aware, role-based decision-making across critical business systems. Built to integrate seamlessly with CRM, ERP, customer support platforms, and enterprise data environments.
            </p>

            <ul className="ai-list">
              <li>Accelerate deployment of intelligent agents to automate repetitive tasks and real-time decision workflows.</li>
              <li>Multi-model AI architecture with built-in governance ensures reliable and consistent performance.</li>
              <li>Human-in-the-loop control and live monitoring maintain accuracy, compliance, and operational alignment.</li>
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
     Delivering Intelligent Solutions to Global Innovators
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
     Be part of the future-ready digital ecosystem
    </p>

  </div>
</section>

<ComparisonSlider />

{/* SECTION ------ 3 */}

{/* <section className="ai-stats-wrapper">
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
</section> */}


{/* SECTION ------- 4 */}

 <section>
   <div className="ai-hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">

            <h1 className="ai-hero-title">
             Next-Generation Conversational. <br /> AI for Smarter Engagement
            </h1>

            <p className="ai-hero-desc">
              We create advanced conversational AI systems that deliver intelligent, context-aware interactions across digital touchpoints. From chat interfaces to voice assistants and virtual AI personas, our solutions integrate seamlessly into enterprise platforms and business workflows.
            </p>

            <ul className="ai-hero-list">
              <li>Instant, efficient interactions that improve response speed and user experience</li>
              <li>Context-driven AI responses powered by structured knowledge systems </li>
              <li>Integrated human oversight for enhanced control and decision accuracy </li>
              <li>Robust, secure, and scalable solutions built for enterprise environments</li>
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
              src={Generation_img}
              alt="AI"
              className="img-fluid ai-hero-image"
            />

          </div>

        </div>
      </div>
    </div>

    
    {/* SECTION ------ 5 */}



     <div className="conversation-section">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
            <img
              src={DigitalAi_img}
              alt="AI Conversation"
              className="img-fluid conversation-image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12">

            <h2 className="conversation-title">
              The Technology Powering Intelligent Digital Interactions
            </h2>

            <p className="conversation-text">
             Conversational AI combines natural language understanding, advanced AI models, speech recognition, and dialogue management frameworks with deep enterprise integrations to power chat interfaces, voice assistants, and virtual AI experiences that accurately interpret user intent and context.
            </p>

            <p className="conversation-text">
             These systems continuously learn from real-world interactions, integrate seamlessly with enterprise data sources, and automate communication across customer support, sales, and internal workflows—delivering faster responses, improved decision-making, and consistent, scalable user experiences across the organization.
            </p>

          </div>

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
      Intelligent Data Processing & Automation <br /> Solutions for Enterprises
        </h1>

        <p className="main-para">
         Convert complex, unstructured data into actionable business intelligence with advanced AI-powered processing systems designed to integrate seamlessly across enterprise workflows, platforms, and data environments.
Leverage intelligent automation to streamline document handling, enhance accuracy, and enable faster, data-driven decision-making across your organization.
        </p>

        <div className="row g-4 mt-5">

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="para-card">
              <div className="para-card-inner">
                <i className="fa-solid fa-bolt icon"></i>
                <span>Faster data processing across business operations</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="para-card">
              <div className="para-card-inner">
                <i className="fa-solid fa-circle-check icon"></i>
                <span>Enhanced accuracy with AI-driven validation systems</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="para-card">
              <div className="para-card-inner">
                <i className="fa-solid fa-chart-line icon"></i>
                <span>Complete visibility across data and workflow pipelines</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="para-card">
              <div className="para-card-inner">
                <i className="fa-solid fa-shield-halved icon"></i>
                <span>Controlled exception management with built-in governance</span>
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
              Flexible Engagement Models for Enterprise AI Solutions
            </h2>

            <p className="engage-desc">
              Select the ideal collaboration approach tailored to your business needs, complexity, and growth timelines to accelerate intelligent automation adoption.
            </p>

            <div className="engage-cards">

              <div className="engage-card">
                <h5>AI FastTrack</h5>
                <p>Accelerated discovery, use-case validation, and solution blueprinting</p>
              </div>

              <div className="engage-card">
                <h5>Production Launch</h5>
                <p>End-to-end deployment of scalable, enterprise-ready AI processing systems</p>
              </div>

              <div className="engage-card">
                <h5>Dedicated AI Team</h5>
                <p>Ongoing optimization, performance tuning, and continuous innovation support</p>
              </div>

              <div className="engage-card">
                <h5>AI Capability Expansion</h5>
                <p>Enhance existing systems and empower teams with advanced AI integration</p>
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
              Advanced Predictive Analytics & <br /> 
              <span>Business Intelligence Solutions</span>
            </h3>
            
            <p className="lead mb-4 text-secondary" style={{ fontSize: '1rem' }}>
             Enable smarter, faster decision-making across your organization by leveraging powerful data analytics and AI-driven intelligence integrated into your core systems and workflows.
            </p>

            <ul className="list-unstyled mb-5">
              {[
                "Real-time insights that accelerate decision-making and business agility ",
                "Advanced predictive models with anomaly detection for proactive actions ",
                "End-to-end visibility across operations with unified intelligence systems",
                "Context-aware delivery of insights directly within user workflows"
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
          <h3 className="fw-bold text-white mb-3">Scalable Engagement Models for AI & Data Solutions</h3>
          <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Select the right partnership model aligned with your business stage, technical complexity, and growth roadmap—whether you need rapid validation, full-scale deployment, or continuous intelligence optimization.
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
          <h3 className="fw-bold text-white mb-3">Building Scalable AI Systems for Real-World Impact.</h3>
          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '800px' }}>
            We combine advanced AI engineering with enterprise-grade deployment frameworks to turn intelligent models into reliable, production-ready solutions. Our approach ensures scalable, secure, and high-performance AI integrations that deliver measurable business value.
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
             From AI Prototypes to <br />
              <span className="">Scalable Enterprise Intelligence</span>
            </h3>
            
            <div className="content-body">
              <p className="lead-text mb-4">
                AI integration services transform isolated AI models into fully operational business solutions embedded within real-world workflows. Combined with robust MLOps practices, they ensure consistent performance, seamless scalability, and continuous model improvement. Together, they empower organizations to deploy, manage, and scale AI solutions with reliability, security, and measurable impact.
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
              
AI Strategy & Advisory Services for Enterprises
            </h2>

            <p className="ai-desc">
              AI initiatives don’t fail due to lack of vision—they fail when alignment, execution readiness, and ownership are not clearly defined from the start. Without structured evaluation, value mapping, and feasibility validation, even strong AI strategies struggle to translate into real business outcomes.
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
Engagement Models for AI Strategy & Advisory Services
</h2>

<p className="engage-desc">
Choose a flexible engagement approach designed to support your AI journey at every stage—from initial exploration to continuous strategic governance and long-term value realization.
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

        <h2 className=" mb-3">
          Custom AI & Generative AI Application
  Development Solutions
        </h2>

        <p className="section-desc mb-4">
         We provide flexible engagement models that enable enterprises to quickly experiment, build, and scale AI-driven applications—ensuring measurable business impact, secure implementation, and continuous lifecycle support.
        </p>

        {/* ITEM 1 */}
        <div className="engage-item d-flex">
          <div className="icon-box">
            <FaRocket />
          </div>

          <div>
            <h5>AI Acceleration Sprint</h5>
            <p>
              Quickly explore and validate high-impact GenAI use cases within real business environments
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
            <h5>Production-Ready Deployment</h5>
            <p>
              Design, develop, and launch end-to-end AI applications integrated across enterprise systems
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
            <h5>Dedicated AI Engineering Team</h5>
            <p>
             Long-term collaboration with expert teams to enhance, scale, and maintain AI solutions continuously
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
              src={Generative_img}
              alt="AI"
              className="production-ai-image img-fluid"
            />
          </div>


          {/* RIGHT CONTENT */}
          <div className="col-lg-6">

            <h2 className="production-ai-title mb-3">
              Why Our AI & Generative AI Approach Delivers at Scale
            </h2>

            <p className="production-ai-description mb-4">
              Our methodology is designed for real-world enterprise environments—not just experimentation—integrating data governance, seamless system connectivity, and deep business alignment to ensure AI solutions perform reliably in production.
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


    {/* SECTION ---- 16 */}

    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 col-md-12 hero-left">
            <h1 style={{fontSize:"28px"}}>
             Enterprise AI Security & Governance <br />
              
            </h1>

            <p className="hero-desc">
              Built for Risk Management and Compliance, Our AI security and governance solutions enable organizations to deploy trusted, compliant, and transparent AI systems while maintaining agility and innovation across business operations.
            </p>

            <ul className="hero-list">
              <li>Robust protection for AI systems and sensitive data environments</li>
              <li>Compliance-ready frameworks aligned with global regulations and standards </li>
              <li>Scalable responsible AI practices with built-in oversight and control</li>
            </ul>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6 col-md-12 text-center">
            <img src={AiStacked} alt="AI Security" className="hero-img img-fluid"/>
          </div>

        </div>
      </div>
    </section>

    {/* SECTION ------- 17 */}

   <section className="ai-governance pb-2">
      <div className="container text-center">

        <h2 className="title-bottom">
          Enterprise AI Governance Solutions That Drive 
          <br />
          Visibility and Operational Control
        </h2>

        <p className="subtitle">
          We build comprehensive AI governance frameworks that provide organizations with end-to-end transparency, accountability, and lifecycle management across all AI systems.
        </p>

        <div className="row governance-row mt-5">

          {serviceses.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12 governance-col" key={index}>
              <div className="governance-card">

                <div className="icon-box">
                  {item.icon}
                </div>

                <p>{item.text}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>


    {/* CTA SECTION  */}

     <div className="hero-wrappers d-flex align-items-center">
      <div className="container">
        <div className="hero-box row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-7 col-12">
            <h1 className="ai-cta-title">
              Build Intelligent AI Agents with Full Control
            </h1>

            <p className="hero-subtitle">
              Ready to discover how AI agents can transform your business operations? Let’s connect and explore the possibilities.
            </p>

            <div className="d-flex gap-3 flex-wrap mt-4">
             <Link to="/contact-form1" className="text-decoration-none">
               <button className="cta-btn">
               Connect <span>●</span>
               </button>
             </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mt-5 mt-md-0">
           <div className='hero-image-wrapper'>
             <img
              src={CTA_pattern_img}
              alt="AI visual"
              className="hero-image img-fluid"
            />
           </div>
          </div>

        </div>
      </div>
    </div>

    
    </>
  )
}

export default AI
