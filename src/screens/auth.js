import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase configuration
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up function
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user);
    } catch (error) {
        console.error("Error signing up:", error.message);
    }
};

// Log In function
export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("\n\nUser logged in:", userCredential.user);
    } catch (error) {
        console.error("Error logging in:", error.message);
    }
};
