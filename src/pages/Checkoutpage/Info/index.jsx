import React, { forwardRef, useImperativeHandle, useState } from "react";
// import Button from "../../../components/Button";
import Input from "../../../components/Input";
// import { delay } from "../../../components/utils";
import useForm from "../../../hook/useForm";
import data from "../../../mocks";

import "./style.scss";

const Info = forwardRef((props, ref) => {
  // const [isFetChing, setIsFetChing] = useState(false);
  const { register, validate } = useForm({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });

  const { infocheckout } = data;

  useImperativeHandle(
    ref,
    () => {
      return { validate };
    },
    [validate]
  );

  // const affterHandleSubmit = async (form) => {
  //   setIsFetChing(true);
  //   await delay(1000);
  //   setIsFetChing(false);
  //   console.log(form);
  // };

  return (
    <div className="checkout__info">
      <h2 className="heading">Billing info</h2>
      <div className="checkout-step">
        <p>Please enter your billing info</p>
        <p>Step 1 of 5</p>
      </div>
      {/* onSubmit={handleSubmit(affterHandleSubmit)} */}
      <form>
        {infocheckout.map((item, i) => {
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
});

export default Info;
