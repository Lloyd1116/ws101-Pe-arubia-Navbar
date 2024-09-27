import React, { useState } from 'react'; 
import { NavLink } from "react-router-dom"; // Correct import for NavLink
import "./Navbar.css"; 

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <NavLink to="/" className="title">Website</NavLink> 
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink id='about' to="/about">About</NavLink>
                </li>
                <li>
                    
                    <NavLink id='contact' to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};
