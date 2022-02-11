// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
require("firebase/auth");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH_UHjdJNGt7Sbgz6sr76UZglS6M_GjWw",
  authDomain: "clone-43d9d.firebaseapp.com",
  projectId: "clone-43d9d",
  storageBucket: "clone-43d9d.appspot.com",
  messagingSenderId: "161484783716",
  appId: "1:161484783716:web:2e7f494992033ad0255f71",
  measurementId: "G-BC7T2Q5S0C",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export { db, auth, storage };
