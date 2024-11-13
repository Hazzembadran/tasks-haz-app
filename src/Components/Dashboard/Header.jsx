import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../redux/slices/auth-slice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  // let loggedIn = useSelector((state) => state.auth.loggedIn);

  let logoutHandler = () => {
    localStorage.setItem("logged_in", false);
    localStorage.setItem("token", null);
    
    dispatch(authSliceActions.logout()); 
    navigate("/", { replace: true });
  };
  return (
    <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
        Hazem Tasks
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <button
            onClick={logoutHandler}
            className="nav-link px-3 btn-light-main btn"
            href="#"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
