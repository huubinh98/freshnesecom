import React from "react";
import "./style.scss";
import HeaderContact from "./HeaderContact";
import Search from "./Search";
import Cart from "./Cart";
import Account from "./Account";
import { Logo } from "../Icon";

export default function Header() {
  let contact = {
    chat: "Chat with us",
    phone: "+420 336 775 664",
    email: "info@freshnesecom.com",
  };

  let contactList = ["Blog", "About us", "Carrers"];
  const contactItem = contactList.map(function (item, index) {
    return (
      <li className="header__contact-item" key={index}>
        <a href="#">{item}</a>
      </li>
    );
  });
  return (
    <header className="header">
      <div className="container">
        <HeaderContact props={contact} item={contactItem} />
        <div className="header__search">
          <div className="logo">
            <h1>ReactShop</h1>
            <Logo />
          </div>
          <Search />
          <div className="header__search-left">
            <Account />
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
