import React, { useEffect, useState } from "react";

const initialValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const getLocalStorage = () => {
  let getValuesFromLocalStorage = localStorage.getItem("formValues");
  if (!getValuesFromLocalStorage) {
    return initialValue;
  }
  return JSON.parse(getValuesFromLocalStorage);
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(getLocalStorage());
  const { displayName, email, password, confirmPassword } = formFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formFields));
  }, [formFields]);

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Name</label>
        <input
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
          type="text"
          required
        />

        <label>Email</label>
        <input
          onChange={onChangeHandler}
          name="email"
          value={email}
          type="email"
          required
        />

        <label>Password</label>
        <input
          onChange={onChangeHandler}
          name="password"
          value={password}
          type="password"
          required
        />

        <label>Confirm Password</label>
        <input
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          required
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
