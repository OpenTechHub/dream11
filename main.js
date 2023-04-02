// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore,collection, getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

const firebaseConfig={
    apiKey: "AIzaSyD7fcW9fECCvCnqxQEJk_KHM2sF2t3rucs",
    authDomain: "dream11database.firebaseapp.com",
    projectId: "dream11database",
    storageBucket: "dream11database.appspot.com",
    messagingSenderId: "363251093036",
    appId: "1:363251093036:web:7a58b5e5c46d416028cb89",
    measurementId: "G-VNKER69MN0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();


const matchesRef = collection(db, "matches");

getDocs(matchesRef).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
});
