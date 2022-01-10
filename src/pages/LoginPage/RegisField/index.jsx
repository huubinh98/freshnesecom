import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../../service/authService";
import { message } from 'antd';
import 'antd/dist/antd.css';


const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const Register = () => {
  const [formRegis, setFormRegis] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (name) => (e) => {
    setFormRegis({ ...formRegis, [name]: e.target.value });
  };

  const [err, setErr] = useState();
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    let errObj = {};

    if (!formRegis.name) {
      errObj.name = "*Please enter your name";
    } else if (formRegis.name.length < 2) {
      errObj.name = "*name must contain more than 2 characters";
    }
    if (!formRegis.username) {
      errObj.username = "*Please enter your username";
    } else if (!emailRegex.test(formRegis.username)) {
      errObj.username = "*this field must be an email";
    }
    if (!formRegis.password) {
      errObj.password = "*Please enter password";
    } else if (
      formRegis.password.length < 8 ||
      formRegis.password.length > 32
    ) {
      errObj.password = "*Password must contain 8 - 32 characters";
    }
    setErr(errObj);

    // if (Object.keys(errObj).length === 0) {
    //   const res = await authService.register(formRegis)
    //   if (res?.message) {
    //     return message.error(res.message);
    //   }
    //   dispatch({
    //     type: 'REGIS',
    //     payload: 
    //   })
    // }
    if (Object.keys(errObj).length === 0) {
      try {
        const res = await authService.register(formRegis)
        if (res?.error) {
          throw res.error;
        } else {
          const token = res?.data;
          if (token) {
            dispatch({
              type: 'REGIS',
              payload: token,
            })
          }
        }
      } catch (err) {
        message.error(err);
      }
    }
  };

  return (
    <div className="register">
      {/* <form> */}
      <label htmlFor="chk" aria-hidden="true">
        Sign up
      </label>
      <input
        onChange={handleChange("name")}
        value={formRegis.name}
        type="text"
        placeholder="User name"
      />
      {err && <p>{err.name}</p>}
      <input
        onChange={handleChange("username")}
        value={formRegis.username}
        type="text"
        placeholder="Email"
      />
      {err && <p>{err.username}</p>}
      <input
        onChange={handleChange("password")}
        value={formRegis.password}
        type="password"
        placeholder="Password"
      />
      {err && <p>{err.password}</p>}
      <button onClick={handleSubmit}>Sign up</button>
      {/* </form> */}
    </div>
  );
};

export default Register;
