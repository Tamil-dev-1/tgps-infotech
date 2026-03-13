import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogCarousel = () => {
  return (
    <div style={{ padding: "60px 0", backgroundColor: "#111111" }}>
      <div className="container text-center">

        <h2 style={{ fontWeight: "700", color: "#ffffff" }}>
          Our Blogs
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className="mt-5"
        >

          {/* SLIDE 1 */}
          <SwiperSlide>
            <Link to="/blog-1" className="text-decoration-none">
              <div
                className="card border-0"
                style={{
                  backgroundColor: "#C6FF00",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/2473183/pexels-photo-2473183.jpeg"
                  alt="Blog"
                  className="card-img-top"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h6 style={{ fontWeight: "600", color: "#111111" }}>
                    Blockchain’s Role <br /> in Renewable Energy
                  </h6>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <Link to="/blog-2" className="text-decoration-none">
              <div
                className="card border-0"
                style={{
                  backgroundColor: "#C6FF00",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg"
                  alt="Blog"
                  className="card-img-top"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h6 style={{ fontWeight: "600", color: "#111111" }}>
                    Decentralized Energy: <br /> Benefits and Challenges
                  </h6>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <Link to="/blog-3" className="text-decoration-none">
              <div
                className="card border-0"
                style={{
                  backgroundColor: "#C6FF00",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg"
                  alt="Blog"
                  className="card-img-top"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h6 style={{ fontWeight: "600", color: "#111111" }}>
                    How Smart Grids Are Shaping the Future of Energy Distribution
                  </h6>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
            <Link to="/blog-4" className="text-decoration-none">
              <div
                className="card border-0"
                style={{
                  backgroundColor: "#C6FF00",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/38639/mockup-psd-ipad-iphone-38639.jpeg"
                  alt="Blog"
                  className="card-img-top"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <p style={{ fontWeight: "600", color: "#111111" }}>
                    Sustainable Energy Practices for Businesses
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* SLIDE 5 */}
          <SwiperSlide>
            <Link to="/blog-5" className="text-decoration-none">
              <div
                className="card border-0"
                style={{
                  backgroundColor: "#C6FF00",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg"
                  alt="Blog"
                  className="card-img-top"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h6 style={{ fontWeight: "600", color: "#111111" }}>
                    The Importance of Energy Transparency in Building Trust
                  </h6>
                </div>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>

        {/* VIEW MORE BUTTON */}
        <div className="mt-5 text-center">
          <Link to="/blogs">
            <button
              className="btn px-5 py-2 fw-semibold"
              style={{
                backgroundColor: "#C6FF00",
                color: "#111111",
                borderRadius: "30px",
                border: "none",
                transition: "all 0.3s ease",
              }}
            >
              View More Blogs
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogCarousel;