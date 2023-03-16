import { useEffect } from "react";
import { Link } from "react-router-dom";
import blueprint from "../../assets/blueprint.png";
import concrete2 from "../../assets/concrete2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.styles.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);

  return (
    <div className="projects-wrapper">
      <Link
        to='/additions'
        className="additions-container"
        data-aos="fade-up-right"
        data-aos-anchor-placement="bottom-bottom"
        style={{
          backgroundImage: `url(${blueprint})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <span className="additions-title">ADDITIONS</span>
        <span className="additions-text">
          BOOST THE SQUARE FOOTAGE OF YOUR HOME BY GETTING IN TOUCH WITH US NOW.
        </span>
      </Link>
      <Link
        to='/concrete'
        className="concrete-container"
        data-aos="fade-up-left"
        data-aos-anchor-placement="top-bottom"
        style={{
          backgroundImage: `url(${concrete2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <span className="concrete-title">CONCRETE</span>
        <span className="concrete-text">
          RELY ON OUR TEAM TO INSTALL CONCRETE DRIVEWAYS, FOUNDATIONS, AND
          PATIOS.
        </span>
      </Link>
    </div>
  );
};

export default Projects;
