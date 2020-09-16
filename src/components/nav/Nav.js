import React from "react";
import Fade from "react-reveal/Fade";
import "./nav.css";
import Logo from "./logo.svg";

const Nav = () => (
  <Fade top delay={3000} duration={2000}>
    <div className="navBar">
      <img src={Logo} alt="" className="logo" />
      <a href="#plate" className="navItem">
        Home
      </a>
      <a href="#design" className="navItem">
        Design
      </a>
      <a href="#" className="navItem">
        Contact
      </a>
    </div>
  </Fade>
);

export default Nav;
