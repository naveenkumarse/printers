// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWjrao7up3TpisQURMoiJZZ0rxSWy0ROQ",
  authDomain: "eroprints.firebaseapp.com",
  projectId: "eroprints",
  storageBucket: "eroprints.appspot.com",
  messagingSenderId: "663813302596",
  appId: "1:663813302596:web:b50b11d63a1bc24b9c0f11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);