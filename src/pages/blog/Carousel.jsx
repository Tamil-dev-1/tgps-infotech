import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import  { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {

  const {theme} = useContext(ThemeContext);
  const items = [
    { title: "Lorem1", img: "https://images.pexels.com/photos/1464196/pexels-photo-1464196.jpeg" },
    { title: "Lorem2", img: "https://images.pexels.com/photos/1464196/pexels-photo-1464196.jpeg" },
    { title: "Lorem3", img: "https://images.pexels.com/photos/1464196/pexels-photo-1464196.jpeg" },
    { title: "Lorem4", img: "https://images.pexels.com/photos/1464196/pexels-photo-1464196.jpeg" },
    { title: "Lorem5", img: "https://images.pexels.com/photos/1464196/pexels-photo-1464196.jpeg" },
    { title: "Lorem6", img: "https://images.pexels.com/photos/1464196/pexels-photo-1464196.jpeg" },
  ];

  return (
    <div className="container py-5">

      {/* ---------- Heading Section ---------- */}
      <div className="mb-4">
        <h3
          style={{
            fontWeight: "700",
            fontSize: "24px",
            color : theme === "dark" ? "#fff" : "#111",
            marginBottom: "6px",
          }}
        >
          Featured Videos
        </h3>

        {/* Underline Line */}
        <div
          style={{
            width: "70px",
            height: "3px",
            backgroundColor: "#4b36ff",
            borderRadius: "10px",
          }}
        ></div>
      </div>

      {/* ---------- Swiper Slider ---------- */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },       // Mobile
          768: { slidesPerView: 2 },     // Tablet
          1024: { slidesPerView: 4 },    // Desktop
        }}
        style={{ paddingBottom: "40px" }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="card border-0 shadow-lg"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              <img
                src={item.img}
                alt=""
                className="w-100"
                style={{
                  height: "160px",
                  objectFit: "cover",
                }}
              />
              <div className="p-3 text-center">
                <h6 style={{ fontWeight: "600", fontSize: "16px" }}>
                  {item.title}
                </h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
