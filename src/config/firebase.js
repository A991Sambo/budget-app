// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';



import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBnBhUI_oEO_jrYLpCIoej3FtyGf1eGZa4",
  authDomain: "budget-app-ceb77.firebaseapp.com",
  projectId: "budget-app-ceb77",
  storageBucket: "budget-app-ceb77.appspot.com",
  messagingSenderId: "39875310589",
  appId: "1:39875310589:web:15d8de3702931d0f931f94",
  measurementId: "G-MN159GY0ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
const db = getFirestore(app)
const analytics = getAnalytics(app);



export {auth, db} ;