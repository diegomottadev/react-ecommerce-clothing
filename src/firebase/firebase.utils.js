import firebase from 'firebase/app';
import  'firebase/firestore';
import  'firebase/auth';


const config = {
    apiKey: "AIzaSyCq__th5ywhgcYLagbAG6qihkrlSQhi8-0",
    authDomain: "ecommerce-clothing-9371d.firebaseapp.com",
    projectId: "ecommerce-clothing-9371d",
    storageBucket: "ecommerce-clothing-9371d.appspot.com",
    messagingSenderId: "851572248206",
    appId: "1:851572248206:web:f33cd248bdc0b8a24543df"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt':'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;