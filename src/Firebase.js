// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsi1puuANzObuXkf3DWTGksMizo2Cbvug",
  authDomain: "ocpldrive.firebaseapp.com",
  projectId: "ocpldrive",
  storageBucket: "ocpldrive.appspot.com",
  messagingSenderId: "167197265747",
  appId: "1:167197265747:web:738db82ffdc1e479055ba6",
  measurementId: "G-P9BYNZWJ5M"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
