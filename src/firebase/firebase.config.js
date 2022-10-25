// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkO04bO5LPBRNAhIE4ZhVsz-hh1s8hp6s",
  authDomain: "pie-academy-auth.firebaseapp.com",
  projectId: "pie-academy-auth",
  storageBucket: "pie-academy-auth.appspot.com",
  messagingSenderId: "650743236038",
  appId: "1:650743236038:web:bbb7ff34f36e22be6f5ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;