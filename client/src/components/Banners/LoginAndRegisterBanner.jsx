import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
function LoginAndRegisterBanner() {
  const nav = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    nav("/login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    nav("/register");
  };

  return (
    <div className="banner">
      <div className="login-reg">
        <button
          onClick={(e) => handleRegister(e)}
          className=" mr-2 mt-2 float-right btn btn-danger"
        >
          Register
        </button>
        <button
          onClick={(e) => handleLogin(e)}
          className="mr-2 mt-2 float-right btn btn-danger"
        >
          Login
        </button>
      </div>
      <div className="user-info">
        <span className="pl-2 pt-2 float-left">
          Interactive Restaurant Rater
        </span>
      </div>
    </div>
  );
}

export default LoginAndRegisterBanner;
