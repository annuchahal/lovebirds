import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="hey">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Services</NavLink>
        </div>
    );
}

export default Navbar;