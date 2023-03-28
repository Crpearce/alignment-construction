import "./hamburger.styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Specialization from "../specialization/specialization.component";

const Hamburger = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(null);

  const showNavHandler = () => {
    setHamburgerMenu(true);
  };

  return (
    <section className="hamburger-container">
      {hamburgerMenu === true ? (
        <Specialization />
      ) : (
        <GiHamburgerMenu className="hamburger-icon" onClick={showNavHandler} />
      )}
    </section>
  );
};

export default Hamburger;
