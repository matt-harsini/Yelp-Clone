import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import LoginAndRegisterBanner from "../components/Banners/LoginAndRegisterBanner";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "", //defaults the email as blank
    password: "", //defaults the password as blank
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value }); //changes the name of the input to the current state of the input field
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (process.env.NODE_ENV === "production") {
      try {
        const body = { email, password };
        const response = await fetch("/api/v1/restaurants/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const parseRes = await response.json(); //getting the token and storing it in a variable

        if (parseRes.token) {
          //if there is a token generated
          localStorage.setItem("token", parseRes.token); //storing the token in the local storage
          setAuth(true);
          toast.success("Login Successful!");
        } else {
          setAuth(false);
          toast.error(parseRes); //returning the error created in the login route in server.js
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      try {
        const body = { email, password };
        const response = await fetch(
          "http://localhost:3001/api/v1/restaurants/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );

        const parseRes = await response.json(); //getting the token and storing it in a variable

        if (parseRes.token) {
          //if there is a token generated
          localStorage.setItem("token", parseRes.token); //storing the token in the local storage
          setAuth(true);
          toast.success("Login Successful!");
        } else {
          setAuth(false);
          toast.error(parseRes); //returning the error created in the login route in server.js
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <div>
      <LoginAndRegisterBanner />
      <div className="login-box ">
        <h1 className="mt-5 font-weight-bold">Login</h1>
        <form onSubmit={onSubmitForm}>
          <input
            className="form-control my-3"
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <input
            className="form-control my-3"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <button className="btn btn-primary btn-block">Submit</button>
        </form>
        <Link to="/register">Don't have an account? Click here</Link>
      </div>
    </div>
  );
};
export default Login;
