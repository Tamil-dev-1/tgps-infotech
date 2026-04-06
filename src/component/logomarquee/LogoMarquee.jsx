import "./logoMarquee.css";

// ✅ Import local images
import logo1 from '../../assets/images/web2/logo1.png'
import logo2 from '../../assets/images/web2/logo2.jpg'
import logo3 from '../../assets/images/web2/logo3.webp'
import logo4 from '../../assets/images/web2/logo4.jpg'
import logo5 from '../../assets/images/web2/logo5.png'
import logo6 from '../../assets/images/web2/logo6.webp'
import logo7 from '../../assets/images/web2/logo7.jpg'
import logo8 from '../../assets/images/web2/logo8.png'
import logo9 from '../../assets/images/web2/logo9.jpg'
// import logo10 from '../../assets/images/web2/logo10.png'
import logo11 from '../../assets/images/web2/logo11.jpg'
import logo12 from '../../assets/images/web2/logo12.png'
import logo13 from '../../assets/images/web2/skoda.png'
import logo14 from '../../assets/images/web2/logo14.png'
import logo15 from '../../assets/images/web2/logo15.png'
import logo16 from '../../assets/images/web2/logo16.png'
import logo17 from '../../assets/images/web2/logo17.png'
import logo18 from '../../assets/images/web2/logo18.png'
import logo19 from '../../assets/images/web2/logo19.png'
// import logo20 from '../../assets/images/web2/logo20.png'
import logo21 from '../../assets/images/web2/logo21.png'
import logo22 from '../../assets/images/web2/logo22.png'
import logo23 from '../../assets/images/web2/logo23.png'
import logo24 from '../../assets/images/web2/logo24.png'
// import logo25 from '../../assets/images/web2/logo25.png'

// import jsLogo from "../../assets/images/logos/js.png";
// import nodeLogo from "../../assets/images/logos/node.svg";
// import dockerLogo from "../../assets/images/logos/docker.svg";
// import sassLogo from "../../assets/images/logos/sass.svg";
// import figmaLogo from "../../assets/images/logos/figma.svg";

// ✅ Store in array
const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo21,
  logo22,
  logo23,
  logo24,
  
];

export default function LogoMarquee({ speed = 30 }) {
  return (
    <div className="marquee-wrapper">
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Duplicate for infinite scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}