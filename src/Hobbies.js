import React from "react";
import "./Hobbies.css"
import hobbyImg from "./img/hobby.jpg"
function Hobbies(){
    return(
        <div className="about component___space" id="Hobbies">
        <div className="container">
            <div className="row">
                <div className="col__2">
                    <img src={hobbyImg} alt="" className="about__img"/>
                </div>
                <div className="col__2">
                    <h1 className="about__heading">My Hobbies</h1>
                <div className="about__meta">
                    <p className="about__text p__color">
                    Apart from coding and analysis, I love to sing and play guitar. I also like to read upanishads
                     and bhagwad gita in my free time. I like to read about various technologies such as renewable 
                     energy technologies, battery technlogies, and biomedical instrumentation. 
                    </p>
                    <p className="about__text p__color">
                    I like to read and discuss about various business and startup plans. Along 
                    with I like to know about different startup and acquisitions.
                    </p>

                    <p className="about__text p__color">
                    Apart from above I like to keep myself fit and I keep on experimenting different diet plans and
                    excercise routines.
                    </p>

                </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Hobbies