import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { path } from "framer-motion/client";


export default function MegaNavbar() {

  const [activeNav, setActiveNav] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);


  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

// useEffect(()=>{
//   const handleScroll = () =>{
//     const nav=document.querySelector(".mega-navbar");

//     if(window.scrollY>50){
//       nav.classList.add("scrolled")
//     }else{
//       nav.classList.remove("scrolled")
//     }
//   }


//   window.addEventListener("scroll",handleScroll)
//   return () => window.removeEventListener("scroll",handleScroll)
// },[])

  return (
    <nav style={{backgroundColor:"#C6FF00"}}
      className="navbar navbar-expand-lg shadow-sm mega-navbar"
      onMouseLeave={() => setActiveNav(null)}
    >
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link to={'/'} className="navbar-brand fw-bold fs-3 text-white">LOGO</Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>

        {/* NAV */}
        <ul className={`navbar-nav gap-4 mobile-nav ${mobileMenu ? "show" : ""}`}>

          {Object.keys(fullMenuData).map((nav, i) => (
            <li
              key={i}
              className="nav-item position-static mobile-nav-item"
              onMouseEnter={() => {
                setActiveNav(nav);
                setActiveMenu(Object.keys(fullMenuData[nav])[0]);

                
              }}
            >

              {/* Nav Click (Mobile Accordion) */}
              <div
                className="nav-link fw-semibold d-flex justify-content-between"
                onClick={() =>
                  setMobileSubMenu(mobileSubMenu === nav ? null : nav)
                }
              >
                {nav} <span>▾</span>
              </div>

              {/* MOBILE ACCORDION */}
              {isMobile && mobileSubMenu === nav && (
                <div className="mobile-submenu">
                  {Object.keys(fullMenuData[nav]).map((item, idx) => (
                    <div key={idx} className="mobile-submenu-item">
                      <h6>{item}</h6>

                      {fullMenuData[nav][item].cards.map((card, c) => (
                        <Link
                          key={c}
                          to={card.path || "#"}
                          className="d-block text-decoration-none"
                          onClick={() => setMobileMenu(false)}
                        >
                          {card.title}
                        </Link>
                      ))}

                    </div>
                  ))}
                </div>
              )}

            </li>
          ))}

        </ul>

        {/* Buttons */}
        <div className="d-none d-lg-flex gap-2 desktop-btns">
          <button className="btn fw-bold" style={{backgroundColor:"#C6FF00"}}>Get in touch</button>
          <button className="btn btn-outline-dark text-white bg-black">Partner With Us</button>
        </div>

      </div>

      {/* DESKTOP MEGA MENU */}
      {activeNav && (
        <div className="mega-menu shadow-lg">
          <div className="row g-0">

            {/* LEFT SIDEBAR */}
            <div className="col-md-3 sidebar">
              {Object.keys(fullMenuData[activeNav]).map((item, i) => (
                <div
                  key={i}
                  className={`sidebar-item ${activeMenu === item ? "active" : ""}`}
                  onClick={() => setActiveMenu(item)}
                >
                  {item} <span>›</span>
                </div>
              ))}
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-9 content-area">
              <h5 className="fw-bold mb-4">{activeMenu}</h5>
              <p className="text-muted mb-4">
                {fullMenuData[activeNav][activeMenu].description}
              </p>

              <div className="row">
                {fullMenuData[activeNav][activeMenu].cards.map((card, i) => (
                  <div key={i} className="col-md-6 mb-4">
                    <Link to ={card.path} className="menu-card text-decoration-none">
                      <div className="line"></div>
                      <h6>{card.title}</h6>
                      <p>{card.desc}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </nav>
  );
}

const fullMenuData = {
  Blockchain: {
    Blockchain:{
      description:"Navigate your journey towards blockchain",
      cards:[
        {title:"Blockchain Development",desc:"Strategic services",path:"/blockchain"},
        {title:"Identity Management",desc:"Secure identity"},
        // {title:"Depin Development",desc:"Future apps"},
        // {title:"Offshore Center",desc:"Build teams"}
      ]
    },

    // "Demo":{
    //   description:"Navigate your journey towards blockchain",
    //   cards:[
    //     {title:"Blockchain2 Development",desc:"Strategic services"},
    //     {title:"Identity2 Management",desc:"Secure identity"},
    //     {title:"Depin2 Development",desc:"Future apps"},
    //     {title:"Offshore2 Center",desc:"Build teams"}
    //   ]
    // }
  },
  AI:{
    "Our Offerings":{
      description:"AI solutions",
      cards:[
        {title:"AI Agents",desc:"Machine learning",path:"/Ai"},
        {title:"Chatbots",desc:"Assistants"},
        // {title:"Vision AI",desc:"Image AI"},
        // {title:"Automation",desc:"Process AI"}
      ]
    }
  },
  Web2:{
    "Game Development":{
      description:"Gaming solutions",
      cards:[
        {title:"Unity",desc:"lorem"},
        {title:"Unreal",desc:"lorem"},
        // {title:"Web3",desc:"Blockchain games"},
        // {title:"AR/VR",desc:"Immersive"}
      ]
    }
  },
  Consulting:{
    "Tech Consulting":{
      description:"Strategic help",
      cards:[
        {title:"Architecture",desc:"System design", path:"/consulting"},
        {title:"Security",desc:"Risk audit"},
        // {title:"Cloud",desc:"Infra"},
        // {title:"Scaling",desc:"Growth"}
      ]
    }
  },
  // Solutions:{
  //   "Business Solutions":{
  //     description:"Digital tools",
  //     cards:[
  //       {title:"ERP",desc:"Enterprise"},
  //       {title:"CRM",desc:"Customer"},
  //       {title:"Fintech",desc:"Finance"},
  //       {title:"Healthcare",desc:"Medical"}
  //     ]
  //   }
  // },
  "About Us":{
    "Company":{
      description:"Know us",
      cards:[
        {title:"Our Story",desc:"Journey"},
        {title:"Team",desc:"Leadership"},
        // {title:"Careers",desc:"Join"},
        // {title:"Contact",desc:"Reach us"}
      ]
    }
  }
};