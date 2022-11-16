// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw-J0eDHKB8MUjEl20u0uPtzlRfE_8TKA",
  authDomain: "ecommerce-413fa.firebaseapp.com",
  projectId: "ecommerce-413fa",
  storageBucket: "ecommerce-413fa.appspot.com",
  messagingSenderId: "446249907919",
  appId: "1:446249907919:web:1a44d2364fc357c19929ba",
  measurementId: "G-G4DD1XW2S6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
