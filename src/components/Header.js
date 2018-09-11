import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <div id="header" className="header__wrapper">
    <Link to="/" className="header__logo-container">
      <img className="header__logo" src={logo} alt="istanbul logo" />
    </Link>
    <div className="header__nav">
      <ul>
        <li>Tours</li>
        <li>City</li>
        <li>Booking</li>
        <li>Contact</li>
      </ul>
      <input className="header__search" type="text" placeholder="Search" />
    </div>
    
  </div>
);

export default Header;
