import concrete from "../../assets/concrete.png";
import "./concrete.styles.css";

const Concrete = () => {
  return (
    <div
      className="concrete-container"
      style={{
        backgroundImage: `url(${concrete})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
        <h3 className="concrete-header">BEAUTIFY YOUR PLACE WITH NEW CONCRETE FEATURES</h3>
        <p className="concrete-schedule">SCHEDULE CONCRETE FLATWORK SERVICES TODAY</p>
        <button className="concrete-button">CONTACT US</button>
    </div>
  );
};

export default Concrete;
