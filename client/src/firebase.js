// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7239d.firebaseapp.com",
  projectId: "mern-blog-7239d",
  storageBucket: "mern-blog-7239d.appspot.com",
  messagingSenderId: "971972789353",
  appId: "1:971972789353:web:3839e5c7b915879a018ef8",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);