// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBasVcnLGZNuXfrFL1-AEgPf9IenrxTEr8",
  authDomain: "prepwise-dda5c.firebaseapp.com",
  projectId: "prepwise-dda5c",
  storageBucket: "prepwise-dda5c.firebasestorage.app",
  messagingSenderId: "963718108621",
  appId: "1:963718108621:web:e72916f477809f64522084",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
