// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAxgmwQzMO8SxUcedFvd2tyBqkFn4LIbdc",
  authDomain: "fir-practice-93373.firebaseapp.com",
  projectId: "fir-practice-93373",
  storageBucket: "fir-practice-93373.appspot.com",
  messagingSenderId: "790642720124",
  appId: "1:790642720124:web:6d4ad9094b77367ffa78f9",
  measurementId: "G-HD5LKM9RGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)