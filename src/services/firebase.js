// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1aevCkc4PN0x5k1HzbrafkvBtulZxn1c",
  authDomain: "orange-portfolio-squad1-f4f2f.firebaseapp.com",
  projectId: "orange-portfolio-squad1-f4f2f",
  storageBucket: "orange-portfolio-squad1-f4f2f.appspot.com",
  messagingSenderId: "413736311467",
  appId: "1:413736311467:web:9d6795e89a3b03e758b5ee"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { app, auth, googleProvider };