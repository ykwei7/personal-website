import Navbar from "./components/navbar/navbar";
import Home from "./views/home/home";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
