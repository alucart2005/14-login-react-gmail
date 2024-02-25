// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgRP71u2otBGWFf0wo1g8jNhH7KTmA4eg",
  authDomain: "login-ba9b3.firebaseapp.com",
  projectId: "login-ba9b3",
  storageBucket: "login-ba9b3.appspot.com",
  messagingSenderId: "279561493695",
  appId: "1:279561493695:web:c56346aa78cd0120b23a0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)