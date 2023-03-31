import "./modal.styles.css";
import { NavLink } from "react-router-dom";

const Modal = ({ hamLinks, hideNavHandler }) => {
  return (
    <div className="modal-container">
      {hamLinks.map((category) => (
        <li key={category.id} className="nav-links">
          <NavLink
            onClick={hideNavHandler}
            className="section-tab"
            to={`/${category.link}`}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <span className="section-tab">{category.title}</span>
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default Modal;
