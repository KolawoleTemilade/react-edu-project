import "./Landing.css"
import Header from "../../components/header/Header"
import Hero from "../../components/hero-sec/Hero"
import About from "../../components/about-sec/About"
import Courses from "../../components/top-courses/Courses"
import Status from "../../components/status-values/Status"
import Features from "../../components/edunity-features/Features"

const Landing = () => {
  return (
    <div className="landingPageContainer">
        <Header/>
        <Hero/>
        <About/>
        <Courses/>
        <Status/>
        <Features/>
      
    </div>
  )
}

export default Landing
