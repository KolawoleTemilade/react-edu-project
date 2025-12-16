import Button from "../button/Button";
import "./Exam.css";
import ExamLady from "../../assets/images/examlady.svg?react";
import TitleLogo from "../../assets/icons/titleLogo.svg?react";
import ExamMan from "../../assets/images/examman.svg?react";
import Globe from "../../assets/icons/globe.svg?react";
import ExamIcon from "../../assets/icons/examicon.svg?react";

export default function Exam() {
  return (
    <div className="examContainer">
      <div className="globe">
        <Globe />
      </div>
      <div className="examIcon">
        <ExamIcon />
      </div>
      <section className="examSec">
        {/* Title Area */}
        <div className="examTitleArea">
          <div className="examLogoSec">
            <TitleLogo />
            <p>exam preparation</p>
            <TitleLogo />
          </div>
          <h2>annual exam preparation</h2>
        </div>

        {/* Cards */}
        <div className="cards">
          {/* Card 1 */}
          <div className="card primary">
            <div className="examText">
              <p className="examtitle">start from today</p>
              <p className="subtitle">
                Join our training courses & Build your skill.
              </p>
              <Button>join now</Button>
            </div>

            <div className="imgSec">
              <ExamLady />
            </div>
          </div>

          {/* Card 2 */}
          <div className="card secondary">
            <div className="examText">
              <p className="examtitle">start from today</p>
              <p className="subtitle">
                Join our training courses & Build your skill.
              </p>
              <Button variant="secondary">join now</Button>
            </div>

            <div className="imgSec">
              <ExamMan />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
