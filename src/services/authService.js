// อันนี้เป็นส่วนของการนำ Auth Object ไปใช้งาน โดยเอามาเตรียมไว้พร้อมใช้เป็น function
import { auth } from './firebaseConfig'; // Import the initialized auth object
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const signUpWithEmail = (email, password) => {
	console.log("Call signUpWithEmail");
	return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = (email, password) => {
	console.log("Call signInWithEmail");
	return signInWithEmailAndPassword(auth, email, password);
};

export const firebaseSignout = () => {
	return signOut(auth);
};

export const getCurrentUser = () => {
	return auth.currentUser;
};
