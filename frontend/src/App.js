import Navbar from "./components/navbar/navbar";
import Home from "./views/home/home";
import Project from "./views/project/project";
import About from "./views/about/about";
// import Learnings from "./views/learnings/learnings";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  const views = {
    HOME: "/",
    PROJECT: "/projects",
    // LEARNINGS: "/learnings",
    ABOUT: "/about",
  };

  return (
    <div className="app">
      <Navbar views={views} />
      <Routes>
        <Route path={views.HOME} element={<Home />}></Route>
        <Route path={views.PROJECT} element={<Project />}>
          <Route path=":projName" element={<Project />} />
        </Route>
        {/* <Route path={views.LEARNINGS} element={<Learnings />}></Route> */}
        <Route path={views.ABOUT} element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
