import React, { useEffect, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setFormError({
            ...formError,
            emailError: "this email is already in use",
            passwordError: "The password matches",
          });
        }
      }
    } else if (password !== confirmPassword) {
      setFormError({
        ...formError,
        passwordError: "The password does not match",
      });
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
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
