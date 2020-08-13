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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;