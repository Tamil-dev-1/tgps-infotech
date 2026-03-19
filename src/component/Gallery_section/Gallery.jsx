import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";
 import { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import GalleryImg1 from '../../assets/images/gallery/gallImg1.jpg'
import GalleryImg2 from '../../assets/images/gallery/gallImg2.jpg'

export default function Leaders() {

   

useEffect(() => {
  const handleMove = (e) => {
    const spark = document.createElement("div");
    spark.className = "spark";

    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";

    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 600);
  };

  window.addEventListener("mousemove", handleMove);

  return () => window.removeEventListener("mousemove", handleMove);
}, []);


    const createParticles = (e) => {
  const card = e.currentTarget;

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const x = (Math.random() - 0.5) * 120 + "px";
    const y = (Math.random() - 0.5) * 120 + "px";

    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);

    particle.style.left = "50%";
    particle.style.top = "50%";

    card.appendChild(particle);

    setTimeout(() => particle.remove(), 600);
  }
};

  const leaders = [
    { name: "Vikram R Singh",
         role: "Chief Executive Officer (CEO)",
         img: GalleryImg1,
         linkedin: "https://linkedin.com/in/vikram" },
    { name: "Shastri Pal Singa",
         role: "Chief Operating Officer (COO)",
         img: GalleryImg2,
         linkedin: "https://linkedin.com/in/shastri" },
    { name: "Clifton Cooper",
         role: "Business Head, US",
         img:  GalleryImg1,
         linkedin: "https://linkedin.com/in/clifton" },
    { name: "Arun Kumar",
         role: "CTO",
         img:  GalleryImg2,
         linkedin: "https://linkehttps://images.pexels.com/photos/5717555/pexels-photo-5717555.jpeg"},
    { name: "Ravi Teja",
         role: "Tech Lead",
         img:  GalleryImg1,
         linkedin: "https://linkedin.com/in/ravi" },

    { name: "John Peter",
         role: "Project Manager",
         img:  GalleryImg2,
         linkedin: "https://linkedin.com/in/john" },
    { name: "Kiran Raj",
         role: "UI/UX Lead",
         img:  GalleryImg1,
         linkedin: "https://linkedin.com/in/kiran" },
    { name: "Rahul Dev",
         role: "Backend Lead",
         img:  GalleryImg2,
         linkedin: "https://linkedin.com/in/rahul" },
    { name: "Sneha Iyer",
         role: "HR Manager",
         img:  GalleryImg1,
         linkedin: "https://linkedin.com/in/sneha" },
    { name: "David Lee", role: "Marketing Head",
         img:  GalleryImg2,
         linkedin: "https://linkedin.com/in/david" },


    { name: "Sanjay Kumar",
         role: "QA Lead",
         img:  GalleryImg1,
         linkedin: "https://linkedin.com/in/sanjay" },
    { name: "Priya Sharma",
         role: "Frontend Dev",
         img:  GalleryImg2,
         linkedin: "https://linkedin.com/in/priya" },
    { name: "Amit Shah",
         role: "DevOps Engineer",
         img:  GalleryImg1,
         linkedin: "https://linkedin.com/in/amit" },
    { name: "Neha Kapoor", 
        role: "Designer",
         img:  GalleryImg2,
         linkedin: "https://linkedin.com/in/neha" },
    { name: "Michael Roy",
         role: "Analyst",
         img:  GalleryImg1,
         linkedin: "https://linkedin.com/in/michael" },
  ];

  return (
    <section className="leaders-section py-5">
      <div className="container">
        <h2 className="text-center title mb-5">How we lead</h2>

        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-item">
              <div className="leader-card"  onMouseEnter={createParticles}>

                {/* LinkedIn Clickable Icon */}
                <div className="linkedin-icon">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>

                <img src={leader.img} alt={leader.name} />

                <div className="overlay">
                  <h6>{leader.name}</h6>
                  <p>{leader.role}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}