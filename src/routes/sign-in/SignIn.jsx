import React, { useEffect } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <React.Fragment>
      <div>SignIn</div>
      <button onClick={logGooglePopupUser}>Sign in with Google</button>
      <SignUpForm />
    </React.Fragment>
  );
};

export default SignIn;
