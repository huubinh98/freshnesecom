import React from "react";
import "./style.scss";
import data from "../../mocks";

export const QuoteItem = () => {
  const { quoteList } = data;

  return (
    <>
      {quoteList.map((item) => {
        return (
          <div className="quoteItem" key={item.id}>
            <div className="quoteContent">
              <h4>{item.content}</h4>
              <p>{item.title}</p>
            </div>
            <div className="quoteImg">
              <img src={item.image} alt="avt" />
            </div>
          </div>
        );
      })}
    </>
  );
};
