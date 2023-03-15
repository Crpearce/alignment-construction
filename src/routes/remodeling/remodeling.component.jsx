import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./remodeling.styles.css";
import "aos/dist/aos.css";

const Remodeling = () => {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);

  return (
    <div className="transform-wrapper" data-aos="zoom-in">
      <h2>READY TO UPDATE YOUR HOME?</h2>
      <span className="transform-reach">
        {" "}
        TURN TO OUR HOME REMODELING CONTRACTOR TODAY!
      </span>
      <p className="transform-types">
        If you haven't remodeled your home in years, it might need some
        upgrades. Alignment Construction LLC is a home remodeling contractor
        that can help. You can count on us to enhance the appearance,
        functionality and value of your home.
      </p>
      <Link>
        <button className="contact-button">Contact</button>
      </Link>
    </div>
  );
};

export default Remodeling;
