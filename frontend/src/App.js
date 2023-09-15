import Navbar from "./components/navbar/navbar";
import Home from "./views/home/home";
import Project from "./views/project/project";
import "./App.scss";
import React, { useState } from "react";
import Work from "./views/work/work";

function App() {
  const views = {
    HOME: "home",
    PROJECT: "project",
    WORK: "work",
    ABOUT: "about",
  };

  const [currView, setView] = useState(views.HOME);

  return (
    <div className="app">
      <Navbar currView={currView} views={views} setView={setView} />
      {currView === views.HOME && <Home />}
      {currView === views.PROJECT && <Project />}
      {currView === views.WORK && <Work />}
    </div>
  );
}

export default App;
