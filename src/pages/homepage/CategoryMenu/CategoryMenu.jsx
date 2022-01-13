import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { IconArowBtn } from "../../../components/Icon";
import productService from "../../../service/productService";
import "./categorymenu.scss";

export default function CategoryMenu({ isBanner }) {
  const [getCategory, setGetCategory] = useState([]);
  useEffect(() => {
    fechProduct();
  }, []);

  const fechProduct = async () => {
    const res = await productService.getCategory();
    setGetCategory(res);
  };

  let temp = [];
  if (isBanner) {
    temp = getCategory.slice(1, 4);
  } else {
    temp = getCategory;
  }

  return (
    <div className="cate">
      <h3 className="heading">Category menu</h3>
      <ul className="cate__list">
        {temp.map((e) => {
          return (
            <li className="cate__list-item" key={e.id}>
              <Link to={`/categories`}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
      
      <Link to={"/categories"}>
        <Button
          color="bright"
          size="medium"
          type="icon-right"
          icon={<IconArowBtn />}
        >
          More Categories
        </Button>
      </Link>
    </div>
  );
}
