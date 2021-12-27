import classNames from "classnames";
import React from "react";
import "./style.scss";

export default function Input({
  label,
  button,
  icon,
  text,
  width,
  size = "default",
  position = "default",
  ...inputProps
}) {
  return (
    <label>
      <p className="label">{label}</p>
      <div
        className={classNames(`input size-${size} pos-${position}`, { width })}
      >
        {position === "icon-left" && icon}
        <input {...inputProps} />
        {width && <span>{text}</span>}
        {button ? button : ""}
        {position === "icon-right" && icon}
      </div>
    </label>
  );
}
