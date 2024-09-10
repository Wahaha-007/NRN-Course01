// หน้า Welcome แบบ Passive ธรรมดา ไม่มีอะไรน่าตื่นเต้น

import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { firebaseSignout, getCurrentUser } from '../services/authService';
import { UserContext } from '../context/UserContext'; // Adjust the path accordingly

export default function WelcomeScreen({ navigation }) {
	const { user } = useContext(UserContext);
	const email = user?.email || 'No email available'; // Handle cases where email might be undefined

	// In a real app, role would come from the database or user profile.
	const role = "Manager"; // This could be dynamic based on user role

	const handleSignOut = async () => {
		try {
			await firebaseSignout();
			navigation.replace('SignIn');
		} catch (error) {
			console.error('Sign out failed:', error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.emailContainer}>
				<Text style={styles.emailText}>{email}</Text>
			</View>
			<Text style={styles.welcomeText}>Welcome, {role}!</Text>
			<Button title="Sign Out" onPress={handleSignOut} />
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		padding: 16,
		backgroundColor: '#000', // Black theme background
		flex: 1,
		justifyContent: 'center',
	},
	emailContainer: {
		alignSelf: 'flex-end',
		marginBottom: 16,
	},
	emailText: {
		color: '#fff', // Ensure text is visible on a black background
	},
	welcomeText: {
		fontSize: 24,
		color: '#fff', // Ensure text is visible on a black background
		marginBottom: 16,
	},
});
