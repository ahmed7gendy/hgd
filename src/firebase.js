import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2sikiw2_wYZ0jE5v62dj021Gu33b78eM",
  authDomain: "new-e-learning-edecs.firebaseapp.com",
  databaseURL: "https://new-e-learning-edecs-default-rtdb.firebaseio.com",
  projectId: "new-e-learning-edecs",
  storageBucket: "new-e-learning-edecs.appspot.com",
  messagingSenderId: "82033132236",
  appId: "1:82033132236:web:30aa4a6ef16e8251077869",
  measurementId: "G-CEZJRLPSW9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();
