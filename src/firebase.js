import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOrA4S1z9cSpixb_e8Ar6EfTnTfTu5GGw",
    authDomain: "mianmarket-4a028.firebaseapp.com",
    projectId: "mianmarket-4a028",
    storageBucket: "mianmarket-4a028.appspot.com",
    messagingSenderId: "788210273751",
    appId: "1:788210273751:web:c8b6e8664a490bd900cf92",
    measurementId: "G-MCEGR6JZBH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };