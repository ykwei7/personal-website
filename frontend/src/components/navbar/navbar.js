import "./navbar.scss";

export default function Navbar({ currView, views, setView }) {
  const getClassName = (view) => {
    return views[view] === currView ? "selected tab" : "tab";
  };
  return (
    <div className="navbar">
      <div className="main">yangkenw</div>
      <div className="tabs">
        {Object.keys(views).map((view) => (
          <div
            className={getClassName(view)}
            onClick={() => setView(views[view])}
          >
            {view}
          </div>
        ))}
      </div>
    </div>
  );
}
