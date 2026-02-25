import React from "react";
import "./AllEvent.css";
import EventBanner from "../../assets/images/event/eventbanner.png";
import Guid from "../../assets/images/event/guid.png";
import  { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const CryptoEventsHero = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
  className="py-5"
  style={{
    background: theme === "dark" ? "#000000" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
    minHeight: "60vh",          // 🔥 reduced
    display: "flex",
    alignItems: "center",
  }}
>
  <div className="container">
    <div className="row align-items-center justify-content-between">

      {/* LEFT */}
      <div className="col-lg-6">
        <h1 className="hero-title">
          Crypto events <br /> 2026   
        </h1>

        <p className="hero-desc mt-4" style={{color: theme === "dark" ? "#C8AAAA" : "#574964",}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis mollitia alias, dolore sapiente ad. Perspiciatis mollitia alias, dolore sapiente ad.
        </p>
      </div>

      {/* RIGHT */}
      <div className="col-lg-5 text-center mt-5 mt-lg-0">
        <img
          src={EventBanner}
          alt="Crypto Events"
          className="img-fluid hero-img"
        />
      </div>

    </div>
  </div>
</section>


      {/* ===== MAJOR CONFERENCES ===== */}
      <section className="py-5"
      style={{
        background: theme === "dark" ? "#000000" : "#ffffff",
        transition: "0.3s",
      }}>
        <div className="container">
          <h2 className="fw-bold mb-5" style={{
            color: theme === "dark" ? "#ffffff" : "#111111",
            transition: "0.3s",
          }}>
            Major blockchain conferences
          </h2>

          <div className="row g-4">
            {[1, 2, 3].map((_, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="conference-card">
                  <div className="conference-image">
                    <img
                      src="https://images.pexels.com/photos/6914038/pexels-photo-6914038.jpeg"
                      alt="Conference"
                    />
                  </div>

                  <div className="d-flex align-items-center gap-3 mt-4">
                    <div className="logo-box">
                      <img src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg" alt="logo" />
                    </div>

                    <div>
                      <h5 className="mb-1"
                      style={{ 
                        color: theme === "dark" ? "#E5D9B6" : "#FF6500",
                         transition: "0.3s",}}>FrecX Conference</h5>
                      <p className="mb-1">Global</p>
                      <p className="mb-0">2026</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY HUBS ===== */}
      <section className="py-5" style={{
    background: theme === "dark" ? "#000000" : "#ffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}>
  <div className="container">
    <h2 className="fw-bold mb-2" style={{ color: theme === "dark" ? "#ffffff" : "#111111",transition: "0.3s",}}>
      FrequencyChain community hubs
    </h2>

    <p className="mb-4 mt-4" style={{ maxWidth: "720px", color: theme === "dark" ? "#C8AAAA" : "#574964",transition: "0.3s", }}>
      You can join regular co-working sessions and community events in these
      permanent spaces, perfect for inspired work, learning, connecting, and building.
    </p>
  </div>

  {/* HORIZONTAL SCROLL */}
  <div className="container-fluid px-4">
    <div className="hub-scroll">

      {/* LONDON */}
      <div className={`hub-card london ${theme}`}>
        <div className="hub-logo">
          <img
            src="https://images.pexels.com/photos/12192943/pexels-photo-12192943.jpeg"
            alt="London"
          />
        </div>

        <h4 style={{color: theme === "dark" ? "#E5D9B6" : "#111111",transition: "0.3s",}}>London</h4>

        <p style={{color: theme === "dark" ? "#ffff" : "#574964",transition: "0.3s",}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quam facere atque sed repellendus consequatur!
        </p>

        <p style={{color: theme === "dark" ? "#ffff" : "#574964",transition: "0.3s",}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, facere.
        </p>

        <div className="hub-links">
          <a href="#">Cowork sign up ↗</a>
          <a href="#">Meetups ↗</a>
        </div>
      </div>

      {/* BERLIN */}
      <div className={`hub-card berlin ${theme}`}>
        <div className="hub-logo">
          <img
            src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
            alt="Berlin"
          />
        </div>

        <h4 style={{color: theme === "dark" ? "#FF5FCF" : "#111111",transition: "0.3s",}}>Berlin</h4>

        <p style={{color: theme === "dark" ? "#ffff" : "#574964",transition: "0.3s",}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quibusdam atque facilis ipsum enim alias beatae optio!
        </p>

        <p style={{color: theme === "dark" ? "#ffff" : "#574964",transition: "0.3s",}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <div className="hub-links">
          <a href="#">Cowork sign up ↗</a>
          <a href="#">Meetups ↗</a>
        </div>
      </div>

      {/* DUBAI */}
      <div className={`hub-card dubai ${theme}`}>
        <div className="hub-logo">
          <img
            src="https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg"
            alt="Dubai"
          />
        </div>

        <h4 style={{color: theme === "dark" ? "#F16D34" : "#111111",transition: "0.3s",}}>Dubai</h4>

        <p style={{color: theme === "dark" ? "#ffff" : "#574964",transition: "0.3s",}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa exercitationem dignissimos quasi quae totam quod sint doloribus consectetur dolorum.
        </p>

        <p style={{color: theme === "dark" ? "#ffff" : "#574964",transition: "0.3s",}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="hub-links">
          <a href="#">Cowork sign up ↗</a>
          <a href="#">Meetups ↗</a>
        </div>
      </div>

      {/* LAGOS */}
      <div className={`hub-card lagos ${theme}`}>
        <div className="hub-logo">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Lagos"
          />
        </div>

        <h4 style={{color: theme === "dark" ? "#B153D7" : "#111111",transition: "0.3s",}}>Lagos</h4>

        <p style={{color: theme === "dark" ? "#ffff" : "#574964",transition: "0.3s",}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem asperiores doloribus illo, ipsum ab enim omnis!
        </p>

        <p style={{color: theme === "dark" ? "#ffff" : "#574964",transition: "0.3s",}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="hub-links">
          <a href="#">Cowork sign up ↗</a>
          <a href="#">Meetups ↗</a>
        </div>
      </div>

    </div>
  </div>
</section>


               {/* SECTION ------ 4 */}
{/* ===== SECTION 4 : FOR EVENT ORGANIZERS ===== */}
<section className="py-5" style={{
    background: theme === "dark" ? "#000000" : "#ffff",
    transition: "0.3s",
  }}>
  <div className="container">

    {/* TOP FULL WIDTH CONTENT */}
    <div className="row">
      <div className="col-12 text-white mb-5">

        <h1
          className="fw-bold mb-3"
          style={{ fontSize: "2rem", maxWidth: "900px",color: theme === "dark" ? "#ffffff" : "#111111", }}
        >
          For event organizers
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: "#cfcfcf",
            lineHeight: "1.7",
            maxWidth: "1050px",
            color: theme === "dark" ? "#C8AAAA" : "#574964",
          }}
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, architecto. Adipisci, modi consectetur, eos porro nostrum architecto est dignissimos autem enim, labore animi eligendi. Voluptates nesciunt inventore, molestias illo labore voluptatem reprehenderit asperiores amet totam possimus minus provident cum voluptatum!
        </p>

      </div>
    </div>

    {/* BOTTOM TWO COLUMN CONTENT */}
    <div className="row align-items-center">

      {/* LEFT IMAGE */}
      <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
        <img
          src={Guid}
          alt="Event organizers"
          className="img-fluid"
          style={{ maxWidth: "240px" }}
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="col-lg-9 col-md-8 text-white">

        <h4 className="fw-semibold mb-2" style={{color: theme === "dark" ? "#ffffff" : "#000"}}>
          Planning an event?
        </h4>

        <p
          className="mb-4"
          style={{
            fontSize: "1rem",
            color: "#cfcfcf",
            maxWidth: "700px",
            color: theme === "dark" ? "#C8AAAA" : "#574964",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non a fugiat laboriosam nihil nemo quaerat?
        </p>

        <button
          className="btn px-4 py-2"
          style={{
            backgroundColor: "#6b2cff",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "1rem",
          }}
        >
          Read the guide
        </button>

      </div>
    </div>

  </div>
</section>

         

    </>
  );
};

export default CryptoEventsHero;
