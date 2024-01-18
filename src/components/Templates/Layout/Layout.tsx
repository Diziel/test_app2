import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./Layout.scss";

const Layout: React.FC = () => {
  return (
    <>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">With state</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/with-redux">With redux</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
