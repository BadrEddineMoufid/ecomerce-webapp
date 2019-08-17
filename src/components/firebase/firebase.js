import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCWaTrnxs3TzRZ-x915ozP9csCzQ5hMscY",
    authDomain: "ecomerce-backend-32692.firebaseapp.com",
    databaseURL: "https://ecomerce-backend-32692.firebaseio.com",
    projectId: "ecomerce-backend-32692",
    storageBucket: "",
    messagingSenderId: "1036696672227",
    appId: "1:1036696672227:web:a32e7de7c40b7701"
};

export const createUserProfileDoc = async (userAuth, data) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })
        }catch(error){
            console.log(`error creating user \n\n ${error.message}`);
        }  
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const  signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
