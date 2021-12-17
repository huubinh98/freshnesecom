import React from "react";
import Banner from "./Banner/Banner";
import BestProduct from "./BestProduct/BestProduct";
import BlogPost from "./BlogPost/BlogPost";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import CustomerQuote from "./CustomerQuote/CustomerQuote";
import "./style.scss";

export default function HomePage() {
  return (
    <main className="home__wrapper">
      <section className="category__banner">
        <div className="container">
          <CategoryMenu />
          <Banner />
        </div>
      </section>
      <section className="category__product">
        <div className="container">
          <CategoryMenu />
          <BestProduct />
        </div>
      </section>
      <section className="category__product">
        <div className="container">
          <CategoryMenu />
          <BestProduct />
        </div>
      </section>
      <CustomerQuote />
      <BlogPost />
    </main>
  );
}
