import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "./testimonial.css";

export default function Testimonial() {

  const swiperRef = useRef(null);

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-4 mb-4 mb-lg-0">

            <p className="small-title">Testimonial</p>

            <h2 className="main-title">
              What Our Clients <br /> Say About Us
            </h2>

            <p className="desc">
              Each demo built with Teba will look different.
              You can customize almost anything in the appearance of your website.
            </p>

            <div className="nav-buttons">
              <button onClick={() => swiperRef.current.slidePrev()}>
                ←
              </button>
              <button onClick={() => swiperRef.current.slideNext()}>
                →
              </button>
            </div>

          </div>

          {/* RIGHT */}
          <div className="col-lg-8">

            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
            >
              <SwiperSlide><Card/></SwiperSlide>
              <SwiperSlide><Card2 /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
            </Swiper>

          </div>

        </div>
      </div>
    </section>
  );
}

function Card() {
  return (
    <div className="testimonial-card">

      <div className="stars">★★★★★</div>

      <p className="testimonial-text">
        Working with several word themes and templates the last
        years only can say this is best in every level use it for
        my reviews that I have already are company and the reviews
        that I have already are all excellent. Not only the design
        but the code
      </p>

      <div className="client-info">
        <img src="https://i.pravatar.cc/60" alt="" />

        <div>
          <h6>Marvin McKinney</h6>
          <span>Product Manager</span>
        </div>

        <div className="quote">❞</div>
      </div>

    </div>
  );
}


function Card2() {
  return (
    <div className="testimonial-card">

      <div className="stars">★★★★★</div>

      <p className="testimonial-text">
        Card Working with several word themes and templates the last
        years only can say this is best in every level use it for
        my reviews that I have already are company and the reviews
        that I have already are all excellent. Not only the design
        but the code
      </p>

      <div className="client-info">
        <img src="https://i.pravatar.cc/60" alt="" />

        <div>
          <h6>Marvin McKinney</h6>
          <span>Product Manager</span>
        </div>

        <div className="quote">❞</div>
      </div>

    </div>
  );
}