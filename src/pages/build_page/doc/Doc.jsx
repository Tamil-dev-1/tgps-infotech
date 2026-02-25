import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./doc.css"; 
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineSchool } from "react-icons/md";
import { GiStarFormation } from "react-icons/gi";
import { TbNumber123 } from "react-icons/tb";
import { VscDesktopDownload } from "react-icons/vsc";
import { IoPeopleSharp } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { BsFillBookFill } from "react-icons/bs";
import { MdCalculate } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";
import { MdPermMedia } from "react-icons/md";
import { LiaGalacticSenate } from "react-icons/lia";
import { TbTextSize } from "react-icons/tb";
import { FaLessThanEqual } from "react-icons/fa6";
import { TbBrandReact } from "react-icons/tb";
import  { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { motion } from "framer-motion";



export default function Docs() {

  const {theme} = useContext(ThemeContext);

  return (
    <>
      <div className="docs-container container-fluid">
        {/* Top Right Menu */}
        <div className="row">
          <div className="col-12 d-flex justify-content-end"
           style={{
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
            <div className="top-links text-end">
              <span >SUBMIT A PR</span>
              <p >SUBMIT AN ISSUE</p>
              <div className="last-edit">LAST EDIT: Nov 12, 2025</div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="row mt-2">
          {/* Left content */}
          <div className="col-lg-9 left-content">
            <h1 className="page-title">Frequency Chain Documentation</h1>

            <p className="body-text" style={{ color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",}}>
              Frequency chain is an open source platform where participants produce
              best-in-class digital commodities...
            </p>

            <p className="body-text"  style={{ color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore neque id, quibusdam repellendus nostrum!.
            </p>

            <p className="body-text"  style={{ color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis.
            </p>

            <ul className="custom-list">
              <li><strong  style={{ color: theme === "dark" ? "#9357F4" : "#111111",
          transition: "0.3s",}}>Miners</strong> — Work to produce digital commodities.</li>
              <li><strong style={{ color: theme === "dark" ? "#9357F4" : "#111111",
          transition: "0.3s",}}>Validators</strong> — Evaluate the miners' work.</li>
              <li><strong style={{ color: theme === "dark" ? "#9357F4" : "#111111",
          transition: "0.3s",}}>Subnet Creators</strong> — Manage incentive mechanisms.</li>
              <li><strong style={{ color: theme === "dark" ? "#9357F4" : "#111111",
          transition: "0.3s",}}>Stakers</strong> — Stake TAO to validators.</li>
            </ul>

            {/* Green box */}
            <div className="info-box mt-4"
             style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          borderBottom:"1px solid white",
          borderTop:"1px solid white",
          borderRight:"1px solid white",
          transition: "0.3s",
        }}>
              <h6 className="info-title">💡 BROWSE THE SUBNETS</h6>
              <p className="info-text">
                Browse the subnets and explore links to repositories on Our.
              </p>
            </div>
          </div>

          {/* Right sidebar */}
          {/* <div className="col-lg-3 sidebar">
            <div className="sidebar-item">Participate</div>
            <div className="sidebar-item">Running a subnet</div>
            <div className="sidebar-item">Bittensor CLI, SDK, Wallet SDK</div>
          </div> */}
        </div>
      </div>

      {/* -------------------- SECTION 2 (CARDS) -------------------- */}
      
      <div className="docs-section2">
  <div className="cards-centered">

    <div className="cards-row">

      {/* Card 1 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
        style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
        <div className="doc-card">
          <div className="card-icon"><GiStarFormation /></div>
          <h5 className="card-title">Frequency chain frequently asked questions (FAQ)</h5>
          <p className="card-desc">
            Everything you were afraid to ask about Frequency chain.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><TbNumber123 /></div>
          <h5 className="card-title">Subnet Listings on our App</h5>
          <p className="card-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, quia.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><VscDesktopDownload /></div>
          <h5 className="card-title">BTCLI Live Coding Playground</h5>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, in.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><IoSchoolSharp /></div>
          <h5 className="card-title">Introduction to Frequency chain</h5>
          <p className="card-desc">
            Lorem ipsum dolor sit amet.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><VscDesktopDownload /></div>
          <h5 className="card-title">Guide to Frequency tools</h5>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit quia fugit placeat mollitia dicta.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 6 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><MdPermMedia /></div>
          <h5 className="card-title">Frequency chain media assets</h5>
          <p className="card-desc">MEDIA ASSETS</p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

    </div>
  </div>
</div>

      

                           {/* SECTION ====== 3 */}

      <div className="docs-section2">
  <div className="cards-centered">
       <h1 className="page-title">Participate</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quis ipsa voluptatem cum porro repellat rerum impedit nulla ullam? Repellendus!.</p>
    <div className="cards-row">

      {/* Card 1 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><IoPeopleSharp /></div>
          <h5 className="card-title">Staking and Delegation</h5>
          <p className="card-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, deleniti?
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><SiTicktick /></div>
          <h5 className="card-title">Mining in Frequency chain</h5>
          <p className="card-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><BsFillBookFill /></div>
          <h5 className="card-title">Validating in Frequency chain</h5>
          <p className="card-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><MdCalculate /></div>
          <h5 className="card-title">Emissions</h5>
          <p className="card-desc">
            Lorem ipsum dolor sit amet.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><RiGovernmentFill /></div>
          <h5 className="card-title">Governance</h5>
          <p className="card-desc">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, veniam.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 6 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><LiaGalacticSenate /></div>
          <h5 className="card-title">Senate</h5>
          <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, facilis?</p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

    </div>
  </div>
</div>
 

                        {/* SECTION ------ 4 */}
          <div className="docs-section2">
  <div className="cards-centered">
       <h1 className="page-title">Running a subnet</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur harum asperiores in facilis deserunt suscipit nesciunt neque tempora sed et?.</p>
    <div className="cards-row">

      {/* Card 1 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><IoSchoolSharp /></div>
          <h5 className="card-title">Basic subnet tutorials</h5>
          <p className="card-desc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><GiStarFormation /></div>
          <h5 className="card-title">Create a subnet</h5>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><MdOutlineSchool /></div>
          <h5 className="card-title">OCR subnet tutorial</h5>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fugiat.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div className="cards-col"
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
        <div className="doc-card">
          <div className="card-icon"><TbTextSize /></div>
          <h5 className="card-title">Subnet hyperparameters</h5>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi, eaque enim tempore esse sunt.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </motion.div>
    </div>
  </div>
</div>


    
             

                                      {/* FINAL SECTION  */}

                  <div className="container my-5">

      {/* TITLE */}
      <h2 className="sdk-title"  style={{
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>Frequency Chain CLI, SDK, Wallet SDK</h2>
      <p className="sdk-subtitle" style={{
          color: theme === "dark" ? "#979494ff" : "#111111",
          transition: "0.3s",
        }}>
        Use the Frequency Chain CLI and SDK and Wallet SDK to develop and participate in the Frequency Chain network.
      </p>

      {/* YELLOW ALERT BOX */}
      <div className="alert-box"   style={{
          background: theme === "dark" ? "#000000" : "#fff7dd",
          color: theme === "dark" ? "#ffffff" : "#111111",
          borderTop:"1px solid white",
          borderBottom:"1px solid white",
          borderRight:"1px solid white",
          transition: "0.3s",
        }}>
        <strong>⚠ LOOKING FOR LEGACY Frequency Chain 7.4.0 DOCS?</strong>
        <br />
        See <a href="#">Legacy Frequency Chain 7.4.0 Documentation.</a>
      </div>

      {/* CARDS ROW 1 */}
      <div className="row mt-4 justify-content-between">

        {/* Card 1 */}
        <div className="col-md-5 mb-4"
      >
          <motion.div
      initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
           className="sdk-card">
            <div className="sdk-icon"><FaLessThanEqual /></div>
            <div className="sdk-title-small">Frequency Chain CLI</div>
          </ motion.div>
        </div>

        {/* Card 2 */}
        <motion.div
        initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
         className="col-md-5 mb-4">
          <div className="sdk-card">
            <div className="sdk-icon"><TbBrandReact /></div>
            <div className="sdk-title-small">Frequency Chain SDK</div>
          </div>
        </motion.div>
  
      </div>




      {/* CARDS ROW 2 */}
      <div className="row justify-content-start">

  {/* Card 3 */}
  <motion.div
    className="col-md-5 mb-4"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="sdk-card">
      <div className="sdk-icon"><TbBrandReact /></div>
      <div className="sdk-title-small">WALLET SDK</div>
    </div>
  </motion.div>

</div>


    </div>                    


                             


   
    </>
  );
}
