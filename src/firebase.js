// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGL8X3a6E49E8bsTg4Csnb6xlxxyyPIKE",
  authDomain: "nussu-tech.firebaseapp.com",
  projectId: "nussu-tech",
  storageBucket: "nussu-tech.firebasestorage.app",
  messagingSenderId: "1099309055413",
  appId: "1:1099309055413:web:d2adc20124f748a1af2dfc",
  measurementId: "G-9X7G073GYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);