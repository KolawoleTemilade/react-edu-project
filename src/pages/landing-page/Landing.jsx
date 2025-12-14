import "./Landing.css"
import Header from "../../components/header/Header"
import Hero from "../../components/hero-sec/Hero"
import About from "../../components/about-sec/About"
import Courses from "../../components/top-courses/Courses"
import Status from "../../components/status-values/Status"
import Features from "../../components/edunity-features/Features"
import Enroll from "../../components/enrollment-sec/Enroll"
import Exam from "../../components/exam-prep/Exam"
import Online from "../../components/online-school/Online"
import Events from "../../components/explore-events/Events"
import Teacher from "../../components/teacher-sec/Teacher"

const Landing = () => {
  return (
    <div className="landingPageContainer">
        <Header/>
        <Hero/>
        <About/>
        <Courses/>
        <Status/>
        <Features/>
        <Enroll/>
        <Exam/>
        <Online/>
        <Events/>
        <Teacher/>
      
    </div>
  )
}

export default Landing
