// น่าจะแค่ทำในส่วนที่ต่อ Firebase เฉยๆ

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY, MESSAGING_SENDER_ID, APP_ID } from '@env';

// Your web app's Firebase configuration
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

export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
}); // พอต่อได้แล้ว นี่แหละ เป็น Object ที่เราต้องการนำไปใช้