import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBSmIFHyPM9iNr7yJXIZqcuw25dVZBJ_CM",
  authDomain: "video-29af2.firebaseapp.com",
  projectId: "video-29af2",
  storageBucket: "video-29af2.appspot.com",
  messagingSenderId: "761444452978",
  appId: "1:761444452978:web:d5f0f37b017d4c6f9390eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;