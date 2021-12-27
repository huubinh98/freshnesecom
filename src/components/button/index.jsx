import React from "react";
import classnames from "classnames";
import "./style.scss";

export default function Button({
  children,
  color = "default",
  size = "small",
  type = "default",
  round = true,
  icon,
  loading,
}) {
  return (
    <button
      className={classnames(
        "Button",
        `color-${color}`,
        `size-${size}`,
        `type-${type}`,
        { round }
      )}
      disabled={loading}
    >
      {type === "icon-left" && icon}
      {children}
      {type === "icon-right" && icon}
    </button>
  );
}
