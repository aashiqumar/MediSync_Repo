import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAxE7TGRHGS3bxEUa0D1LbsgmWE4PIIpUk",
    authDomain: "medisync-app.firebaseapp.com",
    databaseURL: "https://medisync-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "medisync-app",
    storageBucket: "medisync-app.appspot.com",
    messagingSenderId: "21307039267",
    appId: "1:21307039267:web:c8460beb0e9c5fddd5db96",
    measurementId: "G-JVJ6HZS6D9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export{ db, auth }




