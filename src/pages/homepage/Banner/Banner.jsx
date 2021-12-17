import React from "react";
import BannerItem from "../../../components/BannerItem";

import data from "../../../mocks";

import "./banner.scss";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <BannerItem data={data.banner} />
      </div>
    </>
  );
}
