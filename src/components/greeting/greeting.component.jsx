import homeBg from "../../assets/homeBg.png";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./greeting.styles.css";
import { Link } from "react-router-dom";

const Greeting = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="greeting-container"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <img
        src={logo}
        alt="alignment construction"
        className="greeting-logo"
        data-aos="fade-down"
      />
      <h3 className="trust">TRUST OUR TEAM TO MODERNIZE YOUR HOME</h3>
      <p className="intro">
        Look to our home remodeling contractor in Littleton & Aurora, CO
      </p>
      <Link to='/contact'>
        <button>CONTACT US</button>
      </Link>
    </div>
  );
};

export default Greeting;
