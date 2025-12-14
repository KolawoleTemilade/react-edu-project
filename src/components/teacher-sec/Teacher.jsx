import "./Teacher.css";
import TitleLogo from "../../assets/icons/titleLogo.svg?react";
import teacherOne from "../../assets/images/teacherone.svg";
import teacherTwo from "../../assets/images/teachertwo.svg";
import teacherThree from "../../assets/images/teacherthree.svg";
import teacherFour from "../../assets/images/teacherfour.svg";
import shareicon from "../../assets/icons/shareicon.svg";

export default function Teacher() {
  const teachers = [
    {
      image: teacherOne,
      icon: shareicon,
      name: "nathan allen",
      role: "teacher",
    },
    {
      image: teacherTwo,
      icon: shareicon,
      name: "esther boyd",
      role: "teacher",
    },
    {
      image: teacherThree,
      icon: shareicon,
      name: "jamie keller",
      role: "teacher",
    },
    {
      image: teacherFour,
      icon: shareicon,
      name: "jesus pendley",
      role: "teacher",
    },
  ];
  return (
    <div className="teacherContainer">
      <div className="teacherBg">
        <div className="titleContainer">
          <div className="teacherTitle">
            <TitleLogo />
            <p>teacher</p>
            <TitleLogo />
          </div>
          <div className="teacherSubtitle">
            <h4>meet our expert Instructor</h4>
          </div>
          <div className="teacherCard">
            <div className="tCard">
              {teachers.map((teacher, index) => (
                <div key={index} className="teacherMaincards">
                  <div className="mainImage">
                    <img src={teacher.image} alt=" teachers image" />
                    <div className="shareicon">
                      <img src={teacher.icon} alt="share icon" />
                    </div>
                  </div>
                  <div className="teacherText">
                    <p className="teachersName">{teacher.name}</p>
                    <p className="teachersRole">{teacher.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
