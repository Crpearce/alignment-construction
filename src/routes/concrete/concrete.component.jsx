import "./concrete.styles.css";
import concrete1 from "../../assets/concrete.png";
import walkway from "../../assets/walkway.png";

const Concrete = () => {
  return (
    <>
      <div className="home-additions-wrapper">
        <div className="home-details-container">
          <h4 className="home-additions-header" data-aos="fade-right">
            Concrete
          </h4>
          <p className="home-additions-text" data-aos="fade-right">
            Looking for a new retaining wall, concrete patio, sidewalk,
            foundation, firepit or walkway? You can look to us for both
            commercial and residential projects. Reach out now for concrete
            driveway installation in Littleton & Aurora, CO.
          </p>
        </div>
        <div
          className="home-images-container"
          style={{
            backgroundImage: `url(${concrete1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
          <li className="additions-list">
            Concrete patio to boost your outdoor living space
          </li>
          <li className="additions-list">Sidewalks</li>
          <li className="additions-list">
            Concrete foundation to start your next building project
          </li>
          <li className="additions-list">
            Concrete walkway to enhance your home's appearance
          </li>
          <li className="additions-list">Fire Pits</li>
        </ul>
      </div>
      {/* <div className="room-addition-container">
          <img
            src={addition1}
            alt="basement-addition"
            className="room-addition-image"
          />
          <p className="room-addition-text" data-aos="fade-up">
            When it comes to room additions, we can tackle any job you throw our
            way. Want to add on a Bathroom, Living room, Bedroom, or Home theater?
            Our team will enhance the appearance, value and functionality
            of your property. If you're searching for room addition services in
            Littleton, CO, reach out now.
          </p>
          <img
            src={addition2}
            alt="garage-addition"
            className="room-addition-image"
          />
        </div> */}
    </>
  );
};

export default Concrete;
