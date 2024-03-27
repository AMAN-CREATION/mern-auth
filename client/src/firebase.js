// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5d8c3.firebaseapp.com",
  projectId: "mern-auth-5d8c3",
  storageBucket: "mern-auth-5d8c3.appspot.com",
  messagingSenderId: "296480313941",
  appId: "1:296480313941:web:a54c2326145e2268723adc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
