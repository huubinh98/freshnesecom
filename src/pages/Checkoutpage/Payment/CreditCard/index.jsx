import React, { useState } from "react";
import Input from "../../../../components/Input";
import { delay } from "../../../../components/utils";
import useForm from "../../../../hook/useForm";
import "./style.scss";

const CreditCard = () => {
  const [isFetChing, setIsFetChing] = useState(false);
  const { register, handleSubmit } = useForm({
    cardNum: "",
    cardInfo: "",
    date: "",
    cvc: "",
  });
  const affterHandleSubmit = async (form) => {
    setIsFetChing(true);
    await delay(1000);
    setIsFetChing(false);
    console.log(form);
  };

  return (
    <div>
      <form action="">
        <Input
          label="Card number"
          placeholder="Card Number"
          {...register("Card number")}
        />
        <div className="card-info">
          <div className="left">
            <Input
              label="Card holder"
              placeholder="Card Holder"
              {...register("Card holder")}
            />
          </div>

          <div className="right">
            <Input
              label="Expiration date"
              placeholder="DD/MM/YY"
              {...register("Expiration date")}
            />
            <Input label="CVC" placeholder="CVC" {...register("CVC")} />
          </div>
        </div>
        <button onClick={handleSubmit(affterHandleSubmit)}>submit</button>
      </form>
    </div>
  );
};

export default CreditCard;
