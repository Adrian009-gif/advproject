
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChtJoogVWH6eNPFb1Ed2ibuX3G6M_OfE8",
  authDomain: "fir-a-61.firebaseapp.com",
  projectId: "fir-a-61",
  storageBucket: "fir-a-61.appspot.com",
  messagingSenderId: "708631202887",
  appId: "1:708631202887:web:f770da1acee71edcdcf562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);