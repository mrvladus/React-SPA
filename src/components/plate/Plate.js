import React from "react";
import Fade from "react-reveal/Fade";
import "./plate.css";
import Mac from "./mac.png";

const Plate = () => (
  <div className="plate" id="plate">
    <Fade top delay={1000} duration={3000}>
      <h1>Introducing Macintosh</h1>
    </Fade>
    <Fade left duration={3000}>
      <img src={Mac} alt="" className="plate-img" />
    </Fade>
  </div>
);

export default Plate;
