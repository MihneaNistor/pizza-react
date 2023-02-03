import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {

const [openMenu, setOpenMenu] = useState(false);

function toggleMenu() {
    setOpenMenu(!openMenu);
    console.log(openMenu);
}

  return (
    <div className='navbar'>
        <div className='left' id={openMenu ? 'open' : 'close'}>
            <img src="https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/pizzaLogo.png?raw=true" alt=""/>

            <div className="hidden">
                <div className='hidden-links'>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
            {/* MAI TREBUIE FACUT UN DIV SEPARAT PENTRU MENIU */}
        </div>
            {!openMenu ? (
            <div className='right'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
    
                <button onClick={toggleMenu}>
                    <MenuIcon fontSize='large'/>
                </button>
            </div>
        ) : (
            <div className='right'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
                <button onClick={toggleMenu}>
                    <MenuIcon fontSize='large'/>
                </button>
            </div>
        )}
     
      
    </div>
  )
}

export default Navbar