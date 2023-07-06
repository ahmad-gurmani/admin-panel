import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGooleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    // if i don't get userAuth then return noting
    if (!userAuth) return;

    const userDocRef = doc(db, "user", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // if user data not exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log("error cathcing the user", error.message);
        }
    }

    // if user data exist 
    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // if i don't get userAuth then return noting
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    // if i don't get userAuth then return noting
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}