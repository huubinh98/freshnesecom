import React from "react";
import Banner from "./Banner/Banner";
import BestProduct from "./BestProduct/BestProduct";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import CustomerQuote from "./CustomerQuote/CustomerQuote";
import "./style.scss";

export default function HomePage() {
  return (
    <div>
      <CategoryMenu />
      <Banner />
      <BestProduct />
      <CustomerQuote />
    </div>
  );
}
