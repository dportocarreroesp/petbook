import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyD3bwgtrbOpKycOJrQYqPnfFufljhoUwEU",
    authDomain: "petbook-2bc13.firebaseapp.com",
    databaseURL: "https://petbook-2bc13.firebaseio.com",
    projectId: "petbook-2bc13",
    storageBucket: "petbook-2bc13.appspot.com",
    messagingSenderId: "1002869522888",
    appId: "1:1002869522888:web:ea334f2cb3ab9cad1480fd",
    measurementId: "G-Y4DHCPGLE3"
  };

//userAuth es el objeto que nos devuelve firebase cuando logeamos, deslogeamos..
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = userRef.get();

    if(!(await snapShot).exists ){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error al crear usuario')
        }
    }

    return userRef;
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;