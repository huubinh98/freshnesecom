import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userService from "../../service/userService";
import Banner from "./Banner/Banner";
import BestProduct from "./BestProduct/BestProduct";
import BlogPost from "./BlogPost/BlogPost";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import CustomerQuote from "./CustomerQuote/CustomerQuote";
import "./style.scss";

export default function HomePage() {
  const { loginStatus } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (loginStatus) {
      getUser();
    }
    return () => {};
  }, [loginStatus]);

  const getUser = async () => {
    let res = await userService.getInfo();
    if (res) {
      dispatch({
        type: "GET_INFO",
        payload: res.data,
      });
    }
  };

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
