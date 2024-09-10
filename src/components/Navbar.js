// ส่วนที่ใช้แสดงแถบระบุชื่อ User ที่มุมบนขวา

import React from 'react';
import { View, Text } from 'react-native';

export default function Navbar({ user }) {
	return (
		<View style={{ alignSelf: 'flex-end', padding: 8 }}>
			<Text>{user?.email}</Text>
		</View>
	);
}
