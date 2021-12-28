import React, { useState } from "react";

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

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
      errObj.firstname = "Vui lòng nhập firstname";
    }

    if (!form.lastname.trim()) {
      errObj.lastname = "Vui lòng nhập lastname";
    }

    if (!form.email) {
      errObj.email = "Vui lòng nhập email";
    } else if (!regexEmail.test(form.email)) {
      errObj.email = "Vui lòng nhập đúng định dạng";
    }

    if (!form.phone) {
      errObj.phone = "Vui lòng nhập số điện thoại";
    } else if (!regexPhone.test(form.phone)) {
      errObj.phone = "Trường này phải là số điện thoại";
    }

    if (!form.address) {
      errObj.address = "Vui lòng nhập địa chỉ";
    }

    if (!form.city) {
      errObj.city = "Vui lòng nhập thành phố";
    }

    if (!form.country) {
      errObj.country = "Vui lòng chọn Quốc gia";
    }

    if (!form.zip) {
      errObj.zip = "Vui lòng nhập mã code";
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
  return {
    handleSubmit,
    register,
  };
}
