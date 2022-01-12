import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconUserLogin } from "../Icon";
import { IconAccount } from "../Icon";

export default function Account() {
  const { loginStatus } = useSelector((state) => state.auth);
  return (
    <div>
      <Link to="/login">
        {/* <div style={{ color: `${loginStatus ? "red" : "black"}` }}>
          <IconAccount />
        </div> */}
        {
          loginStatus ? <IconUserLogin /> : <IconAccount />
        }
      </Link>
    </div>
  );
}
