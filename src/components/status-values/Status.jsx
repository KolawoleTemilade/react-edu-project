import "./Status.css";
import StatusImg from "../../assets/images/statusimg.svg?react";
import TitleLogo from "../../assets/icons/titleLogo.svg?react";
import Ninety from "../../assets/images/ninetypercent.svg?react";
import SeventyFive from "../../assets/images/seventy-five.svg?react";
import NintyThree from "../../assets/images/ninty-three.svg?react";
import SixtyThree from "../../assets/images/sixty-three.svg?react";
import GraduateCap from "../../assets/icons/graduatecap.svg?react";
import StatusLine from "../../assets/icons/status-line.svg?react";
import Dotted from "../../assets/icons/dottedimg.svg?react";

export default function Status() {
  return (
    <div className="statusValues">
        <div className="statusLine">
              <StatusLine/>
        </div>
        <div className="graduateCap">
            <GraduateCap/>
        </div>
        <div className="dotted">
            <Dotted/>
        </div>
        <div className="dotteds">
            <Dotted/>
        </div>
        <div className="backgroundImages">

      <div className="textArea">
        <div className="logoSec">
          <TitleLogo />
          <p>our status values</p>
        </div>
        <div className="titleCase">
          <h2>
            Our Classroom is a very deferent{" "}
            <span className="school">school</span> than all the others
          </h2>
        </div>
        <div className="subtitle">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="schoolStatus">
        <div className="study">
            <p>
              Case study success{" "}
            </p>
              <span>
                <Ninety />
              </span>
          </div>
          <div className="study">
            <p>
              Happy student{" "}
            </p>
              <span>
                <SeventyFive/>
              </span>
          </div>
          <div className="study">
            <p>
              Engaging{" "}
            </p>
              <span>
                <NintyThree/>
              </span>
          </div>
          <div className="study">
            <p>
              Student community{" "}
            </p>
              <span>
                <SixtyThree/>
              </span>
          </div>
          
        </div>
      </div>
      <div className="imgArea">
        <div className="imgBackground"></div>
       <span className="statusImage"><StatusImg /></span> 
      </div>
        </div>
    </div>
  );
}
