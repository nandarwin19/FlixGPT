// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBp0PqrPUmddMZxXxiJLzAITUGtm8w6ao",
  authDomain: "netflixgpt-a9cd9.firebaseapp.com",
  projectId: "netflixgpt-a9cd9",
  storageBucket: "netflixgpt-a9cd9.appspot.com",
  messagingSenderId: "580942207200",
  appId: "1:580942207200:web:78eab3d98a7d0b316b9885",
  measurementId: "G-GXSVH7C19J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
