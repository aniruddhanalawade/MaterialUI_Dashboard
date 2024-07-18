// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxRwTD3wgGOrg-uBN46wI2AVTEXmsEflg",
  authDomain: "dashboard-34eb4.firebaseapp.com",
  projectId: "dashboard-34eb4",
  storageBucket: "dashboard-34eb4.appspot.com",
  messagingSenderId: "269218669048",
  appId: "1:269218669048:web:296fb3c2c9dbd4cc1df60d",
  measurementId: "G-1EY4VG8CQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);