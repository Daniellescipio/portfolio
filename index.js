// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfOiYvucOYTPCisejE7pO28Fe-BWtxh38",
  authDomain: "portfolio-87bcc.firebaseapp.com",
  projectId: "portfolio-87bcc",
  storageBucket: "portfolio-87bcc.appspot.com",
  messagingSenderId: "635355518230",
  appId: "1:635355518230:web:92f89577a3d4eaa6542c37",
  measurementId: "G-NKDRJ8C6BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);