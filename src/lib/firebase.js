// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../../keys";
// import { apiKey } from "./keys"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "blog-apps-236ca.firebaseapp.com",
  projectId: "blog-apps-236ca",
  storageBucket: "blog-apps-236ca.appspot.com",
  messagingSenderId: "955872641223",
  appId: "1:955872641223:web:f0502e7f914dcce4ca3ee2",
  measurementId: "G-XP7FGMN4LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)