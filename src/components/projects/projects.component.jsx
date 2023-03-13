import { useEffect } from "react";
import blueprint from "../../assets/blueprint.png";
import concrete2 from "../../assets/concrete2.png";
import AOS from "aos";
import "./projects.styles.css";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);

  return (
    <div className="projects-wrapper">
      <div
        className="additions-container"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
        style={{
          backgroundImage: `url(${blueprint})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h4 className="additions-title">ADDITIONS</h4>
        <span className="additions-text">
          BOOST THE SQUARE FOOTAGE OF YOUR HOME BY GETTING IN TOUCH WITH US NOW.
        </span>
      </div>
      <div
        className="concrete-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        style={{
          backgroundImage: `url(${concrete2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <h4 className="concrete-title">CONCRETE</h4>
        <span className="concrete-text">
          RELY ON OUR TEAM TO INSTALL CONCRETE DRIVEWAYS, FOUNDATIONS, AND
          PATIOS.
        </span>
      </div>
    </div>
  );
};

export default Projects;
