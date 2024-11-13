import React, { useRef, useState } from "react";
import Helpers from "../../Utils/Helpers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../redux/slices/auth-slice";
import LoginFormOption from "./LoginFormOption";

const RegisterForm = () => {
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let passwordConfirmationRef = useRef();
  let termsRef = useRef();

  let dispatch = useDispatch();

  let [isTermsConfirmed, setTermsConfirmed] = useState(true);

  let navigate = useNavigate();

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if (checkData()) {
      register();
    }
  };

  let checkData = () => {
    if (
      nameRef.current.value !== "" &&
      emailRef.current.value !== "" &&
      passwordRef.current.value !== "" &&
      passwordConfirmationRef.current.value !== "" &&
      termsRef.current.checked
    ) {
      if (passwordRef.current.value === passwordConfirmationRef.current.value) {
        return true;
      }

      Helpers.showMessage("Error", "Password confirmation wrong!", "error");

      return false;
    }
    Helpers.showMessage("Error", "Enter your account info!", "error");
    return false;
  };

  let register = () => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcqy8vVmdn3lR1gKYfpQ48LhrXHVC9A4Y",
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("logged_in", true);
        // tasksContext.setLoggedIn(true);
        dispatch(authSliceActions.login(response.data.idToken));
        Helpers.showMessage("Success", "Registration successffully", "success");
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="tab-pane fade"
      id="pills-register"
      role="tabpanel"
      aria-labelledby="tab-register"
    >
      <form onSubmit={onSubmitHandler}>
        <LoginFormOption heading="Register in Hazem Task System with" />

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            placeholder="Name"
            ref={nameRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            placeholder="Email"
            ref={emailRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            placeholder="password"
            ref={passwordRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            placeholder="repeat password"
            ref={passwordConfirmationRef}
          />
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            defaultChecked
            aria-describedby="registerCheckHelpText"
            ref={termsRef}
            onChange={(event) => setTermsConfirmed(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>

        <button
          type="submit"
          disabled={!isTermsConfirmed}
          className="btn btn-main btn-block mb-3"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
