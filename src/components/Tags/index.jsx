import React from "react";
import "./style.scss";
import data from "../../mocks";

export default function Tags() {
  const { tagList } = data;
  return (
    <>
      {tagList.map((item, index) => (
        <div className="tag-item" key={index}>
          {item}
        </div>
      ))}
    </>
  );
}
