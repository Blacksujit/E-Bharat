// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ7iQznCAGuGlxSYbyDB6aY2Uwf0JL6Wo",
  authDomain: "e-commerce-cf812.firebaseapp.com",
  projectId: "e-commerce-cf812",
  storageBucket: "e-commerce-cf812.appspot.com",
  messagingSenderId: "364817688807",
  appId: "1:364817688807:web:56697b784f86979e365a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) ;
const fireDB = getFirestore(app);

const auth = getAuth(app)


export {auth , fireDB};

export default app;