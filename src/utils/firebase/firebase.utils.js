import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

export const database = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(database, collectionKey);
  const batch = writeBatch(database);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Done");
};

export const getCategoriesAndDocumets = async () => {
  const collectionRef = collection(database, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoriesMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(database, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    //თუ ბაზაში არარის იუზერი შექმნილი ვქმნით და ვაგზავნით
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creatubg the user", error.message);
    }
  }
  return userDocRef;
};

//

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

//

export const signOutUser = async () => await signOut(auth);

//

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
