import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../../service/authService";
import { message } from "antd";
import "./style.scss";
import 'antd/dist/antd.css';

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState();
  const dispatch = useDispatch();

  const handleChange = (name) => (e) => {
    setFormLogin({ ...formLogin, [name]: e.target.value });
  };

  const { login } = useSelector(store => store.auth)

  const onClose = () => {
    message.destroy();
  };

  const handleSubmit = async () => {
    let errObj = {};
    if (!formLogin.username) {
      errObj.username = "*Please enter your username";
    } else if (!emailRegexp.test(formLogin.username)) {
      errObj.username = "Username phai la Email";
    }

    if (!formLogin.password) {
      errObj.password = "*Please enter your password";
    } else if (
      formLogin.password.length < 6 ||
      formLogin.password.length > 32
    ) {
      errObj.password = "Password phai tu 6-32 ky tu";
    }
    setErr(errObj);
    if (Object.keys(errObj).length === 0) {
      try {
        const res = await authService.login(formLogin);
        if (res?.message) {
          throw res.message;
        } else {
          const token = res?.data;
          if (token) {
            dispatch({
              type: "LOGIN",
              payload: token,
            });
          }
        }
      } catch (error) {
        message.warning(error, 2, onClose);
      }
      //call API
      // dispatch
    }
  };

  return (
    <div className="login">
      {/* <form> */}
      <label htmlFor="chk" aria-hidden="true">
        Login
      </label>
      <input
        onChange={handleChange("username")}
        value={formLogin.username}
        type="email"
        placeholder="Email"
      />
      {err && <p>{err.username}</p>}
      <input
        onChange={handleChange("password")}
        value={formLogin.password}
        type="password"
        placeholder="Password"
      />
      {err && <p>{err.password}</p>}
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
