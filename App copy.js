// ==== ส่วนหน้าหลัก ====
// $ npx expo start

// 1. Library พื้นฐาน
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './src/context/UserContext'; // Adjust the path accordingly

import { Provider as PaperProvider } from 'react-native-paper';

// 2. ส่วนประกอบย่อย
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
// import { auth } from './src/services/firebaseConfig';
import { BlackTheme } from './src/styles/theme';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserProvider>
      <PaperProvider theme={BlackTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            {user ? ( // Check ว่าตัวแปร User มีค่าไหม
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                initialParams={{ user }}
                options={{ headerShown: false }}
              />
            ) : (
              <>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </UserProvider>
  );
}