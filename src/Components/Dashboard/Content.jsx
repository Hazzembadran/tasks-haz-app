import React from "react";
import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
          {/* CONTENET TO BY DISPLAYED HERE */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Content;
