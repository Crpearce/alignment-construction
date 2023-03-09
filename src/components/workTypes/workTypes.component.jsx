import "./workTypes.styles.css";
import kitchen from "../../assets/remodeling.png";
import construction from "../../assets/structural.png";

const WorkTypes = () => {
  return (
    <div className="work-type-wrapper">
      <a
        className="remodeling-container"
        style={{
          backgroundImage: `url(${kitchen})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h4 className="remodeling-header">REMODELING</h4>
        <span>
          IF YOU WANT TO UPDATE YOUR PLACE. HIRE OUR HOME REMODELING CONTRACTOR.
        </span>
      </a>
      <div
        className="structural-container"
        style={{
          backgroundImage: `url(${construction})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <h4 className="structural-header">STRUCTURAL SERVICES</h4>
        <span>
          YOU CAN COUNT ON US TO IMPROVE THE STRUCTURAL INTEGRITY OF YOUR PROPERTY.
        </span>
      </div>
    </div>
  );
};

export default WorkTypes;
