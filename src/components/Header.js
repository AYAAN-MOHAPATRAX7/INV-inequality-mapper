import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <div>
        <span className="logo">Invisible Inequality Mapper</span>
        <span className="sdg-badge">SDG 10 • Sample Data</span>
      </div>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Heatmap
        </Link>

        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          Village Profile
        </Link>

        <Link
          to="/comparison"
          className={location.pathname === "/comparison" ? "active" : ""}
        >
          Comparison
        </Link>

        <Link
          to="/action-hub"
          className={location.pathname === "/action-hub" ? "active" : ""}
        >
          Action Hub
        </Link>
      </div>
    </div>
  );
}

export default Header;