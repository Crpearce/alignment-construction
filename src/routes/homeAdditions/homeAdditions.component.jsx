import { useEffect } from "react";
import kitchenAddition from "../../assets/kitchenAddition.png";
import wood from "../../assets/wood.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./homeAdditions.styles.css";

const HomeAdditions = () => {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);

  return (
    <>
      <div className="home-additions-wrapper">
        <div
          className="home-images-container"
          style={{
            backgroundImage: `url(${wood})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            src={kitchenAddition}
            data-aos="fade-right"
            className="addition-image"
            alt="kitchen remodel blueprint"
          />
        </div>
        <div className="home-details-container">
          <h4 className="home-additions-header" data-aos="fade-left">
            Home Additions
          </h4>
          <p className="home-additions-text" data-aos="fade-left">
            Have you outgrown your home? Don't consider putting your home on the
            market just yet. Expand your space with a new home addition.
            Alignment Construction LLC has decades of construction experience.
            We'll add-on to your home or renovate your outdated rooms within
            your desired budget and time frame.
          </p>
        </div>
      </div>
      <div className="home-additions-types-container">
        <div className="popular-addition-container">
          <h2 className="popular-additions-header">
            POPULAR HOME ADDITIONS FOR ANY BUDGET
          </h2>
          <p className="popular-additions-text">
            With over 15 years of experience, we're the local company to call
            for new home additions. We'll increase the size of your home by:
          </p>
        </div>
        <ul className="popular-addition-options-container">
          <li className="additions-list">Finishing your basement or attic</li>
          <li className="additions-list">Adding a new room to your home</li>
          <li className="additions-list">Converting your garage to a functional living space</li>
          <li className="additions-list">Transforming your room into an accessory dwelling unit (ADU)</li>
        </ul>
      </div>
    </>
  );
};

export default HomeAdditions;
