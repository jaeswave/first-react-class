import "../../css/index.css";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="section-1">
        <p style={{ fontSize: "7rem" }}>THE FOOD</p>
        <p style={{ fontSize: "7rem" }}>ITERATIONS</p>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Experience the best in the food industry
        </p>
        <button className="btn">Register Now</button>
      </div>

      <div className="image-section">
        <div>
          <img src={one} alt="BigCo Inc. logo" />{" "}
        </div>
        <div>
          <img src={two} alt="BigCo Inc. logo" />{" "}
        </div>
        <div>
          <img src={three} alt="BigCo Inc. logo" />{" "}
        </div>
        <div>
          <img src={four} alt="BigCo Inc. logo" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
