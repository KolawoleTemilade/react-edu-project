import "./About.css";
import Button from "../button/Button";
import AboutLogo from "../../assets/icons/aboutLogo.svg?react";
import AboutGirl from "../../assets/images/aboutgirl.svg?react";
import About2 from "../../assets/images/about2.svg?react";
import AboutIcon from "../../assets/icons/aboutIcon.svg?react";
import AboutMetrics from "../../assets/images/aboutMetrics.svg?react";

const About = () => {
  return (
    <div className="aboutSec">
      <div className="imgSec">
        <div className="firstFrame">
          <AboutIcon className= "abtIcon"/>
          <AboutGirl className= "firstFram"/>
        </div>
        <div className="metrics">
          <AboutMetrics />
          <About2 />
        </div>
      </div>
      <div className="textSecContainer">
        <div className="textSec">
          <div className="logoArea">
            <AboutLogo />
            <p>about us</p>
          </div>
          <div className="titleCase">
            <h2>
              Benefit from our online learning expertise earn{" "}
              <span className="prof">professional</span>
            </h2>
          </div>
          <div className="subtitle">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="missionVission">
            <div className="mission">
              <h4>our mission:</h4>
              <p>
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </div>
            <div className="vission">
              <h4>our vission:</h4>
              <p>
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </div>
          </div>
        </div>
        <Button>admission open</Button>
      </div>
    </div>
  );
};

export default About;
