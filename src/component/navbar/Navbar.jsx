import { useState } from "react";
import "./Navbar.css";

export default function MegaNavbar() {

  const [activeNav, setActiveNav] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  return (
    <nav
      className="navbar navbar-expand-lg bg-white shadow-sm mega-navbar"
      onMouseLeave={() => setActiveNav(null)}
    >
      <div className="container-fluid px-4">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3">LOGO</a>

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
              {mobileSubMenu === nav && (
                <div className="mobile-submenu">
                  {Object.keys(fullMenuData[nav]).map((item, idx) => (
                    <div key={idx} className="mobile-submenu-item">
                      <h6>{item}</h6>
                      {fullMenuData[nav][item].cards.map((card, c) => (
                        <p key={c}>{card.title}</p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

            </li>
          ))}

        </ul>

        {/* Buttons */}
        <div className="d-flex gap-2 desktop-btns">
          <button className="btn btn-warning">Get in touch</button>
          <button className="btn btn-outline-dark">Partner With Us</button>
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
                    <div className="menu-card">
                      <div className="line"></div>
                      <h6>{card.title}</h6>
                      <p>{card.desc}</p>
                    </div>
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
        {title:"Blockchain Development",desc:"Strategic services"},
        {title:"Identity Management",desc:"Secure identity"},
        {title:"Depin Development",desc:"Future apps"},
        {title:"Offshore Center",desc:"Build teams"}
      ]
    },

    "Demo":{
      description:"Navigate your journey towards blockchain",
      cards:[
        {title:"Blockchain2 Development",desc:"Strategic services"},
        {title:"Identity2 Management",desc:"Secure identity"},
        {title:"Depin2 Development",desc:"Future apps"},
        {title:"Offshore2 Center",desc:"Build teams"}
      ]
    }
  },
  AI:{
    "AI Development":{
      description:"AI solutions",
      cards:[
        {title:"ML Apps",desc:"Machine learning"},
        {title:"Chatbots",desc:"Assistants"},
        {title:"Vision AI",desc:"Image AI"},
        {title:"Automation",desc:"Process AI"}
      ]
    }
  },
  Web2:{
    "Game Development":{
      description:"Gaming solutions",
      cards:[
        {title:"Unity",desc:"3D games"},
        {title:"Unreal",desc:"AAA games"},
        {title:"Web3",desc:"Blockchain games"},
        {title:"AR/VR",desc:"Immersive"}
      ]
    }
  },
  Consulting:{
    "Tech Consulting":{
      description:"Strategic help",
      cards:[
        {title:"Architecture",desc:"System design"},
        {title:"Security",desc:"Risk audit"},
        {title:"Cloud",desc:"Infra"},
        {title:"Scaling",desc:"Growth"}
      ]
    }
  },
  Solutions:{
    "Business Solutions":{
      description:"Digital tools",
      cards:[
        {title:"ERP",desc:"Enterprise"},
        {title:"CRM",desc:"Customer"},
        {title:"Fintech",desc:"Finance"},
        {title:"Healthcare",desc:"Medical"}
      ]
    }
  },
  // Industries:{
  //   "Industry Solutions":{
  //     description:"Industry tech",
  //     cards:[
  //       {title:"Finance",desc:"Bank tech"},
  //       {title:"Retail",desc:"Commerce"},
  //       {title:"Logistics",desc:"Supply"},
  //       {title:"Education",desc:"EdTech"}
  //     ]
  //   }
  // },
  "About Us":{
    "Company":{
      description:"Know us",
      cards:[
        {title:"Our Story",desc:"Journey"},
        {title:"Team",desc:"Leadership"},
        {title:"Careers",desc:"Join"},
        {title:"Contact",desc:"Reach us"}
      ]
    }
  }
};