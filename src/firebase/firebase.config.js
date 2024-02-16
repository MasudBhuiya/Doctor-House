// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeKwWVhHkCBJt6V3phOcUV0Uaiul3UAoI",
  authDomain: "doctor-house-343bb.firebaseapp.com",
  projectId: "doctor-house-343bb",
  storageBucket: "doctor-house-343bb.appspot.com",
  messagingSenderId: "690885966925",
  appId: "1:690885966925:web:f48b9432ab2beed1fcf004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;