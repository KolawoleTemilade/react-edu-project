import "./Courses.css";
import Button from "../button/Button";
import TitleLogo from "../../assets/icons/titleLogo.svg?react";
import Ratings from "../../assets/icons/ratings.svg";
import Note from "../../assets/icons/notes.svg";
import Time from "../../assets/icons/time.svg";
import User from "../../assets/icons/user.svg";
import ProfileImage from "../../assets/icons/profile.svg";
import Cart from "../../assets/icons/cart.svg";
import CourseOne from "../../assets/images/courseone.svg";
import CourseTwo from "../../assets/images/coursetwo.svg";
import CourseTree from "../../assets/images/coursethree.svg";

export default function Courses() {
  const coursesCard = [
    {
      image: CourseOne,
      courseTag: "Development",
      rating: { icon: Ratings, value: "(4.7)" },
      courseTitle: "It Statistics Data Science and Business Analysis",
      lessons: { icon: Note, value: "Lesson 10", icons: Time },
      duration: { value: "19h 30m", icon:  User },
      students: { value: "Students 20+" },
      profile: {
        img: ProfileImage ,
        description: "By Angela in Development",
      },

      price: {
        current: "$60",
        old: "$120",
      },

      cart: {
        icon: Cart,
        text: "Add to Cart",
      },
    },
    {
      image: CourseOne,
      courseTag: "Development",
      rating: { icon: Ratings, value: "(4.7)" },
      courseTitle: "It Statistics Data Science and Business Analysis",
      lessons: { icon: Note, value: "Lesson 10", icons: Time },
      duration: { value: "19h 30m", icon:  User },
      students: { value: "Students 20+" },
      profile: {
        img: ProfileImage ,
        description: "By Angela in Development",
      },

      price: {
        current: "$60",
        old: "$120",
      },

      cart: {
        icon: Cart,
        text: "Add to Cart",
      },
    },
    {
      image: CourseOne,
      courseTag: "Development",
      rating: { icon: Ratings, value: "(4.7)" },
      courseTitle: "It Statistics Data Science and Business Analysis",
      lessons: { icon: Note, value: "Lesson 10", icons: Time },
      duration: { value: "19h 30m", icon:  User },
      students: { value: "Students 20+" },
      profile: {
        img: ProfileImage ,
        description: "By Angela in Development",
      },

      price: {
        current: "$60",
        old: "$120",
      },

      cart: {
        icon: Cart,
        text: "Add to Cart",
      },
    },
  ];

  return (
    <div className="coursesSection">
      <div className="titleContainer">
        <div className="titleSec">
          <div className="logoSec">
            <TitleLogo />
            <p>top popular course</p>
          </div>
          <div className="title">
            <h2> check out educate features win any exam</h2>
          </div>
        </div>
        <Button>browse edunity courses</Button>
      </div>
      <div className="cardContainer">
        <div className="card">
          {coursesCard.map((card, index) => (
            <div key={index} className="cardbox">
              <div className="courseImages">
                <img src={card.image} alt="course" />
                <p>{card.courseTag}</p>
              </div>
              {/* ratings */}
                 <div className="ratings">
                    <img src={card.rating.icon} alt="ratings-icon" />
                    <span>{card.rating.value}</span>
                 </div>
                 {/* title */}
                 <div className="courseTitle">
                    <h3>{card.courseTitle}</h3>
                 </div>
                 {/* info */}
                 <div className="cardInfo">
                    <div className="lessons">
                        <img src={card.lessons.icon}
                         alt="note-icon" />
                         <span>{card.lessons.value}</span>
                         <img src={card.lessons.icons} alt="time-icon"/>
                    </div>
                    <div className="duration">
                        <p>{card.duration.value}</p>
                        <img src={card.duration.icon} alt="user-icon" />
                    </div>
                    <div className="students">
                        <p>{card.students.value}</p>
                    </div>
                 </div>
                 <div className="dash"></div>
                 {/* profile */}
                 <div className="profile">
                    <img src={card.profile.img} alt="profile-icon" />
                    <span>{card.profile.description}</span>
                 </div>
                 <div className="pricingAndCart">
                    <div className="pricing">
                        <h2>{card.price.current}</h2>  
                        <span><h2>{card.price.old}</h2></span>  
                    </div>
                    <div className="cart">
                        <img src={card.cart.icon} alt="cart-icon"
                         />
                         <span>{card.cart.text}</span>
                    </div>
                 </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
