import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAof2be4cy7Em1FsyHHQHWcyhF7YjzIp6E",
  authDomain: "react-ecom-12961.firebaseapp.com",
  projectId: "react-ecom-12961",
  storageBucket: "react-ecom-12961.appspot.com",
  messagingSenderId: "822707848565",
  appId: "1:822707848565:web:1e9affaf02aae73763bf3c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, googleProvider);
};

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(database, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    //თუ ბაზაში არარის იუზერი შექმნილი ვქმნით და ვაგზავნით
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createDate });
    } catch (error) {
      console.log("error creatubg the user", error.message);
    }
  }
  return userDocRef;
};
