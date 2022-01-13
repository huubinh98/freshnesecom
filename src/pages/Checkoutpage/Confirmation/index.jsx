import React, { forwardRef, useImperativeHandle, useState } from "react";
import Input from "../../../components/Input";
import "./style.scss";

const Confirmation = forwardRef((props, ref) => {
  const [policy1, setPolicy1] = useState(false);
  const [policy2, setPolicy2] = useState(false);
  const [errConfirm, seterrConfirm] = useState();

  useImperativeHandle(
    ref,
    () => {
      return {
        handleSubmit,
      };
    },
    [policy1, policy2]
  );

  const handleChange = (name) => (e) => {
    if (name === "policy1") {
      setPolicy1(e.target.checked);
    } else {
      setPolicy2(e.target.checked);
    }
  };

  const handleSubmit = () => {
    let err = {};
    if (!policy1 && !policy2) {
      err.confirm = "Please agree all the policy";
      // alert("Please agree all the policy");
    }
    seterrConfirm(err);
  };

  return (
    <div className="confirmation">
      <h2 className="heading">Confirmation</h2>

      <div className="checkout-step">
        <p>
          We are getting to the end. Just few clicks and your order si ready!
        </p>
        <p>Step 5 of 5</p>
      </div>

      <Input
        text="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
        width
        type="checkbox"
        onChange={handleChange("policy1")}
      />
      <Input
        text="I agree with our terms and conditions and privacy policy."
        width
        type="checkbox"
        onChange={handleChange("policy2")}
      />
      {errConfirm && <p className="error">{errConfirm?.confirm}</p>}
    </div>
  );
});

export default Confirmation;
