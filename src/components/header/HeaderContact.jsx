import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

export default function HeaderContact({ props, item }) {
  const { chat, phone, email } = props;
  const { userInfo } = useSelector((state) => state.user);
  const { login } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div className="header__contact">
      <ul className="header__contact-list">
        <li className="header__contact-item">
          <Link to="">{chat}</Link>
        </li>
        <li className="header__contact-item">
          <span>{phone}</span>
        </li>
        <li className="header__contact-item">
          <span>{email}</span>
        </li>
      </ul>
      <ul className="header__contact-list">
        {/* <li>
          {login ? (
            <>
              account: {name}
              <button onClick={() => setLogin(false)}>Logout</button>
            </>
          ) : (
            ""
          )}
        </li> */}
        <li className="header__contact-item">
          <Link to="/blogpage">Blog</Link>
        </li>
        <li className="header__contact-item">
          <Link to="/blogpage">About us</Link>
        </li>
        <li className="header__contact-item">
          <Link to="/blogpage">Carrers</Link>
        </li>
        <li className="header__contact-item">
          <Link to="/checkoutpage">Checkout</Link>
        </li>
        <li className="header__contact-item">
          {userInfo?.name && login ? (
            <>
              <p>{userInfo.name}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
}
