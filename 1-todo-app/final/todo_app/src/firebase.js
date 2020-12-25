import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVWOuwaSe9VXX6mRmIE1-dJtXTlT4mYq0",
    authDomain: "todos-13b07.firebaseapp.com",
    projectId: "todos-13b07",
    storageBucket: "todos-13b07.appspot.com",
    messagingSenderId: "405928689371",
    appId: "1:405928689371:web:8fa55ffa74c632ffb2d6fe"
});

const db = firebaseApp.firestore();

export default db;