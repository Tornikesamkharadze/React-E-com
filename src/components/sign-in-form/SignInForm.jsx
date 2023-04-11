import React, { useEffect, useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.style.scss";
import ButtonComponent from "../button/ButtonComponent";
import { useUserContext } from "../../contexts/userContext";

const initialValue = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialValue);
  const { email, password } = formFields;
  const [formError, setFormError] = useState("");
  const { setCurrentUser } = useUserContext();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      setFormFields(initialValue);
      setFormError("");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setFormError("INCORECT PASSWORD");
          break;
        case "auth/user-not-found":
          setFormError("Wrong Email");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          onChange={onChangeHandler}
          name="email"
          value={email}
          type="email"
          required
        />

        <FormInput
          label="Password"
          onChange={onChangeHandler}
          name="password"
          value={password}
          type="password"
          required
        />
        {formError && (
          <p style={{ color: "red", textAlign: "center" }}>{formError}</p>
        )}
        <div className="buttons-container">
          <ButtonComponent type="submit">Sign in</ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={signInWithGoogle}
            buttonType={"google"}
          >
            Google sign in
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
