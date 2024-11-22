// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDFmXSF19hgHW4llOq6026cIgKqrJPT1gE",
  authDomain: "driverconnect-300ba.firebaseapp.com",
  projectId: "driverconnect-300ba",
  storageBucket: "driverconnect-300ba.firebasestorage.app",
  messagingSenderId: "395141013910",
  appId: "1:395141013910:ios:2aff2410c0174631ad7db7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
