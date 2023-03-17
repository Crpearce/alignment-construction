import { useEffect } from "react";
import AOS from "aos";

import beam1 from "../../assets/beam1.png";
import beam2 from "../../assets/beam2.png";
import beam3 from "../../assets/beam3.png";

import "./structuralServices.styles.css";
import "aos/dist/aos.css";

const StructuralServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);

  return (
    <div className="structural-services-wrapper">
      <div className="structural-services-photos">
        <img
          src={beam1}
          alt="remodeled apartment basement"
          className="structural-pic"
        />
        <img
          src={beam2}
          alt="remodeled apartment basement"
          className="structural-pic"
        />
        <img
          src={beam3}
          alt="remodeled apartment basement"
          className="structural-pic"
        />
      </div>
      <div className="structural-services-container" data-aos="fade-right">
        <h2 className="services-header">SERVICES WE OFFER</h2>
        <p className="structural-details">
          We follow a thorough load-bearing beam installation process to ensure
          exceptional results. Contact us today for to schedule the following
          services:
        </p>
        <ul className="structural-list">
          <li>Inspect your home and provide a free estimate</li>
          <li>Create customer blueprints for your home's design</li>
          <li>Demolish old walls and haul away the waste</li>
          <li>Install quality materials that are built to last</li>
        </ul>
        <p className="structural-details">
          Call ####### today to schedule load-bearing beam installations in
          Littleton & Aurora, CO.
        </p>
      </div>
    </div>
  );
};

export default StructuralServices;
