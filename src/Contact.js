import React from "react";
import "./Contact.css"
import contactImg from "./img/me.png"
import fbImg from "./img/fb.png"
import linImg from "./img/lin.png"

function Contact(){

    return(
 
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me</h1>
                            <p className="hire__text white">Feel free to contact me </p>
                            <p className="hire__text white"> <strong>+91-9706621506/ 9132620361</strong>|| <a href="mailto:soumik890@gmail.com" rel="noopener noreferrer" target="_blank"><strong>soumik890@gmail.com</strong></a></p>
                        </div>
                        <div className="input__box">
                            <input type="text" className="contact__name" placeholder="Your name*"/>
                            <input type="text" className="contact__email" placeholder="Your email*"/>
                            <textarea type="text" className="contact__subject" placeholder="Your your message *"></textarea>
                            <button onClick={()=>alert("Your response is recorded!")} className="btn contact pointer" type="submit">Submit</button>    
                            
                        </div>
                    </div>
                </div>
                    <div className="col__2">
                        <img src={contactImg} alt="" className="contact__img"/>
                        
                        <a href="https://www.facebook.com/soumik.chakraborty.39589" rel="noopener noreferrer" target="_blank"><img src={fbImg} alt="" className="facebook" /></a>
                        <a href="https://www.linkedin.com/in/soumik-chakraborty-0b114598/" rel="noopener noreferrer" target="_blank"><img src={linImg} alt="" className="linkdin" /></a>
                        
                    </div>

            </div>

        </div>
        
    )


}
export default Contact