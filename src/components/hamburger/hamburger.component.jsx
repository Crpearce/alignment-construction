import "./hamburger.styles.css";

import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {
  return (
    <section className="hamburger-container">
      <GiHamburgerMenu className="hamburger-icon" />
    </section>
  );
};

export default Hamburger;
