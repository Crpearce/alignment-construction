import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./structuralServices.styles.css";

const StructuralServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);
  return (
    <div className="remodeling-services-wrapper">
      <div className="remodeling-services-container" data-aos="fade-right">
        <h2 className="services-header">SERVICES WE OFFER</h2>
        <p className="remodeling-details">
          We follow a thorough load-bearing beam installation process to ensure exceptional results. Contact us today for to schedule the following services:
        </p>
        <ul className="remodeling-list">
          <li>Inspect your home and provide a free estimate</li>
          <li>Create customer blueprints for your home's design</li>
          <li>Demolish old walls and haul away the waste</li>
          <li>Install quality materials that are built to last</li>
        </ul>
        <p className="remodeling-details">
          Call ####### today to schedule load-bearing beam installations in Littleton & Aurora, CO.
        </p>
      </div>
      <div className="remodeling-services-photo" data-aos="fade-left">
        {/* <img src={basement} alt="remodeled apartment basement" /> */}
      </div>
    </div>
  );
};

export default StructuralServices;
