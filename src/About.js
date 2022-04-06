import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About(){
  return (
    <div className="about1 component___space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
             </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hi!!! my self Soumik Chakraborty, technology and spiritual wellbeing enthusiast.
                I am a fast learner and a hardworking person, I believe technology can provide easy, effective, and 
                long lasting wellbeing solutions. 
              </p>
              <p className="about__text p__color">
              I thrive on new experiences and stepping out of my comfort zone to learn what my strengths and weaknesses are,
              not only in work but in all aspects of life.
              </p>
         
              <p className="about__text p__color">
              I am very much passionate about providing software solutions to various business problems and
              seeking opportunities where I can utilize my analytical, mathematical, and 
              technical skills to solve business problems
              </p>
              <div className="about__button d_flex align_items_center">
                <a href="#">
                  {" "}
                  <button className="about btn pointer">
                    Download CV
                  </button>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*up to top button*/}
      <div className="up_to_top_btn">
        <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}
export default About;
