import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBglokADe8IEJd8vnVaJW3bRuBDMr7PBCg',
    authDomain: 'project-id.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'terminus-437515',
    storageBucket: 'gs://terminus-437515.appspot.com',
    messagingSenderId: 'sender-id',
    appId: '1:517790857391:android:9307a66f2f48cc97bd3c5a',
    measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(SecureStore),
});
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});
export const storage = getStorage(app);

export const storeAvatarUri = async (uri) => {
    try {
        await AsyncStorage.setItem('@avatar_uri', uri);
    } catch (e) {
        console.error('Error saving avatar URI:', e);
    }
};

export const getStoredAvatarUri = async () => {
    try {
        const uri = await AsyncStorage.getItem('@avatar_uri');
        return uri !== null ? uri : null;
    } catch (e) {
        console.error('Error retrieving avatar URI:', e);
        return null;
    }
};