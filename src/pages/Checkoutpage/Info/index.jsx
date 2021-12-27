import React from "react";
import Input from "../../../components/Input";

import "./style.scss";

export default function Info() {
  return (
    <div className="checkout__info">
      <h2 className="heading">Billing info</h2>

      <div className="checkout-step">
        <p >Please enter your billing info</p>
        <p >Step 1 of 5</p>
      </div>

      <form>
        <Input label="First name" placeholder="First name" />
        <Input label="Last name" placeholder="Last name" />
        <Input label="Email address" placeholder="Email address" />
        <Input label="Phone number" placeholder="Phone number" />
        <Input label="Address" placeholder="Address" />
        <Input label="Town / City" placeholder="Town or City" />
        <Input
          label="State / Country"
          placeholder="Choose a state or Country"
        />
        <Input label="ZIP/Postal code" placeholder="Postal code or ZIP" />
        <Input
          size="small"
          type="checkbox"
          text="Ship to a different address?"
          width
        />
      </form>
    </div>
  );
}
