import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { delay } from "../../../components/utils";
import useForm from "../../../hook/useForm";

import "./style.scss";

export default function Info() {
  const [isFetChing, setIsFetChing] = useState(false);
  const { handleSubmit, register } = useForm({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });

  const affterHandleSubmit = async (form) => {
    setIsFetChing(true);
    await delay(1000);
    setIsFetChing(false);
    console.log(form);
  };

  const data = [
    {
      id: 1,
      label: "First name",
      placeholder: "First name",
      name: "firstname",
    },
    {
      id: 2,
      label: "Last name",
      placeholder: "Last name",
      name: "lastname",
    },
    {
      id: 3,
      label: "Email address",
      placeholder: "Email address",
      name: "email",
    },
    {
      id: 4,
      label: "Phone number",
      placeholder: "Phone number",
      name: "phone",
    },
    {
      id: 4,
      label: "Address",
      placeholder: "Address",
      name: "address",
    },
    {
      id: 5,
      label: "Town / City",
      placeholder: "Town or City",
      name: "city",
    },
    {
      id: 6,
      label: "State / Country",
      placeholder: "Choose a state or Country",
      name: "country",
      typeInput: "select",
    },
    {
      id: 7,
      label: "ZIP/Postal code",
      placeholder: "Postal code or ZIP",
      name: "zip",
    },
  ];

  return (
    <div className="checkout__info">
      <h2 className="heading">Billing info</h2>
      <div className="checkout-step">
        <p>Please enter your billing info</p>
        <p>Step 1 of 5</p>
      </div>

      <form onSubmit={handleSubmit(affterHandleSubmit)}>
        {data.map((item, i) => {
          return (
            <Input
              type="type"
              key={i}
              size="large"
              label={item.label}
              placeholder={item.placeholder}
              {...register(item.name)}
              // onChange={handleChange(item.name)}
              // value={form[item.name]}
              // err={error[item.name]}
              typeInput={item?.typeInput}
            />
          );
        })}
      </form>
    </div>
  );
}
