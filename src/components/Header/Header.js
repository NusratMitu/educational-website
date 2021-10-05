import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const activeStyle={
        fontWeight: "bold"
      }
    return (
        <nav className="header">
            <NavLink activeStyle={activeStyle} className="nav-item" to="/home">Home </NavLink>
            <NavLink activeStyle={activeStyle} className="nav-item" to="/programs">Programs</NavLink>
            <NavLink activeStyle={activeStyle} className="nav-item" to="/studentSuccess">Student Success</NavLink>
            <NavLink activeStyle={activeStyle} className="nav-item" to="/aboutUs">About Us</NavLink>
        </nav>
    );
};

export default Header;