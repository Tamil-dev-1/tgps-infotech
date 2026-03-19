import "./logoMarquee.css";

// ✅ Import local images
import React_logo from '../../assets/images/web2/React-icon.svg'
import Nodejs_logo from '../../assets/images/web2/Node.js_logo.svg'
import Docker_logo from '../../assets/images/web2/Docker_logo.svg'
import Sass_logo from '../../assets/images/web2/Sass_logo.svg'
import Figma_logo from '../../assets/images/web2/Figma-logo.svg'
import Express_logo from '../../assets/images/web2/Expressjs.png'
import MongoDB_logo from '../../assets/images/web2/MongoDB_logo.svg'
import Bootstrap_logo from '../../assets/images/web2/Bootstrap_logo.svg'
import Typescript_logo from '../../assets/images/web2/Typescript.svg'
import Redux_logo from '../../assets/images/web2/Redux.png'
// import jsLogo from "../../assets/images/logos/js.png";
// import nodeLogo from "../../assets/images/logos/node.svg";
// import dockerLogo from "../../assets/images/logos/docker.svg";
// import sassLogo from "../../assets/images/logos/sass.svg";
// import figmaLogo from "../../assets/images/logos/figma.svg";

// ✅ Store in array
const logos = [
  React_logo,
  Nodejs_logo,
  Docker_logo,
 Sass_logo,
  Figma_logo,
  Express_logo,
  MongoDB_logo,
  Bootstrap_logo,
  Typescript_logo,
  Redux_logo

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