import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { IconArowBtn } from "../../../components/Icon";
import "./categorymenu.scss";

export default function CategoryMenu() {
  return (
    <div className="cate">
      <h3 className="heading">Category menu</h3>
      <ul className="cate__list">
        <li className="cate__list-item">
          <Link to={"/"}>Bakery</Link>
        </li>
        <li className="cate__list-item">
          <Link to="/">Fruit and vegetables</Link>
        </li>
        <li className="cate__list-item">
          <Link to="/">Meat and fish</Link>
        </li>
        <li className="cate__list-item">
          <Link to={"/"}>Drinks</Link>
        </li>
        <li className="cate__list-item">
          <Link to={"/"}>Kitchen</Link>
        </li>
      </ul>
      <Button
        color="bright"
        size="medium"
        type="icon-right"
        icon={<IconArowBtn />}
      >
        More Categories
      </Button>
    </div>
  );
}
