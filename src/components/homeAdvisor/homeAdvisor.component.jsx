import "./homeAdvisor.styles.css";
import homeAdvisor from "../../assets/homeAdvisor.png";

const HomeAdvisor = () => {
  return (
    <div className="home-advisor-container">
      <img
        src={homeAdvisor}
        alt="home advisor approved stamp"
        className="home-advisor-logo"
      />
      <h4 className="home-advisor-header">
        WE HAVE HIGH STANDARDS IN ALL WE DO
      </h4>
      <p className="home-advisor-text">
        At Alignment Construction, LLC, we specialize in both commerical &
        residential projects and no job is too big or small. We look forward to
        working with you and establishing a long-term relationship as your go-to
        contractor in the Denver Metro Area. We have a strong reputation for
        delivering quality construction service at affordable prices.
      </p>
      <p className="home-advisor-text">
        Whether you are looking for home remodeling, structural beam
        installation, or concrete work, our quality of work is backed by our
        customer satisfaction guarantee.
      </p>
    </div>
  );
};

export default HomeAdvisor;
