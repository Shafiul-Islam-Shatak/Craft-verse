// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASmmDB0FeXgkVWXGVl--Bzds_D3Arq3xc",
  authDomain: "craft-verse.firebaseapp.com",
  projectId: "craft-verse",
  storageBucket: "craft-verse.appspot.com",
  messagingSenderId: "800631643712",
  appId: "1:800631643712:web:1b28a0db6dc8a117f809a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;