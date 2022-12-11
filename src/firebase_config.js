// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGe9NlHuuEVQknwCwjY9gAffhhumk3ksU",
  authDomain: "trac-2d8f8.firebaseapp.com",
  projectId: "trac-2d8f8",
  storageBucket: "trac-2d8f8.appspot.com",
  messagingSenderId: "749664498101",
  appId: "1:749664498101:web:0c90f6d20a4b012afc69fc",
  measurementId: "G-0F9SRDQQKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
