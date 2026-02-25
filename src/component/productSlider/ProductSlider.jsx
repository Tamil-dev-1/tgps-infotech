import React from "react";
import './productSlider.css'

export default function ProductSlider() {
  return (
    <>
      <div className="container py-5">
        <h1 className="fw-bold mb-4 text-center hero-title">Our Product</h1>

        <div className="d-flex justify-content-center my-5">
          <div
            id="carouselExampleCaptions"
            className="carousel slide custom-carousel"
            data-bs-ride="carousel"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
            </div>

            {/* Slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg" className="d-block w-100" alt="Slide 1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>PRODUCT - 1</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quis?</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/2393831/pexels-photo-2393831.jpeg" className="d-block w-100" alt="Slide 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>PRODUCT - 2</h5>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, corrupti.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg" className="d-block w-100" alt="Slide 3" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>PRODUCT - 3</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore!</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Fix CSS */}
      <style>{`
        .custom-carousel {
          width: 50%;
          padding-left: 15px;
          padding-right: 15px;
        }

        /* MOBILE */
        @media (max-width: 992px) {
          .custom-carousel {
            width: 100% !important;
          }
        }

        /* PREVENT SHRINK (important fix) */
        .custom-carousel img {
          object-fit: cover;
          height: 350px;
        }

        @media (max-width: 576px) {
          .custom-carousel img {
            height: 250px;
          }
        }
      `}</style>
    </>
  );
}
