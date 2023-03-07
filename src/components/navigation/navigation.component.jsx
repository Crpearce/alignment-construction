import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import {BsFillTelephoneOutboundFill} from "react-icons/bs"
import "./navigation.styles.css";

const Navigation = ({ tabs }) => {
  return (
    <div className="navigation-wrapper">
      <aside className="phone-container">
        <ul>
          <li>
            <a href="tel:(720)282-1210" data-icon="A" title="(720)282-1210" className="phone">
              <BsFillTelephoneOutboundFill  className="phone-icon"/>
              <span className="phone-number"> (720) 282-1210</span>
            </a>
          </li>
        </ul>
      </aside>
      <div className="nav-sections-container">
        <a href="/" aria-label="link to home" className="logo-container">
          
          <img src={logo} alt="alignment construction logo" className="logo" />
        </a>
        <ul className="nav-menu">
          {tabs.map((category) => (
            <li key={category.id}>
              <a href={category.link}>{category.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
