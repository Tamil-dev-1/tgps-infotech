import React from 'react'
import './ourproduct.css'
// import ProductSlider from '../../component/productSlider/ProductSlider'
// import ScrollBoxes from "../../component/ScrollBoxes/ScrollBoxes";
import  { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { motion } from "framer-motion";
import Pattern from "../../assets/images/ourproduct/pattern.png";
import HeroBG from "../../assets/images/ourproduct/productHero.png";


const Ourbrand = () => {

  const {theme} = useContext(ThemeContext);
  return (
    <div>
       <section
      className="py-5"
      // style={{ background: "#0d0f16" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* LEFT SIDE TEXT */}
          <motion.div className="col-lg-5 col-md-6 col-12 text-white mb-5 mb-md-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }} style={{ overflow: "hidden" }}>
            <h1 className="fw-bold mb-3"
            style={{
              color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
            }}
            >
              Build  Secure Manage Make an impact{" "}
              <span
                style={{
                  background: "#1f1f1f",
                  padding: "6px 12px",
                  borderRadius: "50px",
                  fontSize: "22px",
                }}
              >
                🌱
              </span>
            </h1>

            <p className="mb-3"
            style={{
              color: theme === "dark" ? "#D9CFC7" : "#111111",
              transition: "0.3s",
            }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit.
            </p>

            <p
            style={{
              color: theme === "dark" ? "#D9CFC7" : "#111111",
              transition: "0.3s",
            }}
            >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum!
            </p>
          </motion.div>

          {/* RIGHT SIDE IMAGES */} 
          <motion.div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center position-relative"
            initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
  viewport={{ once: true }}>

            {/* MAIN IMAGE */}
            <img
              src={HeroBG}
              alt="people"
              className="img-fluid"
              style={{
                width: "260px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "20px",
                zIndex: 3,
              }}
            />

            {/* BACK IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="forest"
              className="img-fluid d-none d-md-block"
              style={{
                width: "220px",
                height: "260px",
                objectFit: "cover",
                borderRadius: "20px",
                position: "absolute",
                bottom: "-30px",
                right: "-40px",
                zIndex: 1,
              }}
            />

            {/* TOP RIGHT SHAPE */}
            <div
              className="d-none d-md-block"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "4px solid #a3ff75",
                position: "absolute",
                top: "20px",
                right: "-30px",
                borderTop: "none",
                borderLeft: "none",
              }}
            />

            {/* LEFT BOTTOM SHAPE */}
            <div
              className="d-none d-md-block"
              style={{
                width: "60px",
                height: "60px",
                borderLeft: "3px solid #8bc6ff",
                borderBottom: "3px solid #8bc6ff",
                position: "absolute",
                bottom: "10px",
                left: "-20px",
                transform: "rotate(20deg)",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>

                                {/* SECTION --------- 2 */}

                    {/* <ProductSlider /> */}
                        {/* OUR PRODUCT COMPONENT */}
                        
                                    {/* <ScrollBoxes /> */}


                  {/* <div className="container py-5">

      <h1 className="fw-bold mb-4">Our products</h1>

      <div className="row g-4">

      
        <div className="col-lg-4">
          <div className="product-card">
            <div className="product-img purple-bg">
              <img
                src="https://images.pexels.com/photos/276467/pexels-photo-276467.jpeg"
                alt="VeWorld"
                className="img-fluid product-inner-img"
              />
            </div>

            <div className="product-content">
              <h3 className="fw-bold">Product 1</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, doloribus!
              </p>
            </div>
          </div>
        </div>

       
        <div className="col-lg-4">
          <div className="product-card">
            <div className="product-img blue-bg">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                alt="VeBetter"
                className="img-fluid product-inner-img"
              />
            </div>

            <div className="product-content">
              <h3 className="fw-bold">Product 2</h3>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, officia.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col-lg-4">
          <div className="product-card">
            <div className="product-img dark-bg">
              <img
                src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
                alt="Stargate"
                className="img-fluid product-inner-img"
              />
            </div>

            <div className="product-content">
              <h3 className="fw-bold">Product 3</h3>
              <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, quisquam!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>      */}
                               {/* SECTION -------- 3          */}

     <div className="py-5"
     style={{
    background: theme === "dark" ? "#000000" : "#ffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
     >
  <motion.h2 className="text-center fw-semibold mb-5"
  style={{color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}
   initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}>
    FrequencyChain Stats that drive a difference in the world
  </motion.h2>

  <div className="container">
    <div className="row g-4 stats-row">

      {/* Card 1 */}
      <motion.div className="col-12 col-md-6 d-flex"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className="stats-card purple-bg round text-center w-100">
          <h5>Rewarded Sustainable Actions</h5>
          <h1>1M</h1>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div className="col-12 col-md-6 d-flex"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className="stats-card white-bg round text-center w-100">
          <h5>Applications Built</h5>
          <h1>350</h1>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div className="col-12 col-md-6 d-flex"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className="stats-card white-bg round text-center w-100">
          <h5>Total Staked</h5>
          <h1>5.8B</h1>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div className="col-12 col-md-6 d-flex"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className="stats-card purple-bg round text-center w-100">
          <h5>Rewards Distributed</h5>
          <h1>242.9M</h1>
        </div>
      </motion.div>

    </div>
  </div>
</div>
      

                                  {/* SECTION -------- 4       */}

    {/* <div className="py-5">

  
  <h2
    className="text-center hero-title mb-5"
    style={{
      fontWeight: 700,
      fontSize: "clamp(28px, 4vw, 42px)",
      color: "#000",
    }}
  >
    Explore Our Apps
  </h2>

  
  <div className="container">
    <div className="row g-4 justify-content-center">

      
      <motion.div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div style={{ maxWidth: "320px", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#000",
              borderRadius: "24px 24px 0 0",
              overflow: "hidden",
              height: "clamp(200px, 30vw, 260px)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg"
              alt="App-1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            className="p-4"
            style={{
                 background: theme === "dark" ? "#151A2D" : "#F8F8F8",
                   transition: "0.3s",
              borderRadius: "0 0 24px 24px",
              minHeight: "200px",
            }}
          >
            <h4 style={{ color: theme === "dark" ? "#ffffff" : "#555",
              transition: "0.3s", fontWeight: 600 }}>App-1</h4>
            <p style={{ 
              color: theme === "dark" ? "#ffffff" : "#555",
              transition: "0.3s",
               fontSize: "15px", lineHeight: 1.6
                }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat.
            </p>
          </div>
        </div>
      </motion.div>

      
      <motion.div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div style={{ maxWidth: "320px", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#000",
              borderRadius: "24px 24px 0 0",
              overflow: "hidden",
              height: "clamp(200px, 30vw, 260px)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/9474027/pexels-photo-9474027.jpeg"
              alt="App-2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            className="p-4"
            style={{
              background: theme === "dark" ? "#151A2D" : "#F8F8F8",
                   transition: "0.3s",
              borderRadius: "0 0 24px 24px",
              minHeight: "200px",
            }}
          >
            <h4 style={{
              color: theme === "dark" ? "#ffffff" : "#555",
              transition: "0.3s",
               fontWeight: 600 
               }}>App-2</h4>
            <p style={{ 
              color: theme === "dark" ? "#ffffff" : "#555",
              transition: "0.3s",
              fontSize: "15px", lineHeight: 1.6 
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quam.
            </p>
          </div>
        </div>
      </motion.div>


      <motion.div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div style={{ maxWidth: "320px", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#0053ff",
              borderRadius: "24px 24px 0 0",
              overflow: "hidden",
              height: "clamp(200px, 30vw, 260px)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
              alt="App-3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            className="p-4"
            style={{
              background: theme === "dark" ? "#151A2D" : "#F8F8F8",
                   transition: "0.3s",
              borderRadius: "0 0 24px 24px",
              minHeight: "200px",
            }}
          >
            <h4 style={{ 
               color: theme === "dark" ? "#ffffff" : "#111111",
               transition: "0.3s",
              fontWeight: 600 
              }}>App-3</h4>
            <p style={{ 
              color: theme === "dark" ? "#ffffff" : "#555",
              transition: "0.3s",
               fontSize: "15px", lineHeight: 1.6 
               }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</div> */}
        
        <div className="py-5">

  {/* Section Title */}
  <h2
    className="text-center mb-5"
    style={{
      fontWeight: 800,
      fontSize: "clamp(26px, 4vw, 40px)",
      color: theme === "dark" ? "#fff" : "#111",
    }}
  >
    Explore Our Apps
  </h2>

  <div className="container">
    <div className="row g-4 justify-content-center">

      {/* CARD */}
      {[
        {
          img: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg",
          title: "App-1",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          img: "https://images.pexels.com/photos/9474027/pexels-photo-9474027.jpeg",
          title: "App-2",
          text: "Voluptatibus, quam. Lorem ipsum dolor sit amet."
        },
        {
          img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
          title: "App-3",
          text: "Nobis, fugiat. Lorem ipsum dolor sit amet."
        }
      ].map((card, i) => (

        <motion.div
          key={i}
          className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="apple-card">

            <div className="apple-img-wrap">
              <img src={card.img} alt={card.title} />
            </div>

            <div className="apple-body">
              <h5>{card.title}</h5>
              <p>{card.text}</p>
            </div>

          </div>
        </motion.div>

      ))}

    </div>
  </div>
</div>


                                     {/* SECTION ------- 5          */}

                <div className="d-flex justify-content-center my-5">
      <div
        className="w-75 p-5 position-relative round"
        style={{
          backgroundColor: "#0d5550",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Text */}
        <motion.h2
         initial={{ opacity: 0, x: -60 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.2, ease: "easeOut" }}
         viewport={{ once: true }}
         style={{ fontSize: "38px", fontWeight: 600,color:"#ffff" }}>
          Ready to start making your impact?
        </motion.h2>

        {/* Button */}
        <button
          className="btn btn-light mt-4 px-4 py-2 d-inline-block"
          style={{
            borderRadius: "30px",
            fontWeight: 500,
            fontSize: "16px",
            display:"inline-block",
          }}
        >
          Start building
        </button>

        {/* Decorative curved lines (Right side) */}
        <img
          src={Pattern}
          alt="pattern"
          className="position-absolute"
          style={{
            width: "300px",
            opacity: 0.25,
            right: "-30px",
            top: "10px",
          }}
        />
      </div>
    </div>                        
    </div>
  )
}

export default Ourbrand
