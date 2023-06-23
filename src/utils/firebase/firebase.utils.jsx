import { initializeApp } from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, collection, doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";

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

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
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
            })
        } catch (error) {
            console.log("error cathcing the user", error.message);
        }
    }

    // if user data exist 
    return userDocRef;

}





// import { collection, addDoc } from "firebase/firestore";

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }


// try {
//     const docRef = await setDoc(collection(db, "users"), {
//         first: "",
//         last: "",
//         born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }



// export const signUpwithEmailAndPassword = signUpwithEmailAndPassword();


// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });



// Allow read/write access on all documents to any user signed in to the application
// service cloud.firestore {
//     match /databases/{database}/documents {
//       match /{document=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }