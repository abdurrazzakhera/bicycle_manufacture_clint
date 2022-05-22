// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4860HWWln_jaa6zApHC0hjZmHaby6wHk",
  authDomain: "manufacture-site-12.firebaseapp.com",
  projectId: "manufacture-site-12",
  storageBucket: "manufacture-site-12.appspot.com",
  messagingSenderId: "807467739106",
  appId: "1:807467739106:web:37f1e42f2d3825e0f93bbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
