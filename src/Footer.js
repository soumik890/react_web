import React from "react";

import "./Contact.css"
function Footer(){
    return(
        <div className="footer d__flex align__items__center justify__content__space__between.pz-10">
            {/*<img src={fbImg} alt="" className="facebook" />*/}
            <span className="copright" style={{"color":"#c6c9d8", "fontSize":"14px","justify-content": "center"}}>All rights reserved. Copyright @2022 Soumik Chakraborty</span>

        </div>
    )
} 

export default Footer 