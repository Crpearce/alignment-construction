import { useEffect } from "react";
import { Link } from "react-router-dom";
import walkway from "../../assets/walkway.png";
import AOS from "aos";
import "./concrete.styles.css";
import "aos/dist/aos.css";

const Concrete = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
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
          <Link
            to="/contact"
            className="concrete-contact-button"
            data-aos="fade-right"
          >
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
          <li className="additions-list" data-aos="fade-left">
            Retaining walls
          </li>
          <li className="additions-list" data-aos="fade-left">
            Concrete patio to boost your outdoor living space
          </li>
          <li className="additions-list" data-aos="fade-left">
            Sidewalks
          </li>
          <li className="additions-list" data-aos="fade-left">
            Concrete foundation to start your next building project
          </li>
          <li className="additions-list" data-aos="fade-left">
            Concrete walkway to enhance your home's appearance
          </li>
          <li className="additions-list" data-aos="fade-left">
            Fire Pits
          </li>
        </ul>
      </div>
      <div className="concrete-project-types-container">
        <div className="concrete-type-driveway">
          <h2 className="concrete-additions-header1" data-aos="fade-in">
            DRIVEWAYS
          </h2>
          <div className="concrete-additions-info-container">
            <p className="concrete-additions-info">
              Driveways aren't just for parking - they also affect your home's
              curb appeal. That's why you should hire Alignment Construction LLC
              for concrete driveway installations. Our team of experts will
              install an elegant driveway that will last for years to come.
            </p>
            <img src={walkway} className='concrete-additions-photo'/>
          </div>
        </div>
        <div className="concrete-type-patio">
          <h2 className="concrete-additions-header2" data-aos="fade-in">
            PATIOS
          </h2>
          <div className="concrete-additions-info-container">
            <img src={walkway} className='concrete-additions-photo'/>
            <p className="concrete-additions-info">
              Do you want the perfect spot to sit and enjoy the weather? A
              decorative concrete patio can make your property more attractive
              while adding a new space to your home. Alignment Construction in
              Littleton & Aurora, CO and surrounding areas will complete your
              concrete patio installation correctly. We'll add a stain-resistant
              sealing to make this the perfect choice for pool decks or barbecue
              spaces.
            </p>
          </div>
        </div>
        <div className="concrete-type-retaining">
          <h2 className="concrete-additions-header1" data-aos="fade-in">
            RETAINING WALLS
          </h2>
          <div className="concrete-additions-info-container">
            <p className="concrete-additions-info">
              If your property is on a slope, it will erode more easily. Protect
              your landscape by getting a retaining wall from Alignment
              Construction. We offer retaining wall installation services for
              clients in Littleton & Aurora, CO. We can build retaining walls
              out of brick, concrete blocks or poured concrete. Your concrete
              contractor will use top-of-the-line tools and materials to create
              your retaining wall.
            </p>
            <img src={walkway} className='concrete-additions-photo'/>
          </div>
        </div>
        <div className="concrete-type-foundation">
          <h2 className="concrete-additions-header2" data-aos="fade-in">
            FOUNDATIONS
          </h2>
          <div className="concrete-additions-info-container">
            <img src={walkway}
            className='concrete-additions-photo'/>
            <p className="concrete-additions-info">
              When the time comes to pour the foundation at your new
              construction project, contact Alignment Construction in Littleton,
              CO and surrounding areas. With over 15 years experience of
              concrete foundation experience in Littleton & Aurora, CO, we
              should be your top choice for the job. You can trust us to
              construct a foundation that's built to last.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concrete;
