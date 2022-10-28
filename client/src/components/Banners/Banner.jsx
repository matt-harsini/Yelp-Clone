import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RestaurantsContext } from "../../context/RestaurantsContext";
import { toast } from "react-toastify";
import "../styles.css";

function Banner({ setAuth }) {
  const nav = useNavigate();
  const { userName } = useContext(RestaurantsContext);

  const handleHomeBtn = (e) => {
    e.preventDefault();
    nav("/home");
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("Logged out Successfully, have a nice day ඞ");
  };

  return (
    <div className="banner">
      <button
        onClick={(e) => handleHomeBtn(e)}
        className="mr-3 mt-3 float-right btn btn-primary"
      >
        Home
      </button>

      <div class="user-info">
        <span className="pl-2 pt-2 float-left">
          Interactive Restaurant Rater
        </span>
        <br />
        <h6 className="mb-3 pt-1 pl-2 float-left">Username: {userName}</h6>
      </div>
    </div>
  );
}

export default Banner;
