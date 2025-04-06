// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyADfDqZjaHkKb0Ur8pzhHulvkj7dEWR5ck",
   authDomain: "react-dragon-news-auth-fd823.firebaseapp.com",
   projectId: "react-dragon-news-auth-fd823",
   storageBucket: "react-dragon-news-auth-fd823.firebasestorage.app",
   messagingSenderId: "12162031664",
   appId: "1:12162031664:web:c6a44e854c6349114d4df5",
   measurementId: "G-0C3W92R0NC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
