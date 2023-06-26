import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, Hub } from 'aws-amplify';
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
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
        default:
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => console.log('Not signed in'));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "HomeScreen" : "SignIn"}>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={screenOptions('会員登録')} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={screenOptions('ログイン')} />
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} options={screenOptions('コード登録')} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={screenOptions('ホーム')} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
