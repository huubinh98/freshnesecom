import React from "react";
import "./style.scss";
import data from "../../mocks";
import classnames from "classnames";

export default function Tags({
  color = "default",
  size = "default",
  type = "default",
  icon,
}) {
  const { tagList } = data;
  return (
    <>
      {tagList.map((item, index) => (
        <div
          className={classnames(
            "tag-item",
            `color-${color}`,
            `size-${size}`,
            `type-${type}`,
            { icon }
          )}
          key={index}
        >
          {item}
        </div>
      ))}
    </>
  );
}
