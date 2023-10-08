import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAE_Oj23aSOJu2O69A6cKbdQjn_OZvrBZg",
  authDomain: "bara-portfolio-c5c98.firebaseapp.com",
  projectId: "bara-portfolio-c5c98",
  storageBucket: "bara-portfolio-c5c98.appspot.com",
  messagingSenderId: "29281934644",
  appId: "1:29281934644:web:fbb48da93fb92358c99961",
  measurementId: "G-9DFGVFYDRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};