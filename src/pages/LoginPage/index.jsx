import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import bg from "../../assets/img/bg-login.jpg";
import Login from "./LoginField";
import Register from "./RegisField";
import "./style.scss";

const LoginPage = () => {
  const { loginStatus } = useSelector((store) => store.auth);
  console.log(`loginStatus`, loginStatus);
  if (loginStatus) return <Navigate to="/" />;
  return (
    <>
      <div className="login-page">
        <div className="left">
          <img src={bg} alt="" />
        </div>
        <div className="right">
          <div className="login-form">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <Register />
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
