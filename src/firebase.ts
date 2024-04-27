import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "todo-boost-4185d.firebaseapp.com",
  projectId: "todo-boost-4185d",
  storageBucket: "todo-boost-4185d.appspot.com",
  messagingSenderId: "793744181314",
  appId: "1:793744181314:web:fb09288153413520ec45db",
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
