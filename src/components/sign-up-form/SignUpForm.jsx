import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import "./sign-up-form.style.scss";
import ButtonComponent from "../button/ButtonComponent";

const initialValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialErrors = {
  emailError: "",
  passwordError: "",
  confirmPasswordError: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialValue);
  const { displayName, email, password, confirmPassword } = formFields;
  const [formError, setFormError] = useState(initialErrors);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });
        setFormFields(initialValue);
        setFormError(initialErrors);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setFormError({
            ...formError,
            emailError: "this email is already in use",
            passwordError: "",
          });
        }
        console.log(error);
      }
    } else if (password !== confirmPassword) {
      setFormError({
        ...formError,
        emailError: "",
        passwordError: "The password does not match",
      });
    }
  };
  console.log(formError);
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="name"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
          type="text"
          required
        />
        <FormInput
          label="Email"
          onChange={onChangeHandler}
          name="email"
          value={email}
          type="email"
          required
        />
        {formError.emailError && (
          <p style={{ color: "red", textAlign: "center" }}>
            {formError.emailError}
          </p>
        )}
        <FormInput
          label="Password"
          onChange={onChangeHandler}
          name="password"
          value={password}
          type="password"
          required
        />
        {formError.passwordError && (
          <p style={{ color: "red", textAlign: "center" }}>
            {formError.passwordError}
          </p>
        )}
        <FormInput
          label="Confirm Password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          required
        />
        <ButtonComponent type="submit">Sign up</ButtonComponent>
      </form>
    </div>
  );
};

export default SignUpForm;
