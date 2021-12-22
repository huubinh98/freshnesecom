import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button";

export default function HeaderContact({ props, item }) {
  const { chat, phone, email } = props;
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
      <ul className="header__contact-list">{item}</ul>
    </div>
  );
}
