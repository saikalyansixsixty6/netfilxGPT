// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMcn0KAn55RHKK4KZTSsNq6qmRP_qpIY4",
  authDomain: "netflixgpt-cd619.firebaseapp.com",
  projectId: "netflixgpt-cd619",
  storageBucket: "netflixgpt-cd619.appspot.com",
  messagingSenderId: "783505173341",
  appId: "1:783505173341:web:13a7c499dee7ac72a196b4",
  measurementId: "G-93WQ20QSES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);