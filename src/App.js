import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Plate from "./components/plate/Plate";
import Design from "./components/design/Design";
import Tear from "./components/tear/Tear";

const App = () => (
  <div className="App">
    <Nav />
    <Plate />
    <Tear />
    <Design />
  </div>
);

export default App;
