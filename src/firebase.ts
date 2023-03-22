// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import env from 'react-dotenv'

const firebaseConfig = {
    apiKey: env.FIREBASE_API_KEY,
    authDomain: env.FIREBASE_AUTH_DOMAIN,
    projectId: env.FIREBASE_PROJECT_ID,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
    appId: env.FIREBASE_APP_ID,
    measurementId: env.FIREBASE_MEASUREMENT_ID,
    databaseURL: env.FIREBASE_DB_URL,
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
