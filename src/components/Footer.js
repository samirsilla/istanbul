import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => (
  <div className="footer__wrapper">
    <ul className="footer__nav">
      <li>About</li>
      <li>Tours</li>
      <li>Subscribe</li>
      <li>Contact</li>
      <li>Booking</li>
      <li>Terms</li>
      <li>Privacy</li>
    </ul>
    <Link smooth to="#header" className="footer__top-btn">
      <i className="fas fa-arrow-up" />
    </Link>
  </div>
);

export default Footer;
