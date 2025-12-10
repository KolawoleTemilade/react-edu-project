import Search from "../../assets/icons/search.svg?react";
import "./Hero.css";
const Hero = () => {
  return (
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

      <div className="hero-img"></div>
    </div>
  );
};

export default Hero;
