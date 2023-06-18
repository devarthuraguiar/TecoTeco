// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNAEDMsRvycxoyiU40pZsD9JCvt7mQbhQ",
  authDomain: "tecoteco-49bc8.firebaseapp.com",
  projectId: "tecoteco-49bc8",
  storageBucket: "tecoteco-49bc8.appspot.com",
  messagingSenderId: "799216877839",
  appId: "1:799216877839:web:0fcd3810aed8f634ff7e7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;