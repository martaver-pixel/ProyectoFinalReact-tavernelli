import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOLngDbcG8ftxuOqaXAd5q6Glvk8y7YEk",
  authDomain: "proyectofinal-d11de.firebaseapp.com",
  projectId: "proyectofinal-d11de",
  storageBucket: "proyectofinal-d11de.appspot.com",
  messagingSenderId: "1044487071035",
  appId: "1:1044487071035:web:fdcd798f95e9f4d2f6031e",
  measurementId: "G-DBJ5K0L7FP",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
