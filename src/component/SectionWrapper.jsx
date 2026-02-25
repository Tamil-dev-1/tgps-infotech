import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";


const SectionWrapper = ({ theme, className = "", children }) => {
  const { globalTheme } = useContext(ThemeContext);
 

  // Section theme overrides global theme
 
  const appliedTheme = theme || globalTheme;
  

  return (
    <section
      data-theme={appliedTheme}
      className={`themed-section ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

