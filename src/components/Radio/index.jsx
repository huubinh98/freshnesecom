import React from "react";
import "./style.scss";

const Radio = ({
  label,
  price,
  condition,
  logo,
  onChange,
  isChecked,
  content,
}) => {
  return (
    <>
      <div className="radioComponent">
        <div className="left">
          <div className="radio-method">
            <input
              type="radio"
              id="radio"
              onChange={onChange}
              checked={isChecked}
            />
            <label htmlFor="radio">{label}</label>
          </div>
          <div className="price-method">
            <p>{price}</p>
            <p>{condition}</p>
          </div>
        </div>

        <div className="right">{logo}</div>
      </div>
      {isChecked ? <div className="payment-info">{content}</div> : ""}
    </>
  );
};

export default Radio;
