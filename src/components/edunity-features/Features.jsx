import "./Features.css";
import TitleLogo from "../../assets/icons/titleLogo.svg?react";
import BestOne from "../../assets/icons/bestOne.svg";
import BestTwo from "../../assets/icons/bestTwo.svg";
import BestThree from "../../assets/icons/bestThree.svg";
import BestFour from "../../assets/icons/bestFour.svg";
import Button from "../button/Button";

export default function Features() {
  const features = [
    {
      icon: BestOne,
      title: "best coaching",
      text: "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
    },
    {
      icon: BestTwo,
      title: "best coaching",
      text: "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
    },
    {
      icon: BestThree,
      title: "best coaching",
      text: "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
    },
    {
      icon: BestFour,
      title: "best coaching",
      text: "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
    },
  ];
  return (
    <div className="featuresContainer">
      <div className="featuresSec">
        <div className="titleArea">
          <div className="logoSec">
            <TitleLogo />
            <p>edunity features</p>
            <TitleLogo />
          </div>
          <h2>Check out educate features win any exam</h2>
        </div>

        <div className="detailsCard">
          <div className="featuresCard">
            {features.map((feature, index) => (
              <div key={index} className="detailsInfo">
                <div className="featureIcon">
                  <span className="icons">
                    <img src={feature.icon} alt="" />
                  </span>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
                <Button>view details</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
