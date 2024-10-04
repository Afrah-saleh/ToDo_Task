// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc, getDocs ,doc, updateDoc,deleteDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMwOTDbmD1aHzRD_uE9OwVdlZTJNrd52A",
  authDomain: "todotask-8c7e4.firebaseapp.com",
  projectId: "todotask-8c7e4",
  storageBucket: "todotask-8c7e4.appspot.com",
  messagingSenderId: "345285327238",
  appId: "1:345285327238:web:2c5f5a42e0262cbe851407",
  measurementId: "G-RGYTGX256L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {app, db, getFirestore,collection, addDoc, getDocs,doc, updateDoc,deleteDoc};