import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { emailRegex } from "../../Assets/Valudation/Validation";
import useInput from "../../Hooks/useInput";

const ValidationForm = () => {

  const {
    value: firstName,
    hasError: fnameHasError,
    valueChangeHandler: fnameChangeHandler,
    inputBlur: fnameBlur,
    isValid: firstNameisValid,
    resetField: fnameResetvalue,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastName,
    hasError: lnameHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlur: lnameBlur,
    isValid: lirstNameisValid,
    resetField: lnameResetvalue,
  } = useInput((value) => value.trim() !== "");
  const {
    value: newemail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlur: emailBlur,
    isValid: emailNameisValid,
    resetField: emailResetvalue,
  } = useInput((value) => emailRegex.test(value));

  const focus = useRef(null);
  useEffect(() => {
    focus?.current?.focus();
  }, []);
  let formIsValid = false;

  if (firstNameisValid && lirstNameisValid && emailNameisValid) {
    formIsValid = true;
  }

  const fnameInput = fnameHasError
    ? "form-control is-invalid "
    : "form-control is-valid";
  const lnameInput = lnameHasError
    ? "form-control is-invalid"
    : "form-control is-valid";
  const emailInput = emailHasError
    ? "form-control is-invalid"
    : "form-control is-valid";
  const submithandler = () => {
    const obj = {
      fname: firstName,
      lname: lastName,
      email: newemail,
    };
    console.log(obj);
    fnameResetvalue();
    lnameResetvalue();
    emailResetvalue();
  };
  return (
    <div className="ValidationForm gap-5 d-flex flex-column col-12">
      <form className="row col-6 m-auto g-3 needs-validation">
        <div className="col-md-6 position-relative">
          <input
            value={firstName}
            ref={focus}
            onChange={fnameChangeHandler}
            onBlur={fnameBlur}
            type="text"
            placeholder="First name"
            className={fnameInput}
            id="validationTooltip01"
            required
          />
          {fnameHasError && <div className="valid-tooltip">Looks good!</div>}
        </div>
        <div className="col-md-6  position-relative">
          <div className="input-group has-validation">
            <input
              type="text"
              value={lastName}
              onChange={lnameChangeHandler}
              onBlur={lnameBlur}
              placeholder="Last name"
              className={lnameInput}
              id="validationTooltip0"
              required
            />
            <div className="invalid-tooltip">Looks good!</div>
          </div>
        </div>
        <div className="col-md-12 position-relative">
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend">
              @
            </span>
            <input
              value={newemail}
              onChange={emailChangeHandler}
              type="email"
              onBlur={emailBlur}
              className={emailInput}
              id="validationTooltipUsername"
              placeholder="Email Address"
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
      </form>
      <div className="col-12">
        <button
          onClick={submithandler} 
          disabled={formIsValid}
          className="btn btn-primary"
          type="submit">
          Submit form
        </button>
      </div>
    </div>
  );
};

export default ValidationForm;
