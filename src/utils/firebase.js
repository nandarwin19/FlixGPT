// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//

// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBBp0PqrPUmddMZxXxiJLzAITUGtm8w6ao",
//   authDomain: "netflixgpt-a9cd9.firebaseapp.com",
//   projectId: "netflixgpt-a9cd9",
//   storageBucket: "netflixgpt-a9cd9.appspot.com",
//   messagingSenderId: "580942207200",
//   appId: "1:580942207200:web:78eab3d98a7d0b316b9885",
//   measurementId: "G-GXSVH7C19J",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDxDqdjetp1E2zLLBVBcfwLn7DeFav7Xg",
  authDomain: "netflixx-72015.firebaseapp.com",
  projectId: "netflixx-72015",
  storageBucket: "netflixx-72015.appspot.com",
  messagingSenderId: "32725600562",
  appId: "1:32725600562:web:6f151790b5ae83713eef2b",
  measurementId: "G-87EQXGHGV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
