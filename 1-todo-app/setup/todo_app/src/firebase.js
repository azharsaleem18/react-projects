import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    // Add your firebase scripts here......

});
const db = firebaseApp.firestore();
export default db;