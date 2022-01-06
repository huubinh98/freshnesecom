import React from "react";
import Button from "../Button";
import data from "../../mocks";

import "./style.scss";
import Tags from "../Tags";
import { Rating } from "@mui/material";
import classNames from "classnames";

export default function ProductItem({star = 'default'}) {
  const { productCart } = data;
  return (
    <>
      {productCart.map((item) => {
        return (
          <a href="#/" key={item.id}>
            <div className={classNames(`pro__item star-${star}`)}>
              <div className="pro__item-img">
                <img src={item.image} alt="" />
                <Tags itemTag='-35%' size='small' color='green'></Tags>
              </div>
              <div className="pro__item-content">
                <h4 className="title">{item.name}</h4>
                <p className=" desc">{item.description}</p>
                <div className="rating">
                  <Rating name="read-only" value={4} readOnly />
                </div>
                <div className="content-button">
                  <div className="price">
                    <p className="price__discount">{item.priceAccount} USD</p>
                    <p className="price__main">{item.priceMain}</p>
                  </div>
                  <Button>Buy now</Button>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
