// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWf1a4DozWBj-xrD1lkGEFbjtMEQRYlQE",
  authDomain: "netflixgpt-9e357.firebaseapp.com",
  projectId: "netflixgpt-9e357",
  storageBucket: "netflixgpt-9e357.firebasestorage.app",
  messagingSenderId: "936444299397",
  appId: "1:936444299397:web:47686aa1feb484549901ec",
  measurementId: "G-B83QS3VVYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();