import { Link } from "react-router-dom";
import "./about.styles.css";

const About = () => {
  return (
    <section className="about--wrapper">
      <div className="about--container">
        <h2 className="about--ready">YOUR TRUSTED LOCAL CONTRACTOR</h2>
        <span className="about--reach">
          {" "}
          TURN TO OUR HOME REMODELING CONTRACTOR TODAY!
        </span>
        <p className="about-types">
          With over 10 years of experience, Alignment Construction LLC and our
          team of highly skilled professionals strive for perfection and
          satisfied customers. We are a locally owned and operated company in
          Littleton, CO, but also serve the rest of Colorado. Our team takes
          pride in our solid workmanship, excellent customer service, honest &
          competitive prices and premium materials.
        </p>
        <Link to="/contact">
          <button className="contact-button">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default About;
