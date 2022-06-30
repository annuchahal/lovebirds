import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';


import {Switch,Route} from "react-router-dom";
import ResponsiveAppBar from './ResponsiveAppBar';

function App() {
  return (
    <div className='whole' >
      <ResponsiveAppBar/>
      <h1 className="header">Lovebirds</h1>
            
            <Switch >
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
            
        
            
        </div>
  );
}

export default App;
