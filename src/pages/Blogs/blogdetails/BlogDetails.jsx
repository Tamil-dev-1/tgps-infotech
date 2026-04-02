import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogDetails.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "5 Essential Tips for Designing a Memorable Brand Logo",
    date: "December 15, 2022",
    author: "John Smith",
    img: "https://images.pexels.com/photos/5827838/pexels-photo-5827838.jpeg",
    path: "/blogs1",
  },
  {
    title: "The Dos and Don'ts of Social Media Marketing in 2022",
    date: "December 10, 2022",
    author: "Sarah Johnson",
    img: "https://images.pexels.com/photos/5827838/pexels-photo-5827838.jpeg",
    path: "/blogs2",
  },
  {
    title: "The Power of Video Marketing",
    date: "November 20, 2022",
    author: "Lisa Chen",
    img: "https://images.pexels.com/photos/5827838/pexels-photo-5827838.jpeg",
    path: "/blogs3",
  },
  {
    title: "Designing for Accessibility",
    date: "November 8, 2022",
    author: "Alex Lee",
    img: "https://images.pexels.com/photos/5827838/pexels-photo-5827838.jpeg",
    path: "/blogs4",
  },
];



const latestPosts = [
  {
    title: "Designing for Accessibility",
    date: "Feb 2025",
    img: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg",
    path: "/blogs4",
  },
  {
    title: "The Power of Video Marketing",
    date: "Jan 2025",
    img: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg",
    path: "/blogs3",
  },
  {
    title: "Social Media Marketing Tips",
    date: "Dec 2024",
    img: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg",
    path: "/blogs2",
  },
];

export default function BlogDetails() {
  const navigate = useNavigate();

  return (
    <section className="blog">
      <div className="container">

        {/* TITLE */}
        <div className="mt-5 mb-4">
          <h2 className="text-white text-center">Blog Details</h2>
        </div>

        <div className="row">

          {/* LEFT BLOG GRID */}
          <div className="col-lg-8">
            <div className="row g-4">
              {blogs.map((item, index) => (
                <div className="col-md-6" key={index}>

                  {/* CLICKABLE CARD */}
                  <div
                    className="blog__card"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(item.path)}
                  >
                    <img src={item.img} alt="" />

                    <h5>{item.title}</h5>

                    <p className="blog__meta">
                      {item.date} by {item.author}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">

            {/* SEARCH */}
            <div className="blog__sidebar-box">
              <h6>Search</h6>
              <div className="blog__search">
                <input type="text" placeholder="Search..." />
                <button><FaSearch /></button>
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="blog__sidebar-box">
              <h6>All Categories</h6>
              <ul>
                <li>Web Development</li>
                <li>App Development</li>
                <li>Social Media</li>
                <li>Marketing Strategy</li>
                <li>Video Production</li>
              </ul>
            </div>

           {/* LATEST POSTS */}
<div className="blog__sidebar-box">
  <h6>Latest Posts</h6>

  {latestPosts.map((item, index) => (
    <div
      className="blog__latest"
      key={index}
      style={{ cursor: "pointer" }}
      onClick={() => navigate(item.path)}
    >
      <img src={item.img} alt="" />

      <div>
        <p>{item.title}</p>
        <span>{item.date}</span>
      </div>
    </div>
  ))}

</div>

            {/* TAGS */}
            <div className="blog__sidebar-box">
              <h6>Popular Tags</h6>
              <div className="blog__tags">
                {["design", "branding", "seo", "ui/ux", "development"].map(
                  (tag) => (
                    <span key={tag}>{tag}</span>
                  )
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}