import classNames from "classnames";
import React from "react";
import './style.scss'

export default function Input({
  label,
  icon,
  size = "default",
  pos = "default",
  ...inputProps
}) {
  return (
    <form action="">
      <div className={classNames(`input size-${size} pos-${pos}`)}>
        <label htmlFor="">{label}</label>
        {pos === "icon-left" && icon}
        <input {...inputProps} />
        {pos === "icon-right" && icon}
      </div>
    </form>
  );
}
