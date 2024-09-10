// เป็นหน้า SignIn ง่ายๆ ยังไม่มี input validation (เดี๋ยวว่าจะสั่งให้ทำเพิ่ม)

import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signInWithEmail } from '../services/authService';
import { UserContext } from '../context/UserContext'; // Adjust the path accordingly

export default function SignInScreen({ navigation }) {
	const { user } = useContext(UserContext);
	const uemail = user?.email || 'No email available'; // Handle cases where email might be undefined

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSignIn = async () => {
		try {
			await signInWithEmail(email, password);
			navigation.navigate('Welcome'); // หมายถึงถ้า Sighup สำเร็จให้เอาหน้า Welcome มา replace หน้านี้
		} catch (err) {
			console.log("Error at SignIn");
			setError(err.message);
		}
	};

	return (
		<View style={{ padding: 16 }}>
			<Text>Sign In {uemail}</Text>

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
			<Button title="Sign In" onPress={handleSignIn} style={{ marginBottom: 5 }} />
			<Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
		</View>
	);
}
