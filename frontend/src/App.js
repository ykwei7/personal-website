import Navbar from "./components/navbar/navbar";
import Home from "./views/home/home";
import Project from "./views/project/project";
import About from "./views/about/about";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./context/themeContext";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  const getThemeClass = () => {
    return isDarkMode ? "app-dark app" : "app-light app";
  };

  const views = {
    HOME: "/",
    PROJECT: "/projects",
    // WORK: "work",
    ABOUT: "/about",
  };

  return (
    <div className={getThemeClass()}>
      <Navbar views={views} />
      <Routes>
        <Route path={views.HOME} element={<Home />}></Route>
        <Route path={views.PROJECT} element={<Project />}>
          <Route path=":projName" element={<Project />} />
        </Route>
        <Route path={views.ABOUT} element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
