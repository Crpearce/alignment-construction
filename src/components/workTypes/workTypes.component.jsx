import "./workTypes.styles.css";
import kitchen from "../../assets/remodeling.png";
import construction from "../../assets/structural.png";

const WorkTypes = () => {
  return (
    <div className="work-type-wrapper">
      <div
        className="remodeling-container"
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
