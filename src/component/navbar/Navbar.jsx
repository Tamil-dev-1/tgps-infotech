import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ThemeContext } from "../../ThemeContext";

const NavbarComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // BACKGROUND Color

  const darkGradients = [
  "linear-gradient(90deg,rgba(6, 5, 5, 1) 0%, rgba(5, 3, 6, 1) 56%)"
];

const lightGradients = [
  "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)"
];

const bg =
  theme === "dark"
    ? darkGradients[Math.floor(Math.random() * darkGradients.length)]
    : lightGradients[Math.floor(Math.random() * lightGradients.length)];


  const menuData = [
    {
      key: "learn",
      title: "Learn",
      links: [
        { to: "about-frecx", label: "About FreC", icon: "bi-info-circle" },
        { to: "governance", label: "Governance", icon: "bi-diagram-3" },
        { to: "/faq", label: "FAQ", icon: "bi-question-circle" },
      ],
    },
    {
      key: "build",
      title: "Build",
      links: [
        { to: "developer", label: "Developer", icon: "bi-code-slash" },
        { to: "doc", label: "Docs", icon: "bi-journal-text" },
      ],
    },
    {
      key: "getStarted",
      title: "Get Started",
      links: [
        { to: "stake-earn", label: "Stake & Earn", icon: "bi-wallet2" },
      ],
    },
    {
      key: "ecosystem",
      title: "Ecosystem",
      links: [
        { to: "/ourproduct", label: "Our Product", icon: "bi-box" },
        { to: "/blog", label: "Blog", icon: "bi-pencil-square" },
      ],
    },
    {
      key: "participate",
      title: "Research",
      links: [
        { to: "whitepaper", label: "Whitepaper", icon: "bi-file-earmark-text" },
        { to: "roadmap", label: "Roadmap", icon: "bi-map" },
      ],
    },
  ];

  return (
    <nav className={`navbar modern-navbar ${scrolled ? "nav-scrolled" : ""}`} style={{
  background: bg,
  color: theme === "dark" ? "#fff" : "#111",
  transition: "0.3s",
}}
>
      <div className="container"
    

      >

        {/* LEFT LOGO */}
        <Link className="navbar-brand modern-brand" to="/">
          <img src="/logo.svg" width="34" alt="logo" />
          <span>FreC</span>
        </Link>

        {/* CENTER MENU — DESKTOP ONLY */}
        <div className="nav-center d-none d-lg-flex">
          {menuData.map((menu) => (
            <div className="modern-dropdown-wrapper" key={menu.title}>
              <button className="modern-nav-pill">
                {menu.title}
                <i className="bi bi-chevron-down ms-1"></i>
              </button>

              <div className="modern-dropdown-menu">
                {menu.links.map((link) => (
                  <Link key={link.label} to={link.to} className="modern-drop-item">
                    <i className={`bi ${link.icon}`}></i>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="nav-right" style={{
          color: theme === "dark" ? "#00F7FF" : "#ffffff",
    transition: "0.3s",
        }}>
          <i className="bi bi-search nav-icon" style={{fontSize:"20px"}}></i>
          <i
            className={`bi ${theme === "light" ? "bi-sun" : "bi-moon"} nav-icon`}
            onClick={toggleTheme} style={{fontSize:"20px"}}
          ></i>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="mobile-hamburger d-lg-none"
          onClick={() => setMobileOpen(true)}
        >
          <i className="bi bi-list"></i>
        </button>

      </div>

      {/* ===== MOBILE SIDEBAR ===== */}
      <div className={`mobile-sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-sidebar-header">
          <span>Menu</span>
          <i
            className="bi bi-x-lg"
            onClick={() => setMobileOpen(false)}
          ></i>
        </div>

        {menuData.map((menu) => (
          <div key={menu.title} className="mobile-menu-group">
            <div className="mobile-menu-title"
            style={{
                color: theme === "dark" ? "green" : "#FF8040",
  transition: "0.3s",
            }}
            >{menu.title}</div>

            {menu.links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="mobile-menu-link"
                onClick={() => setMobileOpen(false)}
              >
                <i className={`bi ${link.icon}`}></i>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* BACKDROP */}
      <div
        className={`mobile-backdrop ${mobileOpen ? "show" : ""}`}
        onClick={() => setMobileOpen(false)}
      ></div>

    </nav>
  );
};

export default NavbarComponent;
