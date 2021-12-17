import React from "react";
import { BlogItem } from "../../../components/Blog";
import "./blogpost.scss";

export default function BlogPost() {
  return (
    <div className="blog__post">
      <div className="container">
        <div className="blog_list">
          <div className="left">
            <BlogItem
              size="large"
              title="Our chef tips for a great and tasty dinner ready in 20 minutes"
            ></BlogItem>
          </div>

          <div className="mid">
            <BlogItem
              size="medium"
              title="Which vegetable your family will love and want’s eat each day"
            ></BlogItem>
          </div>

          <div className="right">
            <BlogItem
              size="small"
              title="Salat is kinda good start to your morning routines"
            ></BlogItem>
            <BlogItem
              size="small"
              title="Our chef tips for a great and healthy breakfast"
            ></BlogItem>
            <BlogItem
              size="small"
              title="Prepare a simple and delicious breads"
            ></BlogItem>
          </div>
        </div>
      </div>
    </div>
  );
}
