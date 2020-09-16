import React from "react";
import Fade from "react-reveal/Fade";
import "./design.css";
import Designimg from "./design.png";

const Design = () => (
  <div className="design" id="design">
    <Fade left duration={3000}>
      <img src={Designimg} alt="" className="design-img" />
    </Fade>
    <Fade bottom delay={1000} duration={2000}>
      <div className="design-text">
        <h1>Portable design</h1>
        <p>The first apple you can carry in a bag</p>
      </div>
    </Fade>
  </div>
);

export default Design;
