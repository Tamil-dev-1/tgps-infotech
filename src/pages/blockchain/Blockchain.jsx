import BlockchainLogos from "../../component/blockchainLogos/BlockchainLogos";
import "./Blockchain.css";
import Ourprocess from '../../component/ourprocess/OurProcess';

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
              src='https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg' 
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
            src="https://images.pexels.com/photos/34803972/pexels-photo-34803972.jpeg"
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
      <h2 className="dev-main-title">Comprehensive Blockchain Development Services for Every Business Need</h2>
      <p className="dev-sub-text">
        Tailored Blockchain Network Development Solutions: We build customized public, private, or hybrid blockchain architectures aligned with business goals, ensuring scalability, security, and performance. Next-Gen NFT Marketplace Development: Create advanced NFT platforms with seamless minting, trading, and engaging user experiences designed for creators, brands, and enterprises.
      </p>
    </div>

    {/* Flex Grid */}
    <div className="dev-services-flex">
      {services.map((service, index) => (
        <div className="dev-service-card" key={index}>

          <div className="icon-box">
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
              Lorem ipsum dolor sit amet Lorem.
              <br />
              Lorem ipsum dolor sit amet.
            </h2>

            <p className="banner-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolores?.
            </p>

            <button className="consult-btn">
              Consult Our Experts
            </button>
          </div>

        </div>

      </div>
    </div>


    {/* SECTION ------- 5 */}

    <BlockchainLogos />

    {/* SECTION ------- 6 */}

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
                <button className="cta-btn">
                  Get in Touch <span>●</span>
                </button>

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