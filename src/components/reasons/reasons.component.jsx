import Card from "../card/card.component";
import "./reasons.styles.css";

const Reasons = ({ reasons }) => {
  return (
    <div className="reasons-wrapper">
      <div className="reasons-container">
        <h2>4 REASONS TO GO WITH ALIGNMENT CONSTRUCTION</h2>
        <p className="reasons-description">
          If you're searching for concrete services, hire Alignment Construction
          for your needs. Our family-owned and operated company will treat you
          like one of our own. You'll appreciate that we:
        </p>
        <ul className="list">
          {reasons.map((reason) => (
            <Card key={reason.id} className="reason-card">
              <div className="reason-icon"></div>
              <h5 className="reason-text">{reason.reason}</h5>
            </Card>
          ))}
        </ul>
        <p className="reasons-description">
          Do you need concrete services in Littleton & Aurora, CO? Contact the
          pros at Alignment Construction now.
        </p>
      </div>
    </div>
  );
};

export default Reasons;
