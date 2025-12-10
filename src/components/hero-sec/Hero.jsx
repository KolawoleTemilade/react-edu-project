import "./Hero.css";
import Search from "../../assets/icons/search.svg?react";
import HeroLady from "../../assets/images/herolady.svg?react";
import HeroMan from "../../assets/images/heroman.svg?react";
import StudentMetric from "../../assets/images/studentMetrics.svg?react";
const Hero = () => {
  return (
    <div className="container">
      <div className="hero-sec">
        <div className="text-side">
          <div className="get-cert">
            <p>learn & get certificates</p>
          </div>
          <div className="free-online-courses">
            <h2>free online courses with certificates & diplomas</h2>
          </div>
          <p className="metrics">25 million learners. 15 years.100%</p>
          <div className="search-field">
            <input type="text" placeholder="What do you want to learn today?" />{" "}
            <span className="search-icon">
              <Search />
            </span>
          </div>
        </div>

        <div className="hero-img">
          <div className="heroLady">
            <HeroLady />
          </div>
          <div className="studentMetric">
            <p className="studentText">
              2K + <span> Student </span>
            </p>
            <div className="studentMetricsImg">
              <StudentMetric />
            </div>
          </div>
          <div className="studentMetrics">
            <p className="studentTexts">
              5.8K <span> Success courses</span>
            </p>
          </div>
          <div className="heroMan">
            <HeroMan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
