import React from "react";
import { Link } from "react-router-dom";
import { IconAccount } from "../Icon";

export default function Account() {
  return (
    <div>
      <Link to="/LoginPage">
        <IconAccount />
      </Link>
    </div>
  );
}
