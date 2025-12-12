import "./Landing.css"
import Header from "../../components/header/Header"
import Hero from "../../components/hero-sec/Hero"
import About from "../../components/about-sec/About"
import Courses from "../../components/top-courses/Courses"

const Landing = () => {
  return (
    <div className="landingPageContainer">
        <Header/>
        <Hero/>
        <About/>
        <Courses/>
      
    </div>
  )
}

export default Landing
