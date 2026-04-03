import BlockchainLogos from "../../component/blockchainLogos/BlockchainLogos";
import "./Blockchain.css";
import Ourprocess from '../../component/ourprocess/OurProcess';

import BlockChain_Tech from '../../assets/images/blockchain/blockchain_tech.jpg'
import Decenter_Tech from '../../assets/images/blockchain/empower.jpg'
import Management_Img from '../../assets/images/blockchain/management.jpg'
import Smart_Img from '../../assets/images/blockchain/smart.jpg'
import Lap_Img from '../../assets/images/blockchain/lap.jpeg'

import { Link } from "react-router-dom";

export default function BlockchainHero() {

  // THIRD SECTION 3 - SERVICE SECTION 

  const services = [
  {
    title: "Secure & Automated Smart Contract Engineering",
    desc: "Develop reliable and tamper-proof smart contracts that automate processes, reduce risks, and eliminate the need for intermediaries.",
    icon: "bi bi-sliders"
  },
  {
    title: "Decentralized Physical Infrastructure (DePIN) Development",
    desc: "Build blockchain-powered infrastructure networks that connect physical assets with digital systems, enabling transparency and operational efficiency.",
    icon: "bi bi-shop"
  },
  {
    title: "AI-Integrated Blockchain Application Development",
    desc: "Leverage the power of artificial intelligence combined with blockchain to build intelligent, adaptive, and self-optimizing decentralized applications.",
    icon: "bi bi-file-earmark-text"
  },
  {
    title: "Strategic Blockchain Consulting & System Integration Services",
    desc: "Get expert guidance to adopt blockchain technology and seamlessly integrate it into your existing infrastructure for accelerated digital transformation.",
    icon: "bi bi-diagram-3"
  },
  {
    title: "Delivering Innovation Through Cutting-Edge Blockchain Expertise",
    desc: "We build scalable, secure, and future-ready blockchain solutions that help businesses stay ahead in the rapidly evolving digital economy.",
    icon: "bi bi-lightbulb"
  },
  {
    title: "Empowering Businesses with Reliable and Scalable Web3 Technologies",
    desc: "Our solutions are designed to enhance efficiency, trust, and growth by leveraging the full potential of decentralized technologies.",
    icon: "bi bi-arrow-left-right"
  },
  {
    title: "High-Performance Crypto Exchange Development",
    desc: "Develop secure and scalable cryptocurrency exchanges with advanced trading features, liquidity solutions, and robust security mechanisms.",
    icon: "bi bi-currency-bitcoin"
  },
   {
    title: "Multi-Asset Crypto Wallet Development Solutions",
    desc: "Create secure, user-friendly wallets that support multiple digital assets with seamless transactions and enhanced user control.",
    icon: "bi bi-building"
  },
    {
    title: "Enterprise-Grade Blockchain Transformation Solutions",
    desc: "Empower enterprises with blockchain systems that improve data integrity, streamline workflows, and enhance operational transparency.",
    icon: "bi bi-link-45deg"
  }
];

const services2 = [
  {
    title: "Privacy Preservation",
    desc: "Blockchain and AI-driven identity systems empower individuals with full ownership of their personal data through self-sovereign identity (SSI) frameworks. Users can selectively share information based on context and need, significantly minimizing risks related to unauthorized access and data misuse.",
    icon: "bi bi-sliders"
  },
  {
    title: "Elimination of Single Point of Failure",
    desc: "Decentralized identity infrastructure removes dependency on centralized systems by distributing data across secure blockchain networks. Individuals retain their own credentials and can interact directly within ecosystems without relying on intermediaries or single governing authorities.",
    icon: "bi bi-shop"
  },
  {
    title: "Interoperability",
    desc: "Blockchain-based identity solutions provide a unified framework for authentication and verification across multiple platforms. This enables seamless interoperability between systems, supporting efficient data exchange and integration across diverse digital environments.",
    icon: "bi bi-file-earmark-text"
  },
  {
    title: "Easy Accessibility",
    desc: "Decentralized identity platforms create opportunities for individuals without traditional identification systems by offering portable and borderless digital identities. This approach enhances inclusivity and supports broader access to digital and financial ecosystems..",
    icon: "bi bi-diagram-3"
  },
  {
    title: "Enhanced Security",
    desc: "Advanced cryptographic mechanisms within blockchain ensure high levels of data protection and integrity. Combined with decentralized consensus models, these systems are highly resistant to tampering, fraud, and identity-related threats.",
    icon: "bi bi-lightbulb"
  },
  {
    title: "User Control",
    desc: "Digital identity solutions built on blockchain allow users to manage permissions, revoke access, and control how their data is utilized. This establishes a transparent and trust-driven identity ecosystem centered around user authority.",
    icon: "bi bi-arrow-left-right"
  },
  {
    title: "Cost Efficiency",
    desc: "By removing intermediaries and automating verification processes, blockchain-based identity infrastructure significantly reduces operational and compliance costs while improving efficiency across identity management workflows.",
    icon: "bi bi-currency-bitcoin"
  },
   {
    title: "Compliance with Regulations",
    desc: "Blockchain-enabled identity systems are designed to align with global data protection standards, incorporating features such as consent management, secure data portability, and privacy-focused verification mechanisms.",
    icon: "bi bi-building"
  },
    {
    title: "Scalability",
    desc: "Modern blockchain identity infrastructures are built to handle increasing user demand and transaction volumes efficiently, ensuring scalability while maintaining performance, security, and reliability across large-scale digital ecosystems.",
    icon: "bi bi-link-45deg"
  }
];


const services3 = [
  {
    title: "Understand",
    desc: "Our white paper specialists begin by gaining a comprehensive understanding of your project—including the core problem, proposed solution, technical architecture, and business strategy—to define a clear direction for the document.",
    icon: "bi bi-sliders"
  },
  {
    title: "Research",
    desc: "We conduct in-depth research tailored to your project, gathering relevant market data, industry insights, and statistical evidence to strengthen the credibility and impact of your white paper.",
    icon: "bi bi-shop"
  },
  {
    title: "Content Creation",
    desc: "With a strong research foundation, we adopt a structured and design-thinking approach to craft clear, concise, and impactful content that effectively communicates your project’s value proposition to investors and stakeholders.",
    icon: "bi bi-file-earmark-text"
  },
  {
    title: "Design",
    desc: "Following content development, our design team enhances the white paper with visually engaging layouts, ensuring a seamless blend of content and design elements such as typography, color systems, and graphical assets aligned with your brand identity.",
    icon: "bi bi-diagram-3"
  },
  {
    title: "Delivery",
    desc: "We deliver a professionally structured, visually refined, and insight-driven white paper tailored to your business goals and market positioning.",
    icon: "bi bi-lightbulb"
  },
  

];


const services4 = [
  {
    title: "Smart Contract Development",
    desc: "We develop advanced, self-executing smart contracts with robust features that enhance automation, flexibility, and performance across diverse Web3 and enterprise use cases.",
    icon: "bi bi-sliders"
  },
  {
    title: "Smart Contract Architecture",
    desc: "Our smart contract solutions are built on resilient and scalable architectures, ensuring high code quality, predictability, and seamless adaptability across dynamic digital infrastructures.",
    icon: "bi bi-file-earmark-text"
  },
  {
    title: "Smart Contract Audit",
    desc: "We provide comprehensive auditing services to identify vulnerabilities, enhance security, and ensure the reliability of smart contract code with precision and efficiency.",
    icon: "bi bi-file-earmark-text"
  },
  {
    title: "Smart Contract Optimization",
    desc: "Our optimization strategies focus on improving performance, reducing transaction costs, and enhancing computational efficiency through advanced smart contract engineering practices.",
    icon: "bi bi-diagram-3"
  },
  {
    title: "AI-Powered Smart Contract Development",
    desc: "We build next-generation smart contracts integrated with AI-driven logic to enhance automation, decision-making, and overall system performance across multiple industries.",
    icon: "bi bi-lightbulb"
  },

    {
    title: "Integration Services",
    desc: "Our solutions include seamless integration of smart contracts with existing enterprise systems and third-party platforms to improve operational efficiency and data accuracy.",
    icon: "bi bi-lightbulb"
  },

    {
    title: "Post-Deployment Support Services",
    desc: "Our engagement extends beyond deployment with continuous monitoring, maintenance, and upgrades to ensure long-term performance and stability of smart contract systems.",
    icon: "bi bi-lightbulb"
  },

      {
    title: "Guidance on Regulatory Compliance",
    desc: "Our experienced team provides end-to-end guidance to help businesses navigate regulatory frameworks, ensuring compliance and alignment with global blockchain and digital standards.",
    icon: "bi bi-lightbulb"
  },
  

];


  return (
    <>
       <section className="bc-hero-section">
      <div className="container">

        <div className="bc-hero-flex">

          {/* LEFT CONTENT */}
          <div className="bc-hero-left">

            <h1 className="bc-hero-title">
              <span style={{ color: "#C6FF00" }}>Advanced Blockchain Solutions </span> & Web3 Development Company<br />
              Company
            </h1>

            <p className="bc-hero-desc">
              Build next-generation digital ecosystems with scalable, secure, and high-performance blockchain solutions tailored for modern businesses.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="bc-hero-visual">

            <img 
              src={BlockChain_Tech} 
              alt="blockchain"
              className="bc-hero-img"
            />

          </div>

        </div>

      </div>
    </section>

    {/* // SECTION ----- 2 */}

<section className="enterprise-section">
  <div className="container">

    <div className="enterprise-flex">

      {/* LEFT IMAGE */}
      <div className="enterprise-left">

        <div className="video-image-wrapper">
          <img
            src={Decenter_Tech}
            alt="Blockchain Video"
            className="video-thumbnail"
          />

          {/* Play Button */}
          {/* 
          <div className="play-btn">
            <span>▶</span>
          </div> 
          */}

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="enterprise-right">

        <h2 className="enterprise-title">
          We empower businesses to evolve and scale by unlocking the full potential of blockchain technology, delivering intelligent decentralized solutions that enhance transparency, efficiency, and trust across industries
        </h2>

        <p className="enterprise-text">
          Our approach focuses on building high-performance blockchain infrastructure that is fast, cost-effective, and energy-efficient, enabling seamless global scalability and real-world integration.
        </p>

        <p className="enterprise-text">
           By combining blockchain with advanced technologies like artificial intelligence and real-world data systems, we create powerful decentralized ecosystems that drive innovation, automation, and measurable business value. 
        </p>

        <p className="enterprise-text">
           From startups to large enterprises, we provide end-to-end blockchain development services designed to help organizations build secure, scalable, and future-ready Web3 solutions that accelerate growth and digital transformation.
        </p>

      </div>

    </div>

  </div>
</section>

{/* SRECTION ------ 3 */}

<section className="development-service py-5">
  <div className="container">

    {/* Heading */}
    <div className="dev-heading">
      <h2 className="dev-main-title">Comprehensive Blockchain Development <br /> Services for Every Business Need</h2>
      <p className="dev-sub-text">
        Tailored Blockchain Network Development Solutions: We build customized public, private, or hybrid blockchain architectures aligned with business goals, ensuring scalability, security, and performance. Next-Gen NFT Marketplace Development: Create advanced NFT platforms with seamless minting, trading, and engaging user experiences designed for creators, brands, and enterprises.
      </p>
    </div>

    {/* Flex Grid */}
    <div className="dev-services-flex">
      {services.map((service, index) => (
        <div className="dev-service-card" key={index}>

          <div className="icon-boxB">
            <i className={service.icon}></i>
          </div>

          <h5 className="service-title">
            {service.title}
          </h5>

          <p className="service-text">
            {service.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>

    {/* SECTION ----- 4 */}

          <div className="banner-wrapper">
      <div className="container-fluid banner-container">

        <div className="blockchain-banner text-center d-flex align-items-center justify-content-center">

          <div className="banner-content">
            <h2 className="banner-title">
              Leverage our Web3 and blockchain development 
              <br />
              expertise to build future-ready solutions
            </h2>

            <p className="banner-subtitle">
             Accelerate your growth with secure, scalable, and intelligence-driven digital infrastructures.
            </p>

            <button className="consult-btn">
              Talk to Our Experts
            </button>
          </div>

        </div>

      </div>
    </div>

{/* SECTION ------ 5 */}

    <section className="enterprise-section">
  <div className="container">
    <h2 className="text-center text-white mb-5">Blockchain In Identity Management</h2>

    <div className="enterprise-flex">

      {/* LEFT IMAGE */}
      <div className="enterprise-left">

        <div className="video-image-wrapper">
          <img
            src={Management_Img}
            alt="Blockchain Video"
            className="video-thumbnail"
          />

          {/* Play Button */}
          {/* 
          <div className="play-btn">
            <span>▶</span>
          </div> 
          */}

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="enterprise-right">

        <h2 className="enterprise-title">
         Harnessing Blockchain and AI for Secure Digital Identity Infrastructure
        </h2>

        <p className="enterprise-text">
         In today’s evolving digital ecosystem, the transformation of identity management and credential systems has enabled seamless access to essential data, including academic records, workforce credentials, compliance documents, and enterprise identities. However, the critical challenge remains in ensuring the protection, privacy, and integrity of this highly sensitive digital information.
        </p>

        <p className="enterprise-text">
          To address this, forward-thinking governments, enterprises, and institutions are increasingly adopting blockchain and AI-powered solutions as a robust foundation for building secure, scalable, and decentralized digital identity infrastructures, thereby strengthening trust and operational efficiency. This strategic adoption reflects a deeper commitment to enabling data security, intelligent systems, and reliable digital experiences across the global ecosystem. 
        </p>

    

      </div>

    </div>

  </div>
</section>

{/* SECTION ------- 6 */}

<section className="development-service py-5">
  <div className="container">

    {/* Heading */}
    <div className="dev-heading">
      <h2 className="dev-main-title">Benefits of Blockchain for Identity Infrastructure</h2>
      <p className="dev-sub-text">
        Blockchain-powered decentralized identity infrastructures effectively overcome existing limitations, enabling a more secure, intelligent, and scalable approach to digital identity management.
      </p>
    </div>

    {/* Flex Grid */}
    <div className="dev-services-flex">
      {services2.map((services, index) => (
        <div className="dev-service-card" key={index}>

          <div className="icon-boxB">
            <i className={services.icon}></i>
          </div>

          <h5 className="service-title">
            {services.title}
          </h5>

          <p className="service-text">
            {services.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>


{/* SECTION ------ 7 */}

    <section className="enterprise-section">
  <div className="container">
    <h2 className="text-center text-white mb-5">White Paper Development</h2>

    <div className="enterprise-flex">

      {/* LEFT IMAGE */}
      <div className="enterprise-left">

        <div className="video-image-wrapper">
          <img
            src={Lap_Img}
            alt="Blockchain Video"
            className="video-thumbnail"
          />

          {/* Play Button */}
          {/* 
          <div className="play-btn">
            <span>▶</span>
          </div> 
          */}

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="enterprise-right">

        <h2 className="enterprise-title">
        Strategic White Paper Development for Web3 and AI Solutions
        </h2>

        <p className="enterprise-text">
         A white paper is a strategic, insight-driven, and comprehensive document that articulates a business concept by defining a problem and presenting a well-structured solution. In today’s digital economy, white papers play a critical role in establishing industry authority, strengthening credibility, and showcasing thought leadership. With data-backed insights and forward-looking perspectives, a well-crafted white paper becomes a powerful asset to position your Web3 or AI project and capture stakeholder and investor attention.
        </p>

        <p className="enterprise-text">
         Developing a high-impact white paper requires extensive research, technical expertise, and a deep understanding of system architecture, token models, and intelligent infrastructures. At TGPS Infotech, our white paper specialists collaborate closely with domain experts to create technically sound, insight-rich documents supported by validated data and strategic narratives. Beyond content, our process includes advanced design integration to ensure the document is not only informative but also visually engaging and aligned with modern digital standards.
        </p>
        <p className="enterprise-text">
           Position your brand as an innovation leader and establish a strong foundation for your Web3 or AI-driven initiative with our purpose-driven white paper development services.
        </p>

    

      </div>

    </div>

  </div>
</section>


{/* SECTION ------- 8 */}

<section className="development-service py-5">
  <div className="container">

    {/* Heading */}
    <div className="dev-heading">
      <h2 className="dev-main-title">Our White Paper Development Process</h2>
      <p className="dev-sub-text">
       A well-structured white paper must effectively communicate technical depth while remaining accessible to a broader audience. At TGPS Infotech, we develop white papers that combine technical accuracy with clarity, ensuring they resonate with both industry experts and general stakeholders.
      </p>
    </div>

    {/* Flex Grid */}
    <div className="dev-services-flex">
      {services3.map((services3, index) => (
        <div className="dev-service-card" key={index}>

          <div className="icon-boxB">
            <i className={services3.icon}></i>
          </div>

          <h5 className="service-title">
            {services3.title}
          </h5>

          <p className="service-text">
            {services3.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>


{/* SECTION ------ 9 */}

    <section className="enterprise-section">
  <div className="container">
    <h2 className="text-center text-white mb-5">Smart Contract</h2>

    <div className="enterprise-flex">

      {/* LEFT IMAGE */}
      <div className="enterprise-left">

        <div className="video-image-wrapper">
          <img
            src={Smart_Img}
            alt="Blockchain Video"
            className="video-thumbnail"
          />

          {/* Play Button */}
          {/* 
          <div className="play-btn">
            <span>▶</span>
          </div> 
          */}

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="enterprise-right">

        <h2 className="enterprise-title">
        Tailored DeFi Smart Contract Development for Transparent and Intelligent Financial Systems
        </h2>

        <p className="enterprise-text">
         TGPS Infotech, with its extensive expertise in blockchain and intelligent digital infrastructures, develops customized smart contracts across leading blockchain ecosystems such as Ethereum, Hyperledger, and other advanced networks.
        </p>

        <p className="enterprise-text">
        Our specialized DeFi smart contract development services are strategically designed to optimize, secure, and automate complex financial workflows, enabling greater operational efficiency, enhanced transparency, and trust-driven decentralized financial ecosystems.
        </p>
        <p className="enterprise-text">
           Our End-to-End Smart Contract Development Solutions
TGPS Infotech empowers businesses to automate complex workflows by delivering secure, scalable, and future-ready smart contract solutions tailored to evolving industry demands and digital ecosystems.
        </p>

    

      </div>

    </div>

  </div>
</section>


{/* SECTION ------- 10 */}

<section className="development-service py-5">
  <div className="container">

    {/* Heading */}
    <div className="dev-heading">
      <h2 className="dev-main-title">Smart Contract Advisory & Consulting</h2>
      <p className="dev-sub-text">
      Our expert advisory and consulting services help businesses understand and strategically implement blockchain-based smart contracts to drive automation, efficiency, and intelligent operations.
      </p>
    </div>

    {/* Flex Grid */}
    <div className="dev-services-flex">
      {services4.map((services4, index) => (
        <div className="dev-service-card" key={index}>

          <div className="icon-boxB">
            <i className={services4.icon}></i>
          </div>

          <h5 className="service-title">
            {services4.title}
          </h5>

          <p className="service-text">
            {services4.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>




    {/* SECTION ------- 11 */}

    <BlockchainLogos />

    {/* SECTION ------- 12 */}

    <Ourprocess />

    {/* CTA SECTION  */}

    <section className="cta-section">
      <div className="container">
        <div className="cta-box">

          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="cta-title">
                Let’s Build Scalable Digital Solutions Together
              </h2>

              <p className="cta-text">
                Your technology should accelerate your growth, not limit it. Partner with us to create powerful blockchain solutions that drive innovation and long-term success.
              </p>

              <div className="cta-buttons">
                <Link to="/contact-form1" className="text-decoration-none">
                <button className="cta-btn">
                  Get in Touch <span>●</span>
                </button>
                </Link>

                {/* <button className="cta-btn">
                  Start Project <span>●</span>
                </button> */}
              </div>
            </div>

            {/* RIGHT DESIGN */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="cta-circle"></div>
            </div>

          </div>

        </div>
      </div>
    </section>

    </>
  );



}