import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import styles from './Styles';


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        setUser(userInfo);
      } catch (error) {
        console.error('Failed to fetch user info', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  async function handleSignOut() {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      {user ? (
        <>
          <Text>Welcome, {user.getUsername()}</Text>
          <Button title="Sign out" onPress={handleSignOut} />
        </>
      ) : (
        <>
          <Text>You are not signed in.</Text>
          <Button
            title='すでに会員の方はこちら'
            onPress={() => (navigation.navigate as any)('SignIn')}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <Button
            title='会員ではない方はこちら'
            onPress={() => (navigation.navigate as any)('SignUp')}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
        </>
      )}
    </View>
  );
}

export default HomeScreen;
