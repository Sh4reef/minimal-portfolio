// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/database";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5fnHI-4IZ1dg3ewy8WXB8DBracNK0Bcw",
  authDomain: "minimal-portfolio-d4c70.firebaseapp.com",
  databaseURL:
    "https://minimal-portfolio-d4c70-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "minimal-portfolio-d4c70",
  storageBucket: "minimal-portfolio-d4c70.firebasestorage.app",
  messagingSenderId: "414602645751",
  appId: "1:414602645751:web:686a5db5463f831ccb03f2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(firebaseApp);
