// ==== ส่วนหน้าหลัก ====
// $ npx expo start

// 1. Library พื้นฐาน
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { UserContext, UserProvider } from './src/context/UserContext';

// 2. ส่วนประกอบย่อย
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
// import { auth } from './src/services/firebaseConfig';
import { BlackTheme } from './src/styles/theme';

const Stack = createStackNavigator();

function AppNavigator() {

  const { user, loading } = useContext(UserContext);  // Get loading state from context

  // While loading, show a spinner or a blank screen
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName={user ? 'Welcome' : 'SignIn'}>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <PaperProvider theme={BlackTheme}>
        <NavigationContainer theme={BlackTheme}>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </UserProvider>
  );
}