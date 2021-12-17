import React from "react";
import Banner from "./Banner/Banner";
import BestProduct from "./BestProduct/BestProduct";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import "./style.scss";

export default function HomePage() {
  return (
    <main className="home__wrapper">
      <div className="container-fluid">
        <section className="category__banner">
          <CategoryMenu />
          <Banner />
        </section>
        <section className="category__product">
          <CategoryMenu />
          <BestProduct />
        </section>
        <section className="category__product">
          <CategoryMenu />
          <BestProduct />
        </section>
      </div>
    </main>
  );
}
