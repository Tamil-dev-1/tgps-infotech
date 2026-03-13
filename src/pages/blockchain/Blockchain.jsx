import BlockchainLogos from "../../component/blockchainLogos/BlockchainLogos";
import "./Blockchain.css";
import Ourprocess from '../../component/ourprocess/OurProcess';

export default function BlockchainHero() {

  // THIRD SECTION - SERVICE SECTION 

  const services = [
  {
    title: "Custom Blockchain Development",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the",
    icon: "bi bi-sliders"
  },
  {
    title: "NFT Marketplace Development",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the.",
    icon: "bi bi-shop"
  },
  {
    title: "Smart Contract Development",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the.",
    icon: "bi bi-file-earmark-text"
  },
  {
    title: "DePIN Development",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the",
    icon: "bi bi-diagram-3"
  },
  {
    title: "AI-Powered Blockchain Development",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the.",
    icon: "bi bi-lightbulb"
  },
  {
    title: "Exchange Development",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the",
    icon: "bi bi-arrow-left-right"
  },
  {
    title: "Crypto Wallet Development",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the.",
    icon: "bi bi-currency-bitcoin"
  },
   {
    title: "Enterprise Blockchain Development",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the.",
    icon: "bi bi-building"
  },
    {
    title: "Blockchain Consultation & Integration",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the.",
    icon: "bi bi-link-45deg"
  }
];
  return (
    <>
       <section className="bc-hero-section pt-5">
      <div className="container">

        <div className="bc-hero-flex">

          {/* LEFT CONTENT */}
          <div className="bc-hero-left">

            <h1 className="bc-hero-title">
              <span style={{ color: "#C6FF00" }}>Blockchain</span> Development <br />
              Company
            </h1>

            <p className="bc-hero-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              reiciendis voluptate quibusdam, eos maxime voluptatum distinctio
              esse non cumque accusamus.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam
          tempore molestias modi nostrum? Facilis.
        </h2>

        <p className="enterprise-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quaerat aperiam doloribus quas ex eos ipsum dolores qui labore veniam!
        </p>

        <p className="enterprise-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat
          animi dolorum possimus, repellat vitae a ducimus ipsam amet maxime.
        </p>

        <p className="enterprise-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          quidem dolore fuga libero culpa? Nulla possimus, libero tempora quis
          omnis delectus culpa sequi ipsam voluptate quo nostrum dolore in neque.
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
      <h2 className="dev-main-title">Our Blockchain Development Services</h2>
      <p className="dev-sub-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        doloribus quod deserunt adipisci laborum sapiente velit, quidem
        facere aperiam veniam.
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

    </>
  );



}