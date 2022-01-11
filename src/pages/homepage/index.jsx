import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productService from "../../service/productService";
import userService from "../../service/userService";
import Banner from "./Banner/Banner";
import BestProduct from "./BestProduct/BestProduct";
import BlogPost from "./BlogPost/BlogPost";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import CustomerQuote from "./CustomerQuote/CustomerQuote";
import "./style.scss";

export default function HomePage() {
  const { login } = useSelector((state) => state.auth);
  // const [getProduct, setGetProduct] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (login) {
      getUser();
    }
    return () => {};
  }, [login]);

  const getUser = async () => {
    let res = await userService.getInfo();
    if (res) {
      dispatch({
        type: "GET_INFO",
        payload: res.data,
      });
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     const resPro = await productService.getProduct();
  //     setGetProduct(resPro?.data);
  //   })();
  // }, []);

  return (
    <main className="home__wrapper">
      <section className="home__content">
        <div className="container">
          <CategoryMenu isBanner />
          <Banner />
        </div>
      </section>
      <section className="home__content">
        <div className="container">
          <CategoryMenu />
          <BestProduct />
        </div>
      </section>
      {/* <section className="category__product">
        <div className="container">
          <CategoryMenu />
          <BestProduct />
        </div>
      </section> */}
      <CustomerQuote />
      <BlogPost />
    </main>
  );
}
