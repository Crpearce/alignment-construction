import { useEffect } from "react";
import "./transform.styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Transform = () => {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);

  return (
    <div className="transform-wrapper" data-aos="zoom-in">
      <h2>WANT TO TRANSFORM YOUR HOME'S APPEARANCE?</h2>
      <span className="transform-reach">
        {" "}
        REACH OUT TODAY TO SCHEDULE OUR SERVICES
      </span>
      <p className="transform-types">
        You're reminded how shabby your place looks every time you come home.
        Luckily, the experts at Alignment Construction LLC in Littleton, CO are
        here to help. Our home remodeler will enhance your property's appearance
        and functionality. Whether you want to update your kitchen, bathroom or
        basement, we have you covered.
      </p>
      <span className="transform-number">Call (720) 282-1210</span>
    </div>
  );
};

export default Transform;
