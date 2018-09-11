import React from "react";
import mosques from "../assets/images/mosques.jpg";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => (
  <div className="hero__wrapper">
    <div className="hero__copy">
      <h1>Discover our city</h1>
      <p className="hero__intro">
        Small group tours of the history city of Istanbul
      </p>
      <Link className="btn-link" smooth to="/#tours">
        <button className="cta-btn">Book Tour</button>
      </Link>
    </div>
    <img className="hero__img" src={mosques} alt="mosques of istanbul" />
  </div>
);

export default Hero;
