// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbXyh3aoNzsOLLxtdSDFNrb5_RGV2vf88",
  authDomain: "african-lens.firebaseapp.com",
  projectId: "african-lens",
  storageBucket: "african-lens.appspot.com",
  messagingSenderId: "302536590242",
  appId: "1:302536590242:web:93a9362a1c24b0a78c68fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);