import React from 'react';
import {Link} from "react-router-dom";
import "../styles/home.css";

function Home () {
  return (
    <div className="home" style={{backgroundImage: "url('https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/pizza.jpeg?raw=true')"}}>
        <div className="header">
            <h1>Pizza Restaurant</h1>
            <p>Best Pizza in Town</p>
            <Link to="/menu">TAKE A LOOK</Link>
        </div>
    </div>
  );
}

export default Home