// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIu8izN5As1hAlhYR72DoCtotK4RZStdg",
  authDomain: "fredans-backend-2344232334.firebaseapp.com",
  projectId: "fredans-backend-2344232334",
  storageBucket: "fredans-backend-2344232334.firebasestorage.app",
  messagingSenderId: "113721162738",
  appId: "1:113721162738:web:f71a8125ed1c60b211896b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
