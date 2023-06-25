import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/Auth/SignUp/SignUpScreen';
import ConfirmSignUpScreen from './src/screens/Auth/Confirm/ConfirmSignUp';
import HomeScreen from './src/screens/Home/HomeScreen';
import SignInScreen from './src/screens/Auth/SignIn/SignInScreen';
import { RootStackParamList } from './src/types/interface';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = (title: string) => ({
  headerTitle: title,
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="SignUp" component={SignUpScreen} options={screenOptions('会員登録')} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={screenOptions('ログイン')} />
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} options={screenOptions('コード登録')} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={screenOptions('ホーム')} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}