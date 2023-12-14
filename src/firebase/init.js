// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTzruuQgnPK8WbDK8yGTw3o0auq6DMzY4",
  authDomain: "mdk-project-6f0be.firebaseapp.com",
  projectId: "mdk-project-6f0be",
  storageBucket: "mdk-project-6f0be.appspot.com",
  messagingSenderId: "603751628890",
  appId: "1:603751628890:web:1de66c0d78c179a64c5863"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth }

const db = getFirestore()
export default db