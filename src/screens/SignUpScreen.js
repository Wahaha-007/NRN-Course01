// เป็นหน้า SignUp ง่ายๆ ยังไม่มี input validation (เดี๋ยวว่าจะสั่งให้ทำเพิ่ม)

import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signUpWithEmail } from '../services/authService';

export default function SignUpScreen({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSignUp = async () => {
		try {
			await signUpWithEmail(email, password);
			navigation.replace('Welcome'); // หมายถึงถ้า Sighup สำเร็จให้เอาหน้า Welcome มา replace หน้านี้
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<View style={{ padding: 16 }}>
			<Text>Sign Up</Text>

			{/* Email Input */}
			<TextInput
				placeholder="Email"
				value={email}  // Email state tied to value
				onChangeText={setEmail}  // Updates the email state when user types
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					marginTop: 5,
					marginBottom: 12,
					padding: 5,
					color: 'black'  // Ensures text is visible on black theme
				}}
				placeholderTextColor="gray"  // Placeholder color for black theme
			/>

			{/* Password Input */}
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					marginBottom: 12,
					padding: 5,
					color: 'black'  // Ensures text is visible
				}}
				placeholderTextColor="gray"  // Placeholder color for black theme
			/>
			{error ? <Text>{error}</Text> : null}
			<Button title="Sign Up" onPress={handleSignUp} />
			<Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} />
		</View>
	);
}
