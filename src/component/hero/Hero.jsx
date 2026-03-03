import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.css";
import { useState } from "react";


export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="heros">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="heroSwiper"
        
      >
        <SwiperSlide className="hero-slide hero1">
          <div className={`hero-content ${activeIndex === 0 ? "animate" : ""}`}>
            <h1>Grow Your Business</h1>
            <p>We build modern digital solutions</p>
            <button>Let's Talk</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide hero2">
          <div className={`hero-content ${activeIndex === 1 ? "animate" : ""}`}>
            <h1>Creative IT Solutions</h1>
            <p>We turn ideas into reality</p>
            <button>Get Started</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide hero3">
          <div className={`hero-content ${activeIndex === 2 ? "animate" : ""}`}>
             <h1>Build Your Future</h1>
            <p>Modern Web Development</p>
            <button>Contact Us</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}