// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDzfDYkPjiVY22302wZ5m1ov88Ga96mdo",
  authDomain: "intervai-9318e.firebaseapp.com",
  projectId: "intervai-9318e",
  storageBucket: "intervai-9318e.firebasestorage.app",
  messagingSenderId: "1084073805744",
  appId: "1:1084073805744:web:482c5f4bf9ce15966c7875",
  measurementId: "G-MYFJHYQR52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
