import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "./Blog.css";
import BlogThumb1 from "../../assets/images/Blog/blogThumb1.jpg";
import BlogThumb2 from "../../assets/images/Blog/blogThumb2.jpg";
import BlogThumb3 from "../../assets/images/Blog/blogThumb3.jpg";

const posts = [
  {
    id: 1,
    category: "Shared Hosting",
    date: "March 24, 2024",
    title: "Attentive Was Born In 2015 Help Sales Teams",
    image: BlogThumb1,
  },
  {
    id: 2,
    category: "Uncategorized",
    date: "March 14, 2024",
    title: "Best And Fastest Data Server Ever",
    image: BlogThumb2,
  },
  {
    id: 3,
    category: "Technology",
    date: "March 29, 2024",
    title: "Life Won’t One Beast Air Over Above All",
    image: BlogThumb3,
  },
  {
    id: 4,
    category: "Cloud",
    date: "April 01, 2024",
    title: "Modern Cloud Hosting Platform",
    image: BlogThumb2,
  },
  {
    id: 5,
    category: "Security",
    date: "April 10, 2024",
    title: "Advanced Server Security Solutions",
    image: BlogThumb3,
  },
];

export default function BlogCarousel() {
  return (
    <div className="blog-section py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <h6 className="blog-subtitle">LATEST BLOG</h6>
          <h2 className="blog-title">Our Blogs</h2>
        </div>

       <div className="blog-carousel-wrapper">
         <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="blog-card">

                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>

                <div className="blog-content-box">
                  <div className="blog-meta">
                    <span className="blog-category">
                      {post.category}
                    </span>
                    <span className="blog-date">
                      {post.date}
                    </span>
                  </div>

                  <h5 className="blog-heading">
                    {post.title}
                  </h5>

                  <div className="blog-footer">
                    <div>
                      <div className="author-name">Admin</div>
                      <small className="author-role">
                        Co, Founder
                      </small>
                    </div>
                    <button className="blog-btn">→</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>

      </div>
    </div>
  );
}