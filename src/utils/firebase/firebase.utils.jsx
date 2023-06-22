import { initializeApp } from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBV4r81Fey-joWnyrELp_TZxB0gzXZbjHQ",
    authDomain: "food-dashboard-db.firebaseapp.com",
    projectId: "food-dashboard-db",
    storageBucket: "food-dashboard-db.appspot.com",
    messagingSenderId: "658476446300",
    appId: "1:658476446300:web:49357cf3b74cd7d46dac99"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


// const db = getFirestore(firebaseApp);

// export const signUpwithEmailAndPassword = signUpwithEmailAndPassword();
