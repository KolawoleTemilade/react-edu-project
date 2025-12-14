import "./Events.css";
import Ark from "../../assets/icons/eventark.svg?react";
import TitleLogo from "../../assets/icons/titleLogo.svg?react";
import Waves from "../../assets/icons/eventwaves.svg?react";
import Cap from "../../assets/icons/eventcap.svg?react";
import Icon from "../../assets/icons/examicon.svg?react";
import EventImage from "../../assets/images/eventsimage.svg?react";
import Dots from "../../assets/icons/eventdot.svg?react";
import Border from "../../assets/icons/eventborder.svg?react";
import Button from "../button/Button";

export default function Events() {
  return (
    <div className="exploreContainer">
      <div className="explore">
        <div className="eArk">
          <Ark />
        </div>
        <div className="eWaves">
          <Waves />
        </div>
        <div className="eCap">
          <Cap />
        </div>
        <div className="eIcon">
          <Icon />
        </div>
        <div className="eventSection">
          <div className="eventTextSec">
            <div className="eventTitleSec">
              <div className="eventTitle">
                <TitleLogo />
                <p>explore events</p>
              </div>
              <div className="eventSubtitle">
                <h4>our best upcoming events</h4>
              </div>
            </div>

            <div className="eventTexts">
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <p className="ipsum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
            </div>
            <Button>get ticket now</Button>
          </div>
          <div className="imgTextSec">
            <div className="eventDots">
              <Dots />
            </div>
            <div className="eventImg">
              <EventImage />
            </div>
            <div className="eventBorder">
              <Border />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
