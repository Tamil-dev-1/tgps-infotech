import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-router-dom";

import "swiper/css";
import { path } from "framer-motion/client";

export default function BlogCarousel() {
  const { theme } = useContext(ThemeContext);

  const blogs = [
    {
      img: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
      author: "John Doe",
      date: "14 Jan, 2024",
      title: "Premium UI trends that will shape the next decade",
      path: "/blog-1"
    },
    {
      img: "https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg",
      author: "Sarah Smith",
      date: "22 Feb, 2024",
      title: "How modern branding works in a digital-first world",
      path: "/blog-2"
    },
    {
      img: "https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg",
      author: "Anoop Kumar",
      date: "05 Mar, 2024",
      title: "Building scalable web apps with React & Cloud",
      path: "/blog-3"
    },
    {
      img: "https://images.pexels.com/photos/8369764/pexels-photo-8369764.jpeg",
      author: "Emily Carter",
      date: "20 Mar, 2024",
      title: "Why storytelling matters for product design",
      path: "/blog-4"
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 hero-title">Recent Posts</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {blogs.map((item, i) => (
            <SwiperSlide key={i}>
  <Link to={item.path || "#"} style={{ textDecoration: "none", color: "inherit" }}>
    <div className="card h-100 border-0 rounded-5">
      <img src={item.img} alt="blog" className="w-100 rounded-top-5" />

      <div className="p-4">
        <small
          style={{
            color: theme === "dark" ? "#aaa" : "#777",
          }}
        >
          BY {item.author} — {item.date}
        </small>

        <h5 className="mt-2 fw-semibold">{item.title}</h5>

        <span className="fw-semibold text-primary">
          Read More →
        </span>
      </div>
    </div>
  </Link>
</SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}
