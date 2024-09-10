// เป็นหน้า SignUp ง่ายๆ ยังไม่มี input validation (เดี๋ยวว่าจะสั่งให้ทำเพิ่ม)

import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { signUpWithEmail } from '../services/authService';
import { useTheme } from 'react-native-paper';

export default function SignInScreen({ navigation }) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { colors } = useTheme(); // Access the theme's colors

	const handleSignUp = async () => {
		try {
			await signUpWithEmail(email, password);
			navigation.replace('Welcome'); // หมายถึงถ้า Sighup สำเร็จให้เอาหน้า Welcome มา replace หน้านี้
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<View style={styles.card}>
				<Text style={{ color: colors.text, fontSize: 24, marginBottom: 16, textAlign: 'center' }}>
					Create New User
				</Text>

				<TextInput
					label="Email"
					value={email}
					onChangeText={setEmail}
					style={{ marginBottom: 20 }}
					theme={{ colors: { text: colors.text, primary: colors.primary } }} // Apply theme to TextInput
				/>
				<TextInput
					label="Password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					style={{ marginBottom: 20 }}
					theme={{ colors: { text: colors.text, primary: colors.primary } }}
				/>
				{error ? <Text style={styles.errorText}>{error}</Text> : <Text style={styles.errorText}></Text>}

				<Button mode="contained" buttonColor="#555555" onPress={handleSignUp}>
					{/*buttonColor="rgb(169, 169, 169)" // Dark grey in RGB*/}
					Create
				</Button>
				<Button mode="contained" onPress={() => navigation.navigate('SignIn')} style={{ marginTop: 8 }}>
					Back to Sign In
				</Button>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center', // Center vertically
		backgroundColor: '#000000',
	},
	card: {
		backgroundColor: '#1f1f1f', // Card background
		borderRadius: 10, // Rounded corners
		padding: 20, // Space inside the card
		margin: 20, // Margin around the card
		alignSelf: 'center', // Center horizontally
		shadowColor: '#000', // Shadow color
		shadowOffset: { width: 0, height: 2 }, // Shadow position
		shadowOpacity: 0.25, // Shadow opacity
		shadowRadius: 3.84, // Shadow blur
		elevation: 5, // For Android shadow
		width: '90%', // Card width
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 12,
		padding: 5,
		color: 'white', // Ensures text is visible on dark background
	},
	title: {
		fontSize: 24,
		color: 'white',
		textAlign: 'center',
		marginBottom: 20,
	},
	button: {
		marginBottom: 10,
	},
	errorText: {
		color: 'red',
		textAlign: 'center',
		marginBottom: 10,
	},
});
