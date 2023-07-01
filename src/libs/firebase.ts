import { initializeApp } from "firebase/app"; 
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_APIKEY, // process.env.VAR_NAME
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APPID,
};


const firebaseApp = initializeApp(firebaseConfig); 
export const storage = getStorage(firebaseApp); 