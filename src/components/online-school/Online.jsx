import "./Online.css";
import OnlineIcon from "../../assets/icons/onlineicon.svg?react";
import OnlineLady from "../../assets/images/onlinegirl.svg?react";
import Triangle from "../../assets/icons/onlinetriangle.svg?react";
import Quote from "../../assets/icons/onlinequote.svg?react";
import Profile from "../../assets/icons/onlineprofile.svg?react";

export default function Online({ text = "online school", repeat = 12 }) {
  return (
    <div className="onlineContainer">
      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: repeat }).map((_, i) => (
            <span key={i} className="marqueeTexts">
              <span className="dot">
                <OnlineIcon />
              </span>
              {text}
            </span>
          ))}
        </div>
      </div>
      {/* <div className="marque">
        <OnlineIcon />
        <p> online school </p>
      </div> */}
      <div className="onlineBody">
        <div className="onlineContent">
          <div className="content">
            <div>
              <OnlineLady />
            </div>
            <div className="triangle">
              <Triangle />
            </div>
          </div>
          <div className="textCardSec">
            <span className="">
              <Quote />
            </span>

            <div className="textSection">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquipLorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <div className="onlineProfileSec">
                <div className="profileImg">
                  <Profile />
                </div>
                <div className="profileDetails">
                  <h4>gloria burnet</h4>
                  <p>software developer</p>
                </div>
              </div>
              <div className="controller">
                <div className="onlineDot"></div>
                <div className="onlineDot active"></div>
                <div className="onlineDot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
