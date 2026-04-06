import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {

  const sharePage = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: "Check out this page",
        url: window.location.href,
      })
      .catch((error)=> console.log("Sharing failed", error));
    }
    else {
      alert("Sharing is not supported in this browser")
    }
  }

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title text-white">Quick Links</h5>
            <ul className="footer-links footer-text-color blog-hover">
              <li>
                <Link className="text-decoration-none text-white" to ="/blockchain">
              Blockchain Development
              </Link>
              </li>

              <li>
                <Link  to="/Ai" className="text-decoration-none text-white" >Ai</Link>
              </li>
              <li>
                <Link to="/web2" className="text-decoration-none text-white">Web2</Link>
                </li>
              <li>
                <Link to="/consulting" className="text-decoration-none text-white">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title text-white">Connect</h5>

            <div className="contact-block">
              <h6 className="text-decoration-underline">Sales Enquiry</h6>
              <p className="footer-text-color"><FaPhone /> +91 1234567891 (IND)</p>
              <p className="footer-text-color"><FaPhone /> +9234567899 (UAE)</p>
              <p className="footer-text-color"><FaEnvelope /> xyz@gmail.com</p>
            </div>

            <div className="contact-block">
              <h6 className="text-decoration-underline">HR Enquiry</h6>
              <p className="footer-text-color"><FaPhone /> +91 1234567891</p>
              <p className="footer-text-color"><FaEnvelope /> xyz@gmail.com</p>
            </div>

            {/* <div className="contact-block">
              <h6 className="text-decoration-underline">General Enquiry</h6>
              <p className="footer-text-color"><FaPhone /> +91 1234567891</p>
              <p className="footer-text-color"><FaEnvelope /> xyz@gmail.com</p>
            </div> */}
          </div>

          {/* Global Presence */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title text-white">Global Presence</h5>

            <div className="row">
              <div className="col-md-6 col-12">
                <div className="presence">
                  <h6 className="text-decoration-underline">INDIA</h6>
                  <p className="footer-text-color">
                    C-208, Lorem, ipsum dolor.,<br />
                    Lorem, ipsum dolor. 160059
                  </p>
                  <p className="footer-text-color">
                    Site 208, Lorem, ipsum dolor.,<br />
                    Lorem, ipsum dolor., 560100
                  </p>
                </div>

                <div className="presence">
                  <h6 className="text-decoration-underline">Tailand</h6>
                  <p className="footer-text-color">
                    3111 Lorem ipsum dolor sit.<br />
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="presence">
                  <h6 className="text-decoration-underline">USA</h6>
                  <p className="footer-text-color">
                    3/55 Lorem, ipsum dolor.<br />
                    Lorem, ipsum dolor.
                  </p>
                </div>

                <div className="presence">
                  <h6 className="text-decoration-underline">UAE</h6>
                  <p className="footer-text-color">
                    Lorem ipsum dolor sit.<br />
                    Lorem ipsum dolor sit.
                  </p>
                </div>

                <div className="presence">
                  <h6 className="text-decoration-underline">UAE</h6>
                  <p className="footer-text-color">
                    Lorem ipsum dolor sit amet.<br />
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title text-white">Follow</h5>

            <div className="social-icons" style={{cursor: 'pointer'}} onClick={sharePage}>
              <span><FaLinkedinIn /></span>
              <span><FaXTwitter /></span>
              <span><FaInstagram /></span>
              <span><FaFacebookF /></span>
              <span><FaYoutube /></span>
              <span><FaTelegram /></span>
              <span><FaWhatsapp /></span>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-top border-muted mt-4 pt-3">
          <p className="mb-0 footer-text-color">
            © 2026 Your Company. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}