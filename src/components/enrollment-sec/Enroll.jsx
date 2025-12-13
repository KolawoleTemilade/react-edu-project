import "./Enroll.css";
import Button from "../button/Button";
import PlayButton from "../../assets/icons/sessionplay.svg?react"
import Ark from "../../assets/icons/sessionark.svg?react"
import Waves from "../../assets/icons/sessionwaves.svg?react"
import Lines from "../../assets/icons/sessionline.svg?react"
import Loader from "../../assets/icons/sessionloader.svg?react"

export default function Enroll() {
  return (
    <div className="enrollContainer">
        <div className="ark">
            <Ark/>
        </div>
        <div className="lines">
            <Lines/>
        </div>
        <div className="waves">
            <Waves/>
        </div>
        <div className="loader">
            <Loader/>
        </div>
      <div className="textSec">
        <p className="newSession">join our new session</p>
        <div className="enrollSec">
          <div className="titleSec">
            <h3>call to enroll your child </h3>
            {/* this numbr here is a dialable link */}
            <p>(+91)958423452</p>
          </div>
          <div className="playSec">
            <PlayButton/>
            <p>watch now</p>
          </div>
        </div>
        <Button>join with us</Button>
      </div>
    </div>
  );
}
