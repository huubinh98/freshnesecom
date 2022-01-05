import React, { useState } from "react";
import authService from "../../../service/authService";
import "./style.scss";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    usename: "",
    password: "",
  });

  const handleChange = (name) => (e) => {
    setFormLogin({ ...formLogin, [name]: e.target.value });
  };

  const [err, setErr] = useState();
  // const [data, setData] = useState();

  const handleSubmit = () => {
    let errObj = {};
    if (!formLogin.usename) {
      errObj.usename = "*Please enter your usename";
    }
    if (!formLogin.password) {
      errObj.password = "*Please enter your password";
    }
    setErr(errObj);
    if (Object.keys(errObj).length === 0) {
      let res = authService.login();
    }
  };

  return (
    <div className="login">
      {/* <form> */}
      <label htmlFor="chk" aria-hidden="true">
        Login
      </label>
      <input
        onChange={handleChange("usename")}
        value={formLogin.usename}
        type="email"
        placeholder="Email"
      />
      {err && <p>{err.usename}</p>}
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
