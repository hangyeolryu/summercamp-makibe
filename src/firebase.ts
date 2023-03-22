// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
    FIREBASE_DB_URL,
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
    databaseURL: FIREBASE_DB_URL,
};


const initializeAppIfNecessary = () => {
try {
    return getApp();
} catch {
    return initializeApp(firebaseConfig);
}

}

const app = initializeAppIfNecessary();
export const db = getDatabase(app);
// const analytics = getAnalytics(app);
