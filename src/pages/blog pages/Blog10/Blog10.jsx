import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { error } from "three";

const Blog10 = () => {
     const {theme} = useContext(ThemeContext);

    //  SHARE PAGES

    const sharePage = () =>{
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: "Check out this page",
                url: window.location.href,
            })
            .catch((error) => console.log("Sharing failed", error))
        }
        else {
            alert("Sharing not supported on this browser")
        }
    };
  return (
    <>
    <div style={{ width: "80%", margin: "50px auto" }}>

      {/* Meta Row */}
      <div className=" mb-2 small">
        Jan 16, 2026 • Partnerships • 5 min
      </div>

      {/* Title */}
      <h2 className="fw-bold mb-5"
      style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
      </h2>

      {/* Author + Share */}
      <div className="d-flex justify-content-between align-items-center mb-5">

        {/* Author */}
        <div className="d-flex align-items-center gap-2">
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
            style={{ width: 36, height: 36 }}
          >
            FC
          </div>
          <span className="fw-medium">FrequencyChain Official</span>
        </div>

        {/* Share Icons */}
        <div className="d-flex gap-3 fs-5 text-secondary"
        style={{cursor:"pointer"}}
        onClick={sharePage}>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-telegram"></i>
        </div>
      </div>

      {/* Hero Image — reduced height */}
      <img
        src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg"
        alt="Article Hero"
        className="img-fluid rounded shadow-sm mx-auto"
        style={{
          width: "600px",
          maxHeight: "420px",
          objectFit: "contain",
          display:"block",
        }}
      />

    </div>

    {/* SECTION ----- 2 */}

    <section className="py-5">
      <div style={{ width: "70%", margin: "0 auto" }}>

        {/* Intro Paragraphs */}
        <p className="fs-6 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eligendi saepe cumque maxime culpa quod laborum at <strong>nobis, deleniti commodi autem</strong> corporis rerum accusamus aperiam! Illum architecto nam voluptates,<strong> sunt eum repudiandae </strong>quisquam deserunt reiciendis alias incidunt <strong> voluptatibus! Vitae,</strong> quidem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima vitae dicta culpa illo. Cumque, animi?
        </p>

        <p className="fs-6 mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel culpa voluptate sit ad error esse magnam voluptas dolores cumque iusto tempora deserunt qui nobis recusandae similique ullam dignissimos, <strong>incidunt dolore sunt nisi debitis! Nobis tempora exercitationem cum nam culpa illo!</strong>
        </p>

        {/* In This Article */}
        <h2 className="fw-semibold mb-4"
        style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>In This Article</h2>

        <ul className="fs-6 ps-4">
          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              FcBetter: Turning Actions Into Impact
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              Proof of Impact: Trust Through Tokenized Data
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              What’s Next: AI-Powered Sustainability Agents
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              What Is the Global Sustainable Trade Initiative (GSTI)?
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              Join the Movement and Watch the Documentary
            </a>
          </li>
        </ul>

      </div>
    </section>


    {/* SECTION ----- 3 */}

      <section className="py-5">
      <div style={{ width: "70%", margin: "0 auto" }}>

        {/* Section Title */}
        <h1 className="fw-semibold mb-4">
          FrequencyChain: A Blockchain Built for Real-World Use
        </h1>

        {/* Paragraph 1 */}
        <p className="fs-6 mb-4">
          Founded in 2015, FrequencyChain was built on a clear premise:{" "}
          <strong>
            blockchain technology should solve real-world problems.
          </strong>{" "}
          Starting in product traceability and supply chain transparency,
          FrequencyChain worked with major global enterprises to capture critical data
          throughout a product’s journey - verifying authenticity, compliance,
          and various other conditions.
        </p>

        {/* Paragraph 2 */}
        <p className="fs-6 mb-5">
          Building on this foundation of excellence, FrequencyChain’s trust-first
          infrastructure has continued to evolve, and now aims to{" "}
          <strong>
            tackle one of the world’s most urgent challenges: sustainability.
          </strong>
        </p>

        {/* Image */}
        <img
          src="https://images.pexels.com/photos/7709110/pexels-photo-7709110.jpeg"
          alt="VeChain Article"
          className="img-fluid rounded-4 shadow-sm mx-auto"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover"
          }}
        />

      </div>
    </section>

    {/* SECTION ----- 4 */}


       <section className="py-5">
      <div style={{ width: "70%", margin: "0 auto" }}>

        {/* Heading 1 */}
        <h2 className="fw-semibold mb-4"
        style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>
          From Supply Chain to Sustainability: A Natural Evolution
        </h2>

        {/* Paragraphs */}
        <p className="fs-6 mb-3">
        Lorem ipsum dolor sit amet <strong>consectetur adipisicing elit.</strong> Fugit exercitationem itaque doloremque, <strong>quod non et nesciunt maiores,</strong> laborum dicta recusandae ea ipsam atque neque? Cum doloremque quod laborum? Quis quisquam aliquam, <strong>ius necessitatibus,</strong> sit ad, recusandae eos voluptate <strong>neque similique ipsam?</strong> Minus adipisci voluptates deserunt illum hic possimus voluptatem laudantium!
        </p>

        <p className="fs-6 mb-3">
          Over time, FrequencyChain has expanded its scope,{" "}
          <strong>
            transitioning solely from enterprise use cases and embracing the
            B2C environment
          </strong>
          , too, through its <strong>VeBetter application platform</strong>.
        </p>

        <p className="fs-6 mb-5">
          Today, VeChainThor serves as a{" "}
          <strong>platform for both businesses and individuals</strong>,
          opening a new, scalable adoption frontier.
        </p>

        {/* Heading 2 */}
        <h2 className="fw-semibold mb-4"
        style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>
          VeBetter: Turning Actions into Impact
        </h2>

        {/* Paragraphs */}
        <p className="fs-6 mb-3">
          At the heart of this transformation is <strong>VeBetter</strong>, an
          ecosystem of{" "}
        <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reiciendis dolorum qui</strong> ipsam aperiam rem numquam explicabo id excepturi culpa recusandae impedit deserunt, fugit odit reprehenderit eum. Illo, repudiandae consequuntur.
        </p>

        <p className="fs-6 mb-3">
          <strong>Sustainability has a broad scope</strong>, with apps on the
          platform rewarding users for activities ranging from:
        </p>

        {/* Bullet List */}
        <ul className="fs-6 ps-4 mb-4">
          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              Mugshot
            </a>
            : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, atque.
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              GreenCart
            </a>
            : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              Cleanify
            </a>
            : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              BYB
            </a>
            : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          </li>

          <li className="mb-2">
            <a href="#" className="text-primary text-decoration-none">
              Evearn
            </a>
            : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          </li>
        </ul>

        {/* Closing Paragraph */}
        <p className="fs-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nemo tempore maiores a maxime quisquam dolorum nihil reiciendis numquam cupiditate excepturi aut ducimus nobis, possimus consequatur! Aliquid sapiente fugiat corporis!.
        </p>

      </div>
    </section>

    {/* SECTION ----- 5 */}

    <section className="py-5">
      <div style={{ width: "70%", margin: "0 auto" }}>

        {/* Heading */}
        <h2 className="fw-semibold mb-4"
        style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>
          Proof of Impact: Lorem ipsum dolor sit amet.
        </h2>

        {/* Intro Text */}
        <p className="fs-6 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur!
        </p>

        <p className="fs-6 mb-4">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores obcaecati quibusdam in, ipsa quod laboriosam!
        </p>

        {/* Stats List */}
        <ul className="fs-6 ps-4 mb-4">
          <li className="mb-2">
            <strong>5.5 million</strong> users have joined
          </li>
          <li className="mb-2">
            <strong>300,000 kg</strong> of plastic have been{" "}
            <strong>diverted from waste</strong>
          </li>
          <li className="mb-2">
            <strong>18 million liters of water</strong>{" "}
            <strong>have been saved</strong>
          </li>
          <li className="mb-2">
            <strong>5,000 tons of CO₂</strong> have been prevented
          </li>
          <li className="mb-2">
            <strong>600,000 kg of timber</strong> have been preserved
          </li>
        </ul>

        {/* Closing Paragraph */}
        <p className="fs-6 mb-5">
          Lorem ipsum dolor sit amet <strong>consectetur adipisicing elit.</strong> Eos ducimus ullam, at, atque nobis, odio sit consequuntur laboriosam ea <strong>exercitationem similique doloremque</strong> <strong>veniam commodi magnam. </strong> Nostrum facere rem sint quaerat.
        </p>

        {/* Image */}
        <img
          src="https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg"
          alt="Proof of Impact"
          className="img-fluid rounded-4 shadow-sm d-block mx-auto"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover"
          }}
        />

      </div>
    </section>

    {/* SECTION ----- 6 */}

    <section className="py-5">
      <div style={{ width: "70%", margin: "0 auto" }}>

        {/* Share */}
        <div className="text-center mb-4">
          <p className="fw-medium mb-3">Share this post</p>

          <div className="d-flex justify-content-center gap-3 fs-5"
          style={{cursor:"pointer"}} onClick={sharePage}>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-telegram"></i>
          </div>
        </div>

        {/* Categories */}
        <div className="text-center mb-5">
          <p className="fw-medium mb-3">All categories</p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <span>#Technology</span>
            <span>#Builders</span>
            <span>#Products</span>
            <span>#Partnerships</span>
            <span>#Community</span>
          </div>
        </div>

        {/* Related Cards */}
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-lg-4">
            <div>
              <img
                src="https://images.pexels.com/photos/7709110/pexels-photo-7709110.jpeg"
                className="img-fluid rounded-4 mb-3"
                alt=""
                style={{ height: 200, width: "100%", objectFit: "cover" }}
              />

              <div className="text-muted small mb-2">
                Jan 16, 2026 • Partnerships • 5 min
              </div>

              <h5 className="fw-semibold mb-3">
                Lorem ipsum dolor sit.
              </h5>

              <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                     style={{ width: 30, height: 30 }}>
                  FC
                </div>
                <span className="small">FrequencyChain Official</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4">
            <div>
              <img
                src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg"
                className="img-fluid rounded-4 mb-3"
                alt=""
                style={{ height: 200, width: "100%", objectFit: "cover" }}
              />

              <div className="text-muted small mb-2">
                Jan 5, 2026 • Technology • 10 min
              </div>

              <h5 className="fw-semibold mb-2">
                Lorem ipsum dolor sit.
              </h5>

              <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                     style={{ width: 30, height: 30 }}>
                  FC
                </div>
                <span className="small">FrequencyChain Official</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4">
            <div>
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                className="img-fluid rounded-4 mb-3"
                alt=""
                style={{ height: 200, width: "100%", objectFit: "cover" }}
              />

              <div className="text-muted small mb-2">
                Nov 24, 2025 • Partnerships • 3 min
              </div>

              <h5 className="fw-semibold mb-2">
                Lorem ipsum dolor sit.
              </h5>

              <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                     style={{ width: 30, height: 30 }}>
                  FC
                </div>
                <span className="small">FrequencyChain Official</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default Blog10;
