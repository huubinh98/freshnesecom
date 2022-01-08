import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconAccount } from "../Icon";

export default function Account() {
  const { loginStatus } = useSelector((state) => state.auth);
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div>
      <Link to="/login">
        {userInfo.name && <p>{userInfo.name}</p>}
        <div style={{ color: `${loginStatus ? "red" : "black"}` }}>
          <IconAccount />
        </div>
      </Link>
    </div>
  );
}
