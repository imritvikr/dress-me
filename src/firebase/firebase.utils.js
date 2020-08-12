import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCa8g_yZhqaqMg34RCjgz9BNuxwCw43LLw",
    authDomain: "dress-me-db.firebaseapp.com",
    databaseURL: "https://dress-me-db.firebaseio.com",
    projectId: "dress-me-db",
    storageBucket: "dress-me-db.appspot.com",
    messagingSenderId: "327371667389",
    appId: "1:327371667389:web:2397ecd19748dc85f684d4",
    measurementId: "G-VZ0H50GE9E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;