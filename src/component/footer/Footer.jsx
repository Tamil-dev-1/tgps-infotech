import React from "react";

const Footer = () => {
  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <div className="container my-5">
        <div
          className="p-5 rounded-4 text-white"
          style={{
            background: "linear-gradient(90deg, #3b4fe4, #5a6df5)",
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-3 text-center text-md-start mb-4 mb-md-0">
              <img
                src="https://i.imgur.com/8Km9tLL.png"
                alt="Man with laptop"
                className="img-fluid"
                style={{ maxHeight: "180px" }}
              />
            </div>

            <div className="col-md-6 text-center text-md-start">
              <h3 className="fw-bold">
                Stay Connected With <br /> Cutting Edge IT
              </h3>
            </div>

            <div className="col-md-3 text-center text-md-end mt-3 mt-md-0">
              <button className="btn btn-light rounded-pill px-4 fw-semibold">
                Talk To A Specialist →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="pt-5 pb-4 text-white" style={{ background: "#1d1e60" }}>
        <div className="container">
          <div className="row">

            {/* Column 1 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="fw-bold mb-3">Extech</h3>
              <p className="text-light">
                Extech IT is a Phasellus ultricies aliquam volutpat ullamcorper
                laoreet neque, a lacinia curabitur lacinia mollis.
              </p>

              <div className="d-flex gap-2 mt-3">
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Extech About</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Our Services</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Our Blogs</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">FAQ'S</a></li>
                <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Recent Posts</h5>

              <div className="d-flex mb-3">
                <img
                  src="https://images.pexels.com/photos/7651715/pexels-photo-7651715.jpeg"
                  alt=""
                  className="rounded me-3"
                  width="60"
                  height="60"
                />
                <div>
                  <small className="text-info">15th April, 2024</small>
                  <p className="mb-0 small">
                    Top 5 Most Famous Technology Trend In 2024
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <img
                  src="https://images.pexels.com/photos/7651715/pexels-photo-7651715.jpeg"
                  alt=""
                  className="rounded me-3"
                  width="60"
                  height="60"
                />
                <div>
                  <small className="text-info">20th June, 2024</small>
                  <p className="mb-0 small">
                    The Surfing Man Will Blow Your Mind
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <p><i className="fa fa-envelope me-2"></i> info@example.com</p>
              <p><i className="fa fa-phone me-2"></i> +208-6666-0112</p>

              <div className="input-group mt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                />
                <button className="btn btn-primary">→</button>
              </div>

              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label small">
                  I agree to the <a href="#" className="text-white">Privacy Policy</a>
                </label>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;