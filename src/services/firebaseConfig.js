// น่าจะแค่ทำในส่วนที่ต่อ Firebase เฉยๆ

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY, MESSAGING_SENDER_ID, APP_ID } from '@env';

const firebaseConfig = {
	apiKey: `${API_KEY}`,
	authDomain: "react-native-aabbcc.firebaseapp.com",
	projectId: "react-native-aabbcc",
	storageBucket: "react-native-aabbcc.appspot.com",
	messagingSenderId: `${MESSAGING_SENDER_ID}`,
	appId: `${APP_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestore = getFirestore(app);

// Initialize Auth
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
}); // พอต่อได้แล้ว นี่แหละ เป็น Object ที่เราต้องการนำไปใช้