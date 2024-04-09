// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkukmbCZAH3xc8SUG2qD-cLXCKH89CSoo",
  authDomain: "netflix-gpt-62160.firebaseapp.com",
  projectId: "netflix-gpt-62160",
  storageBucket: "netflix-gpt-62160.appspot.com",
  messagingSenderId: "549470670656",
  appId: "1:549470670656:web:eacfdbff7ef8b710b2b4a5",
  measurementId: "G-D0JDY4D1LC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
