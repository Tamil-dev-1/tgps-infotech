import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import TGPS_LOGO from '../../assets/images/home/infotech.png'


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
      <div className="container px-4 d-flex align-items-center justify-content-between">

        {/* Logo */}
        <Link to={'/'} className="navbar-brand">
  <img src="/infotech_logo2.png" alt="logo" className="navbar-logo" />
</Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>

        {/* NAV */}
        <ul className={`navbar-nav gap-4 ms-auto mobile-nav ${mobileMenu ? "show" : ""}`}>

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
                      <h6 style={{color:"#C6FF00"}}>{item}</h6>

                      {fullMenuData[nav][item].cards.map((card, c) => (
                        <Link
                          key={c}
                          to={card.path || "#"}
                          className="d-block text-decoration-none"
                          style={{color:'#fff'}}
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
        {/* <div className="d-none d-lg-flex gap-2 desktop-btns">
          <button className="btn fw-bold" style={{backgroundColor:"#92B025"}}>Get in touch</button>
          <button className="btn btn-outline-dark text-white bg-black">Partner With Us</button>
        </div> */}

      </div>

      {/* DESKTOP MEGA MENU */}
      {activeNav && (
        <div className="mega-menu shadow-lg bg-activeNav">
          <div className="row g-0">

            {/* LEFT SIDEBAR */}
            <div className="col-md-3 sidebar bg-sidebar">
              {Object.keys(fullMenuData[activeNav]).map((item, i) => (
                <div
                  key={i}
                  className={`sidebar-item bg-white ${activeMenu === item ? "active" : ""}`}
                  onClick={() => setActiveMenu(item)}
                >
                  {item} <span>›</span>
                </div>
              ))}
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-9 content-area">
              <h5 className="fw-bold activemenu mb-4">{activeMenu}</h5>
              <p className="text-muted mb-4">
                {fullMenuData[activeNav][activeMenu].description}
              </p>

              <div className="row">
                {fullMenuData[activeNav][activeMenu].cards.map((card, i) => (
                  <div key={i} className="col-md-4 mb-4">
                    <Link to ={card.path} className="menu-card text-decoration-none"
                    onClick={()=>{
                      setActiveNav(null);
                      setActiveMenu(null);
                    }}>
                      <div className="line"></div>
                      <h6 className="text-white">{card.title}</h6>
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
      description:"",
      cards:[
        {title:"Blockchain Development",desc:"",path:"/blockchain"},
        {title:"Identity Development ",desc:"",path:"/blockchain"},
        {title:"DePin Development",desc:"",path:"/blockchain"},
        {title:"White paper Development",desc:"",path:"/blockchain"},
        {title:"Smart contract audit &  Development",desc:"",path:"/blockchain"},
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
      description:"",
      cards:[
        {title:"Enterprise AI Solutions",desc:"",path:"/Ai"},
        {title:"AI Application Development",desc:"",path:"/Ai"},
        {title:"AI Security & Governance",desc:"",path:"/Ai"},
        // {title:"Vision AI",desc:"Image AI"},
        // {title:"Automation",desc:"Process AI"}
      ]
    }
  },
  Web2:{
    "Web2 Development":{
      description:"",
      cards:[
        {title:"Modern Web Design Solutions",desc:"",path:"/web2"},
        {title:"Branding",desc:"",path:"/web2"},
        {title:"Digital Marketing Solutions",desc:"",path:"/web2"},
        {title:"Creative Design Solutions",desc:"",path:"/web2"},
        {title:"SaaS & Product Development",desc:"",path:"/web2"},
        // {title:"Web3",desc:"Blockchain games"},
        // {title:"AR/VR",desc:"Immersive"}
      ]
    }
  },
  Consulting:{
    "Tech Consulting":{
      description:"",
      cards:[
        {title:"Blockchain Consulting & Advisory",desc:"", path:"/consulting"},
        {title:"AI Future-Ready Company",desc:"",path:"/consulting"},
        {title:"Web3 Ecosystems",desc:"",path:"/consulting"},
        {title:"DeFI Consulting",desc:"",path:"/consulting"},
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
      description:"",
      cards:[
        {title:"What we do",desc:"",path:"/aboutus"},
        {title:"What we belive",desc:"",path:"/aboutus"},
        {title:"Careers",desc:"",path:"/aboutus"},
        // {title:"Careers",desc:"Join"},
        // {title:"Contact",desc:"Reach us"}
      ]
    }
  }
};