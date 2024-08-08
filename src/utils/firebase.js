// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMUBEIUnLUs3GgwrmvR-NCljs_Yh0Apkg",
  authDomain: "netflixgpt-e22b4.firebaseapp.com",
  projectId: "netflixgpt-e22b4",
  storageBucket: "netflixgpt-e22b4.appspot.com",
  messagingSenderId: "92963292960",
  appId: "1:92963292960:web:670a4c873f64c148b9b945",
  measurementId: "G-2RNMQR56X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();