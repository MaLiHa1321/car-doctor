// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBICVnLdauPozP6NhLzqRKi6OCHcUgr8U",
  authDomain: "cars-doctors-client.firebaseapp.com",
  projectId: "cars-doctors-client",
  storageBucket: "cars-doctors-client.appspot.com",
  messagingSenderId: "945785140160",
  appId: "1:945785140160:web:4c53b066f78dd123b44e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;