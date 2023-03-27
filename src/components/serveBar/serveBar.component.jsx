import { Link } from "react-router-dom";
import "./serveBar.styles.css";

const ServeBar = () => {
    return (
        <div className="serve-container">
            <h3 className="serve-header">WE ARE READY TO SERVE YOU</h3>
            <span className="satisfaction">100% SATISFACTION GUARANTEED</span>
            <Link>
                <button className="grey-button">Get Quote</button>
            </Link>
        </div>
    );
}

export default ServeBar;
