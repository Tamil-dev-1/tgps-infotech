import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import Dummy from '../../assets/images/home/dummy.jpg'

import "swiper/css";
import "./testimonial.css";

export default function Testimonial() {
  const swiperRef = useRef(null);

  return (
    <section className="testimonial-wrapper">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-4 mb-4 mb-lg-0">

            <p className="testimonial-small-title">Testimonial</p>

            <h2 className="testimonial-main-title">
              What Our Clients <br /> <span style={{ color: "#C6FF00" }}>Say About Us</span>
            </h2>

            <p className="testimonial-desc">
              Each demo built with Teba will look different.
              You can customize almost anything in the appearance of your website.
            </p>

            <div className="testimonial-nav-buttons">
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
              <SwiperSlide>
                <ImageCard img={Dummy} />
              </SwiperSlide>

              <SwiperSlide>
                <ImageCard img="https://images.pexels.com/photos/3228817/pexels-photo-3228817.jpeg" />
              </SwiperSlide>

              <SwiperSlide>
                <ImageCard img="https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg" />
              </SwiperSlide>
            </Swiper>

          </div>

        </div>
      </div>
    </section>
  );
}

/* IMAGE CARD COMPONENT */
function ImageCard({ img }) {
  return (
    <div className="testimonial-image-box">
      <img src={img} alt="client" />
    </div>
  );
}