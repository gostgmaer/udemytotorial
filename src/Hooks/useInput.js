import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [istouch, setIstouch] = useState(null);
  const isValid = validateValue(value);
  
  const hasError = !isValid && istouch;

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const inputBlur = (e) => {
    setIstouch(true);
  };
  const resetField = () => {
    setValue("");
    setIstouch(false);
  };
  return {
    value,
    resetField,
    istouch,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlur,
  };
};

export default useInput;
