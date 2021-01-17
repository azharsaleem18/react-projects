import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBOVt5XRaTeqbGJkJZO0xddXUam_npqe20",
    authDomain: "instagram-app-91255.firebaseapp.com",
    projectId: "instagram-app-91255",
    storageBucket: "instagram-app-91255.appspot.com",
    messagingSenderId: "198505527856",
    appId: "1:198505527856:web:1b5bc77888fea957960bf5"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage }