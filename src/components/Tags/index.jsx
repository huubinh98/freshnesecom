import React from "react";
import "./style.scss";
import data from "../../mocks";
import classnames from "classnames";

export default function Tags({
  color = 'default',
  size = 'default',
  type = 'default',
  icon
}) {
  const { tagList } = data;
  return (
    <>
      {tagList.map((item, index) => (
        <div className={classnames(
          'tag-item',
          `color-${color}`,
          `size-${size}`,
          `type-${type}`,
          { icon }
        )} key={index}>
          {item}
          {/* <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.5997 30.5999L9.39966 9.3999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
            <path d="M30.5997 9.3999L9.39966 30.5999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
          </svg> */}
        </div>
      ))}
    </>
  );
}
