// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp-7BPRGlNLimkpKJFYtuJVTqRpajq0pE",
  authDomain: "expense-tracker-6de35.firebaseapp.com",
  projectId: "expense-tracker-6de35",
  storageBucket: "expense-tracker-6de35.appspot.com",
  messagingSenderId: "556271670879",
  appId: "1:556271670879:web:9644a245908ce99881adea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);