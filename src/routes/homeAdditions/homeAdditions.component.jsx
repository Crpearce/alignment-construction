import "./homeAdditions.styles.css";
// import homeRemodel from "../../assets/homeRemodel.png";
import kitchenAddition from "../../assets/kitchenAddition.png";

const HomeAdditions = () => {
  return (
    <div className="home-additions-wrapper">
      <div
        className="home-images-container"
        // style={{
        //   backgroundImage: `url(${homeRemodel})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      >
        <img src={kitchenAddition} className='addition-image' alt="kitchen remodel blueprint"/>
      </div>
      <div className="home-details-container">
        <h4 className="home-additions-header">Home Additions</h4>
        <p className="home-additions-text">
          Have you outgrown your home? Don't consider putting your home on the
          market just yet. Expand your space with a new home addition. Alignment
          Construction LLC has decades of construction experience. We'll add-on
          to your home or renovate your outdated rooms within your desired
          budget and time frame.
        </p>
      </div>
    </div>
  );
};

export default HomeAdditions;
