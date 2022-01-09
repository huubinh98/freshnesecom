import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../../service/authService";
import "./style.scss";
import { message } from 'antd';
import 'antd/dist/antd.css';
import { Navigate } from "react-router-dom";

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

  if(login) {
    return <Navigate to='/'/>
  };

  const handleSubmit = async () => { 
    let errObj = {};
    if (!formLogin.username) {
      errObj.username = "*Please enter your username";
    }
    if (!formLogin.password) {
      errObj.password = "*Please enter your password";
    }
    setErr(errObj);
    if (Object.keys(errObj).length === 0) {
      const token = await authService.login(formLogin);
      if (token?.message) {
        return message.error(token.message);
      }
      dispatch({
        type: 'LOGIN',
        payload: token
      })
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
      {/* </form> */}
    </div>
  );
};

export default Login;
