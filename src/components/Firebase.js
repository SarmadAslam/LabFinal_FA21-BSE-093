import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"; 
import {getFirestore} from 'firebase/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDETYOA9ZfJqE6SK50Iw6geG0R0UVtY0po",
  authDomain: "fatest-c3e07.firebaseapp.com",
  projectId: "fatest-c3e07",
  storageBucket: "fatest-c3e07.firebasestorage.app",
  messagingSenderId: "296262385690",
  appId: "1:296262385690:web:30cbf1cffc5161e7e211a3",
  measurementId: "G-59G70NGD5J"
};

// Initialize Firebase
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// export const my_auth = getAuth(app);  
export const db = getFirestore(app);    