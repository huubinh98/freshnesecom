import classNames from "classnames";
import React from "react";
import "./style.scss";

export default function Input({
  typeInput = "text",
  size = "default",
  position = "default",
  clear,
  label,
  button,
  icon,
  text,
  width,
  err,
  ...inputProps
}) {
  return (
    <label>
      {label ? <p className="label">{label}</p> : ""}
      <div
        className={classNames(`input ${clear} size-${size} pos-${position}`, {
          width,
        })}
      >
        {position === "icon-left" && icon}
        {typeInput === "select" ? <select></select> : <input {...inputProps} />}
        {width && <span>{text}</span>}
        {button ? button : ""}
        {position === "icon-right" && icon}
      </div>
      {err && <p className="error">{err}</p>}
    </label>
  );
}
