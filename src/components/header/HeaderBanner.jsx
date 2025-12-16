import User from "../../assets/icons/headeruser.svg?react";
import Time from "../../assets/icons/headerclock.svg?react";
import Location from "../../assets/icons/headerlocation.svg?react";
import Facebook from "../../assets/icons/headerfacebook.svg?react";
import Twitter from "../../assets/icons/headertwitter.svg?react";
import Skype from "../../assets/icons/skype.svg?react";
import Linkedin from "../../assets/icons/linkedin.svg?react";
export default function HeaderBanner() {
  return (
    <div className="headerBanner">
      <div className="headerContact">
        <div className="headerAddress">
          <div className="addsec">
            <Time />
            <p>Working:Monday -Friday.9:am - 5:pm</p>
          </div>
          <div className="addsec">
            <Location />
            <p>Hudson, Wisconsin(WI), 54016</p>
          </div>
        </div>
        <div className="headerCto">
          <div className="addsec">
            <User />
            <p>Login/Register</p>
          </div>
          <hr />
          <div className="headerSocials">
            <Facebook />
            <Twitter />
            <Skype />
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
