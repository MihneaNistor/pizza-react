import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer.js';
import Menu from "./components/Menu.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";



function App() {
  return (
    <div className="App">
      <Router> 
       <Navbar/>
        <Routes>
          <Route path="/" exact element = {<Home/>}/>
          <Route path="/menu" exact element = {<Menu/>}/>
          <Route path="/about" exact element = {<About/>}/>
          <Route path="/contact" exact element = {<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
