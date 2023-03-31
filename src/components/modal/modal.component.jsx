import "./modal.styles.css";
import { NavLink } from "react-router-dom";

const Modal = ({ hamLinks, hideNavHandler }) => {
  return (
    <div className="modal-container">
      {hamLinks.map((category) => (
        <li key={category.id} className="ham-links">
          <NavLink
            onClick={hideNavHandler}
            className="ham-tab"
            to={`/${category.link}`}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <span className="ham-tab">{category.title}</span>
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default Modal;
