// UserContext.js
import { auth } from '../services/firebaseConfig';
import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

// Create the context
export const UserContext = createContext(null);

// Provide the context
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true); // Track loading state

	useEffect(() => {
		// Listen to auth state changes
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false); // Set loading to false once we have the user object
		});

		return () => unsubscribe(); // Clean up the subscription on unmount
	}, []);

	return (
		<UserContext.Provider value={{ user, loading }}>
			{children}
		</UserContext.Provider>
	);
};
