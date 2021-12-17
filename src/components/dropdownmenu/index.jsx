import React from "react";
import { IconDropdown } from "../Icon";
import DropItem from "./DropItem";
import "./style.scss";

export default function DropdownMenu() {
  const dropList = [
    "Bakery",
    "Fruit and vegetables",
    "Meat and fish",
    "Drinks",
    "Kitchen",
    "Special nutrition",
    "Baby",
    "Pharmacy",
  ];
  const dropItem = dropList.map((item, index) => {
    return (
      <li className="drop__menu-item" key={index}>
        <span>{item}</span>
        <IconDropdown />
      </li>
    );
  });

  return (
    <div className="drop__menu">
      <div className="container">
        <DropItem dropItem={dropItem} />
      </div>
    </div>
  );
}
