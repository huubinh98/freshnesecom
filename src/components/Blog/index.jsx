import React from "react";
import blog from "../../assets/img/blog.jpg";
import "./style.scss";
import avt from "../../assets/img/avt.jpg";
import classnames from "classnames";
import { Link } from "react-router-dom";

export const BlogItem = ({ title, size = "meidum" }) => {
    return (
        <div className={classnames("blogItem", `size-${size}`)}>
            <div className="blogImg">
                <img src={blog} alt="Blog Img" />
            </div>

            <div className="blogTag">Vegetable</div>

            <div className="blogContent">
                <Link to="" className="blogTitle">
                    {title}
                </Link>

                <p className="blogAuthor">
                    <img src={avt} alt="" />
                    <span className="author">Author</span>
                    <span className="date">15.06.2021</span>
                </p>
            </div>
        </div>
    );
};
