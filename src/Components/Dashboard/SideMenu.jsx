import React from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className={`nav-link ${(navData) =>
                navData.isActive ? "active" : ""}`}
              aria-current="page"
              to="/dashboard/tasks"
              end
            >
              <span data-feather="home"></span>
              Tasks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${(navData) =>
                navData.isActive ? "active" : ""}`}
              to="/dashboard/tasks/new-task"
            >
              <span data-feather="file"></span>
              New Task
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideMenu;
