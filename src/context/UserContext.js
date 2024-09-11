// UserContext.js
import { auth } from '../services/firebaseConfig';
import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../services/firebaseConfig'; // Firestore instance

// Create the context
export const UserContext = createContext(null);

// Provide the context
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [urole, setRole] = useState(null);
	const [loading, setLoading] = useState(true); // Track loading state

	useEffect(() => {
		// Listen to auth state changes
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			setLoading(true);

			setUser(currentUser);
			if (currentUser) {
				const userDoc = doc(firestore, 'users', currentUser?.email);
				const userSnapshot = await getDoc(userDoc);

				setRole(userSnapshot.exists() ? userSnapshot.data().role : 'guest');
			} else {
				setRole(null);
			}
			setLoading(false); // Set loading to false once we have the user object
		});

		return () => unsubscribe(); // Clean up the subscription on unmount
	}, []);

	const resetLoading = () => {
		setLoading(true);
	};

	return (
		<UserContext.Provider value={{ user, loading, urole, resetLoading }}>
			{children}
		</UserContext.Provider>
	);
};