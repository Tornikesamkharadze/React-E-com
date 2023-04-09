import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
   
  };
  return (
    <React.Fragment>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </React.Fragment>
  );
};

export default SignIn;
