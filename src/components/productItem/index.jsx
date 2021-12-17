import React from "react";
import Button from "../Button";
import data from "../../mocks";

import "./style.scss";

export default function ProductItem({}) {
  const { productCart } = data;
  return (
    <>
      {productCart.map((item) => {
        return (
          <div className="pro__item" key={item.id}>
            <div className="pro__item-img">
              <img src={item.image} alt="" />
            </div>
            <div className="pro__item-content">
              <h4 className="title">{item.name}</h4>
              <p className=" desc">{item.description}</p>
              <div className="content-button">
                <div className="price">
                  <p className="price__discount">{item.priceAccount} USD</p>
                  <p className="price__main">{item.priceMain}</p>
                </div>
                <Button>Buy now</Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
