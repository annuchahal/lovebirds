import React from "react";

import { NavLink } from "react-router-dom";



function Contact(){
    return(<div>
        <div>
            <h1 className="last">Congratulations! You have successfully registered in Lovebirds</h1>
        </div>
        <div className="fifth">
        <NavLink to="/"><strong className="btn">Log out</strong></NavLink>
        </div>
        </div>
    );
}

export default Contact;