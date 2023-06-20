import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SignInScreen from './src/screens/Auth/SignIn/SignIn';
import SignUpScreen from './src/screens/Auth/SignUp/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {/* <Stack.Screen name="ログイン" component={SignInScreen} /> */}
        <Stack.Screen name="会員登録" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
