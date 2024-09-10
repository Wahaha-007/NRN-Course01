// เป็นหน้า SignIn ง่ายๆ ยังไม่มี input validation (เดี๋ยวว่าจะสั่งให้ทำเพิ่ม)

import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper'; // Use react-native-paper components
import { signInWithEmail } from '../services/authService';
import { UserContext } from '../context/UserContext'; // Adjust the path accordingly
import { useTheme } from 'react-native-paper';

export default function SignInScreen({ navigation }) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { colors } = useTheme(); // Access the theme's colors

	const handleSignIn = async () => {
		try {
			await signInWithEmail(email, password);
			navigation.replace('Welcome'); // หมายถึงถ้า Sighup สำเร็จให้เอาหน้า Welcome มา replace หน้านี้
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', padding: 16, backgroundColor: colors.background }}>
			<Text style={{ color: colors.text, fontSize: 24, marginBottom: 16, textAlign: 'center' }}>
				Sign In
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



			{error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

			<Button mode="contained" buttonColor="#555555" onPress={handleSignIn}>
				{/*buttonColor="rgb(169, 169, 169)" // Dark grey in RGB*/}
				Sign In
			</Button>

			<Button mode="contained" onPress={() => navigation.navigate('SignUp')} style={{ marginTop: 8 }}>
				Create a new user
			</Button>
		</View>
	);
}
