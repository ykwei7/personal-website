import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ views }) {
  const location = useLocation();
  const isSelected = (view) => {
    if (location.pathname === views[view]) {
      return "selected link";
    }
    return "link";
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
          <Link key={view} to={views[view]} className={isSelected(view)}>
            {view}
          </Link>
        ))}
      </div>
    </div>
  );
}
