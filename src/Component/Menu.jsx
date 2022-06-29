import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function Menu(){
    return(
        <div>
            <BrowserRouter>
            <Routes >
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </Routes>
            </BrowserRouter>
        
            
        </div>
    );
}

export default Menu;