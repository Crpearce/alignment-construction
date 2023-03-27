import { Link } from "react-router-dom";
import HomeAdvisor from "../../components/homeAdvisor/homeAdvisor.component";
import ServeBar from "../../components/serveBar/serveBar.component";
import Specialization from "../../components/specialization/specialization.component";
import "./about.styles.css";

const About = () => {
  return (
    <section className="about-wrapper">
      <HomeAdvisor />
      <div className="about-container">
        <h2 className="about-ready">
          TURN TO YOUR TRUSTED, LOCAL CONTRACTOR TODAY!
        </h2>
        <p className="about-types">
          With over 10 years of experience, Alignment Construction LLC and our
          team of highly skilled professionals strive for perfection and
          satisfied customers. We are a locally owned and operated company in
          Littleton, CO, but also serve the rest of Colorado. Our team takes
          pride in our solid workmanship, excellent customer service, honest &
          competitive prices and premium materials.
        </p>
        <Link to="/contact">
          <button className="concrete-services-link-button">Contact Us</button>
        </Link>
      </div>
      {/* <HomeAdvisor /> */}
      <Specialization />
      <ServeBar />
    </section>
  );
};

export default About;
