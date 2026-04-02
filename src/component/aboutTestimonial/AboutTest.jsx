import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "./AboutTest.css";

export default function Testimonial() {

  const swiperRef = useRef(null);

  return (
   <section className="tm-section">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT */}
      <div className="col-lg-4 mb-4 mb-lg-0">

        <p className="tm-small-title">Testimonial</p>

        <h2 className="tm-main-title">
          What Our Team <br /> <span style={{color:"#C6FF00"}}>Say About Us</span>
        </h2>

        <p className="tm-desc">
          Each demo built with Teba will look different.
          You can customize almost anything in the appearance of your website.
        </p>

        <div className="tm-nav-buttons">
          <button onClick={() => swiperRef.current.slidePrev()}>←</button>
          <button onClick={() => swiperRef.current.slideNext()}>→</button>
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
    <div className="tm-card">
      <div className="tm-stars">★★★★★</div>

      <p className="tm-text">
        Working with several word themes and templates...
      </p>

      <div className="tm-client-info">
        <img src="https://i.pravatar.cc/60" alt="" />

        <div>
          <h6>Marvin McKinney</h6>
          <span>Product Manager</span>
        </div>

        <div className="tm-quote">❞</div>
      </div>
    </div>
  );
}


function Card2() {
  return (
    <div className="tm-card">
      <div className="tm-stars">★★★★★</div>

      <p className="tm-text">
        Working with several word themes and templates...
      </p>

      <div className="tm-client-info">
        <img src="https://i.pravatar.cc/60" alt="" />

        <div>
          <h6>Marvin McKinney</h6>
          <span>Product Manager</span>
        </div>

        <div className="tm-quote">❞</div>
      </div>
    </div>
  );
}
