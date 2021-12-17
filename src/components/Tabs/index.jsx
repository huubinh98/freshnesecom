import { React, useState } from "react";
import "./style.scss";

export default function Tabs() {
  const [tab, setTab] = useState(1);

  const handledTabClick = (index) => {
    console.log("handledTabClick:", index);
    setTab(index);
  };

  console.log("tab", tab);

  return (
    <div className="tabs">
      <div className="tabs-title">
        <div
          className={`tabs-title-item ${tab == 1 ? "active" : ""}`}
          onClick={() => handledTabClick(1)}
        >
          tab 1
        </div>
        <div
          className={`tabs-title-item ${tab == 2 ? "active" : ""}`}
          onClick={() => handledTabClick(2)}
        >
          tab 2
        </div>
        <div
          className={`tabs-title-item ${tab == 3 ? "active" : ""}`}
          onClick={() => handledTabClick(3)}
        >
          tab 3
        </div>
      </div>
      <div className="tabs-content">
        <div className={`content-item ${tab == 1 ? "active" : ""}`}>
          <h2>content 1</h2>
          <p>
            Repellendus esse consectetur nulla dolorem atque non tempora
            tempore, doloremque repudiandae pariatur incidunt nam nihil unde
            dolore deleniti sit eaque quisquam fuga.
          </p>
        </div>
        <div className={`content-item ${tab == 2 ? "active" : ""}`}>
          <h2>content 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            esse consectetur nulla dolorem atque non tempora tempore, doloremque
            repudiandae pariatur incidunt nam nihil unde dolore deleniti sit
            eaque quisquam fuga.
          </p>
        </div>
        <div className={`content-item ${tab == 3 ? "active" : ""}`}>
          <h2>content 3</h2>
          <p>
            doloremque repudiandae pariatur incidunt nam nihil unde dolore
            deleniti sit eaque quisquam fuga.
          </p>
        </div>
      </div>
    </div>
  );
}
