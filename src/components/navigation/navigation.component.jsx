import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navigation.styles.css";

const Navigation = ({ tabs }) => {
  return (
    <div>
      {/* <aside>
        <ul>
          <li>
            <a href="tel:(720)282-1210" data-icon="A" title="(720)282-1210">
              <span>(720)282-1210</span>
            </a>
          </li>
        </ul>
      </aside> */}
      <div className="nav-container">
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
