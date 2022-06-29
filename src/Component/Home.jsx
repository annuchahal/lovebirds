import React from "react";
import { NavLink } from "react-router-dom";

function Home(){
    return(
        <div className="second">
            
            <h1>Welcome to Lovebirds Organization</h1>
            <h2 className="let">One of the best websites for giving you more opportunities to work on birds</h2>
            <h1 className="let">Lets get Started</h1>
            <NavLink to="/about"><strong className="btn">Get Started</strong></NavLink>
        </div>
    );
}

export default Home;