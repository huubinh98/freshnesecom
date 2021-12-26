import classNames from "classnames";
import React from "react";
import "./style.scss";

export default function Input({
  label,
  icon,
  size = "default",
  position = "default",
  ...inputProps
}) {
  return (
    <label>
      <p className="label">{label}</p>
      <div className={classNames(`input size-${size} pos-${position}`)}>
        {position === "icon-left" && icon}
        <input {...inputProps} />
        {position === "icon-right" && icon}
      </div>
    </label>
  );
}
