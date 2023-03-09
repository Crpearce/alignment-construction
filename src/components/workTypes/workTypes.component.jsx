import { useEffect } from "react";
import kitchen from "../../assets/remodeling.png";
import construction from "../../assets/structural.png";
import AOS from "aos";
import "./workTypes.styles.css";
import "aos/dist/aos.css";

const WorkTypes = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="work-type-wrapper">
      <div
        className="remodeling-container"
        data-aos="fade-right"
        style={{
          backgroundImage: `url(${kitchen})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h4 className="remodeling-header">REMODELING</h4>
        <span  className="remodeling-text">
          IF YOU WANT TO UPDATE YOUR PLACE. HIRE OUR HOME REMODELING CONTRACTOR.
        </span>
      </div>
      <div
        className="structural-container"
        data-aos="fade-left"
        style={{
          backgroundImage: `url(${construction})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <h4 className="structural-header">STRUCTURAL SERVICES</h4>
        <span className="structural-text">
          YOU CAN COUNT ON US TO IMPROVE THE STRUCTURAL INTEGRITY OF YOUR PROPERTY.
        </span>
      </div>
    </div>
  );
};

export default WorkTypes;
