import React from "react";
import { Link } from "react-router-dom";
import { IconCart } from "../Icon";

export default function Cart() {
  return (
    <div>
      <Link to='/checkout'>
        <IconCart />
      </Link>
    </div>
  );
}
