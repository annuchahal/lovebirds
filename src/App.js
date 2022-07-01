

import logo from './logo.svg';
import './App.css';
import Home from './Screens/Login/Home';
import About from './Screens/Login/About';
import Contact from './Screens/Login/Contact';
import Navbar from './Component/Navbar';


import {Switch,Route} from "react-router-dom";


function App() {
  return (
      
    <div className='whole' >
      <Navbar/>
      <h1 className="header">Lovebirds</h1>
            
            <Switch >
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            
        
            
        </div>
  );
}

export default App;
