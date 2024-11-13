import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Helpers from "../../Utils/Helpers";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../redux/slices/auth-slice";
import LoginFormOption from "./LoginFormOption";

const LoginForm = () => {
  let emailLoginRef = useRef();
  let passwordLoginRef = useRef();

  let dispatch = useDispatch();
  let navigate = useNavigate();

  // let loggedIn = useSelector((state) => state.auth.loggedIn);

  let formSubmitHandler = (event) => {
    event.preventDefault();

    // console.log(first)
    if (checkData()) {
      login();
      // alert(loggedIn);
    }
  };

  let login = () => {
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcqy8vVmdn3lR1gKYfpQ48LhrXHVC9A4Y`,
        {
          email: emailLoginRef.current.value,
          password: passwordLoginRef.current.value,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        // console.log(response);
        localStorage.setItem("logged_in", true);
        localStorage.setItem("token", response.data.idToken);
        dispatch(authSliceActions.login(response.data.idToken));
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        console.log(error.response?.data.error.message);
        if (
          error.response?.data.error.message === "INVALID_LOGIN_CREDENTIALS"
        ) {
          Helpers.showMessage("error", "Email not found", "error");
        }
      });
  };

  let checkData = () => {
    if (
      emailLoginRef.current.value !== "" &&
      passwordLoginRef.current.value !== ""
    ) {
      return true;
    }
    Helpers.showMessage("Error!", "Error login credentials", "error");
    return false;
  };

  return (
    <div
      className="tab-pane  fade show active"
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >
      <form onSubmit={formSubmitHandler}>
        

      <LoginFormOption heading="Login To Hazem Task System With" />

        <div className="form-outline mb-4">
          <input
            type="email"
            id="loginName"
            className="form-control"
            placeholder="Email or username"
            ref={emailLoginRef}
            value={"haz@haz.haz"}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            placeholder="Password"
            ref={passwordLoginRef}
            value={"hazhaz"}
          />
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheck"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="loginCheck">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-main btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
