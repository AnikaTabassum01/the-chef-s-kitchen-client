// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR0hZpSB0GzLQW1ifeiUCwYWo9cSUbo2M",
  authDomain: "the-chef-s-kitchen.firebaseapp.com",
  projectId: "the-chef-s-kitchen",
  storageBucket: "the-chef-s-kitchen.appspot.com",
  messagingSenderId: "603960672900",
  appId: "1:603960672900:web:bc77554103fe9ab2f938d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
