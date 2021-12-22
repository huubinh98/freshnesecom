import classNames from "classnames";
import React from "react";

export default function Input({
  label,
  icon,
  size = "default",
  pos = "default",
  ...inputProps
}) {
  return (
    <form action="">
      <label htmlFor="">{label}</label>
      <div className={classNames(`input size-${size} pos-${pos}`)}>
        {pos === "icon-left" && icon}
        <input {...inputProps} />
        {pos === "icon-right" && icon}
      </div>
    </form>
  );
}
