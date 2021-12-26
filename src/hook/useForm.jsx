import React, { useState } from "react";

export default function useForm(initialValue, err) {
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState(err);
  return {
    form,
    error,
  };
}
