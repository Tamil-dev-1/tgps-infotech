import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Instagram from '../assets/images/instagram.png';

const SocialCarousel = () => {
  return (
    <div
      id="socialCarousel"
      className="carousel slide text-center py-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/facebook.png"
              alt="Facebook"
              className="mx-2"
              style={{ width: "60px" }}
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/twitter.png"
              alt="Twitter"
              className="mx-2"
              style={{ width: "60px" }}
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src={Instagram}
              alt="Instagram"
              className="mx-2"
              style={{ width: "60px" }}
            />
          </a>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/linkedin.png"
              alt="LinkedIn"
              className="mx-2"
              style={{ width: "60px" }}
            />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/youtube.png"
              alt="YouTube"
              className="mx-2"
              style={{ width: "60px" }}
            />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <img
              src=""
              alt="Pinterest"
              className="mx-2"
              style={{ width: "60px" }}
            />
          </a>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#socialCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#socialCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default SocialCarousel;
