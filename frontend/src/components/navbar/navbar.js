import "./navbar.scss";

export default function Navbar({ currView, views, setView }) {
  const getClassName = (view) => {
    return views[view] === currView ? "selected tab" : "tab";
  };
  return (
    <div className="navbar">
      <a
        href="https://github.com/ykwei7"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="main">yangkenw</div>
      </a>
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
