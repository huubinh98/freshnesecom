import React from "react";
import Button from "../Button";
import { IconArowBtn } from "../Icon";

import "./style.scss";

export default function index({ data }) {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="banner__item" key={item.id}>
            <div className="banner__img">
              <img src={item.image} alt="" />
            </div>
            <div className="banner__item-content">
              <p className="title">{item.title}</p>
              <h2 className="heading">{item.name}</h2>
              <Button
                color="bright"
                size="medium"
                type="icon-right"
                icon={<IconArowBtn />}
              >
                Read recepies
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}
