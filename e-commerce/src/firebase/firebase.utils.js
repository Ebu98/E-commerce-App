// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt05wshuroRVfafJIok1tBWAK7hADveCc",
  authDomain: "e-commerce-app-ccdb0.firebaseapp.com",
  projectId: "e-commerce-app-ccdb0",
  storageBucket: "e-commerce-app-ccdb0.appspot.com",
  messagingSenderId: "919917614589",
  appId: "1:919917614589:web:09c124b1c075aa49f1f594",
  measurementId: "G-RCBYZFJNYD",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
