import React from "react";
import "./style.scss";
import { IconWishlist } from "../Icon";
import { IconCompare } from "../Icon";
import { IconClose } from "../Icon";
import { IconRating } from "../Icon";
import Button from "../Button";

export default function ProductCart() {
  return (
    <div className="product__cart">
      <div className="product__cart-left">
        <div className="img">
          <img
            src="https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg"
            alt=""
          />
        </div>
        <div className="left-compay wishlist">
          <IconWishlist />
          <span>Wishlist</span>
        </div>
        <div className="left-compay compare">
          <IconCompare />
          <span>Compare</span>
        </div>
        <div className="left-compay remove">
          <IconClose />
          <span>Remove</span>
        </div>
      </div>
      <div className="product__cart-right">
        <h4 className="title">Product title</h4>
        <div className="type">
          <div className="type__title">
            <p>Farm</p>
            <p>Freshness:</p>
          </div>
          <div className="type__name">
            <p>Tharamis Farm</p>
            <p>1 day old</p>
          </div>
        </div>
        <div className="rating">
          <IconRating />
          <IconRating />
          <IconRating />
          <IconRating />
          <IconRating />
        </div>
        <div className="price__item">
          <div className="price">
            <p className="price__discount">52 USD</p>
            <p className="price__main">100</p>
          </div>
          <div className="option">
            <Button>Buy now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
