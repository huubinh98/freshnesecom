import React, { useState } from "react";

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const regexZip = /^[1-9][0-9][0-9][0-9][0-9][0-9]?$|^100$/;

const regexCreditCard =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

const regexExpireDate = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

const regexCvc = /^[0-9]{3,4}$/;

export default function useForm(initialValue, err) {
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState({ err });

  const register = (name) => {
    return {
      onChange: handleChange(name),
      value: form[name],
      err: error[name],
    };
  };

  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.currentTarget.value });
  };

  const validate = () => {
    let errObj = {};
    if (!form.firstname.trim()) {
      errObj.firstname = "Please enter your Firstname";
    }

    if (!form.lastname.trim()) {
      errObj.lastname = "Please enter your Lastname";
    }

    if (!form.email) {
      errObj.email = "Please enter your email";
    } else if (!regexEmail.test(form.email)) {
      errObj.email = "Please enter your email as equired";
    }

    if (!form.phone) {
      errObj.phone = "Please enter your phone number";
    } else if (!regexPhone.test(form.phone)) {
      errObj.phone = "This field must be number";
    }

    if (!form.address) {
      errObj.address = "Please enter your address";
    }

    if (!form.city) {
      errObj.city = "Please enter your city";
    }

    if (!form.country) {
      errObj.country = "Please enter your nation";
    }

    if (!form.zip) {
      errObj.zip = "Please enter your ZIP Code";
    } else if (!regexZip.test(form.zip)) {
      errObj.zip = "This field must be number";
    }

    // if (!form.cardNumber) {
    //   errObj.cardNumber = "Please enter your card number";
    // } else if (!regexCreditCard.test(form.cardNumber)) {
    //   errObj.cardNumber = "Please enter valid card number";
    // }

    // if (!form.expireDate) {
    //   errObj.expireDate = "Please enter your expire date";
    // } else if (!regexExpireDate.test(form.expireDate)) {
    //   errObj.expireDate = "Please enter your ";
    // }

    // validate form payment

    if (!form.cardNum) {
      errObj.cardNum = "Please enter your card number";
    } else if (!regexCreditCard.test(form.cardNum)) {
      errObj.cardNum = "Please enter valid card number";
    }

    if (!form.cardInfo) {
      errObj.cardInfo = "Please enter your card number";
    }

    if (!form.date) {
      errObj.date = "Please enter your card number";
    } else if (!regexExpireDate.test(form.date)) {
      errObj.date = "Please enter valid card number";
    }

    if (!form.cvc) {
      errObj.cvc = "Please enter your card number";
    } else if (!regexCvc.test(form.cvc)) {
      errObj.cvc = "Please enter valid card number";
    }

    setError(errObj);
    return errObj;
  };

  const handleSubmit = (callbackFunc) => (e) => {
    e.preventDefault();
    const errObj = validate();
    if (Object.keys(errObj).length === 0) {
      callbackFunc(form);
    }
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [errOption, setErrOption] = useState();

  const validateRadio = () => {
    let errObj = {};
    if (!selectedOption) {
      errObj.catchErr = "Please choose an option";
    }
    setErrOption(errObj);
  };

  // const handleSubmitOption = (e) => {
  //   e.preventDefault();
  //   console.log(1);
  //   let errObj = {};
  //   // let errInfoObj = validate();
  //   if (!selectedOption) {
  //     errObj.catchErr = "Please choose an option";
  //   }

  //   // if (Object.keys(errInfoObj).length === 0) {
  //   //   callbackFunc(form);
  //   // }
  //   setErrOption(errObj);
  // };

  return {
    handleSubmit,
    register,
    selectedOption,
    setSelectedOption,
    // handleSubmitOption,
    errOption,
    validate,
    validateRadio,
  };
}
