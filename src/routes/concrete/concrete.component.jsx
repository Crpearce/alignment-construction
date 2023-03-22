import { useEffect } from "react";
import { Link } from "react-router-dom";
import walkway from "../../assets/walkway.png";
import AOS from "aos";
import "./concrete.styles.css";
import "aos/dist/aos.css";

const Concrete = () => {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);

  return (
    <>
      <div className="home-additions-wrapper">
        <div className="home-details-container">
          <h4 className="home-additions-header" data-aos="fade-right">
            Concrete
          </h4>
          <p className="home-additions-text" data-aos="fade-right">
            Looking for a new retaining wall, concrete patio, sidewalk,
            foundation, firepit, walkway or driveway? You can look to us for
            both commercial and residential projects. Reach out now for concrete
            driveway installation in Littleton & Aurora, CO.
          </p>
          <Link to="/contact" className="concrete-contact-button">
            <button>Contact Us</button>
          </Link>
        </div>
        <div
          className="home-images-container"
          style={{
            backgroundColor: "#4a4a4a",
          }}
        >
          <img
            src={walkway}
            data-aos="fade-left"
            className="concrete-image"
            alt="concrete block walkway"
          />
        </div>
      </div>
      <div className="home-additions-types-container">
        <div className="popular-addition-container">
          <h2 className="popular-additions-header">
            POPULAR CONCRETE SERVICES
          </h2>
          <p className="popular-additions-text">
            We offer extensive concrete services to best meet your needs. You
            can count on us to install:
          </p>
        </div>
        <ul className="popular-addition-options-container">
          <li className="additions-list">Retaining walls</li>
          <li className="additions-list">Concrete patio to boost your outdoor living space</li>
          <li className="additions-list">Sidewalks</li>
          <li className="additions-list">Concrete foundation to start your next building project</li>
          <li className="additions-list">Concrete walkway to enhance your home's appearance</li>
          <li className="additions-list">Fire Pits</li>
        </ul>
      </div>
      <div className="concrete-project-types-container">
        <div className="concrete-type-driveway">
          <h2 className="concrete-additions-header1">DRIVEWAYS</h2>
        </div>
        <div className="concrete-type-patio">
          <h2 className="concrete-additions-header2">PATIOS</h2>
        </div>
        <div className="concrete-type-retaining">
          <h2 className="concrete-additions-header1">RETAINING WALLS</h2>
        </div>
        <div className="concrete-type-foundation">
          <h2 className="concrete-additions-header2">FOUNDATIONS</h2>
        </div>
      </div>
    </>
  );
};

export default Concrete;
