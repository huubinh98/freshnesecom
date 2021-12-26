import React from "react";
import "./style.scss";
import HeaderContact from "./HeaderContact";
import Search from "./Search";
import Cart from "./Cart";
import Account from "./Account";
import { Logo } from "../Icon";
import { Link } from "react-router-dom";

export default function Header() {
  let contact = {
    chat: "Chat with us",
    phone: "+420 336 775 664",
    email: "info@freshnesecom.com",
  };
  return (
    <header className="header">
      <div className="container">
        <HeaderContact props={contact} />
        <div className="header__search">
          <Link to='/' className="logo">
            <h1>ReactShop</h1>
            <Logo />
          </Link>
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
