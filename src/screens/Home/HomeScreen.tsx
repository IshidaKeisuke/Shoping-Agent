import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons' // replace faMugSaucer with faUser
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import styles from './Styles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchUser = async () => {
        setIsLoading(true);
        try {
          const userInfo = await Auth.currentAuthenticatedUser();
          setUser(userInfo);
        } catch (error) {
          console.error('Failed to fetch user info', error);
          setUser(null);
        } finally {
          setIsLoading(false);
        }
      };
      fetchUser();
    }, [])
  );

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>UberEats</Text>
        <View style={styles.container}>
        <FontAwesomeIcon icon={faUser} />
       </View>
      </View>
      <View style={styles.content}>
        {user ? (
          <>
            <Text style={styles.welcomeText}>Welcome, {user.getUsername()}</Text>
            <Button
              title="Sign out"
              onPress={handleSignOut}
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
            />
          </>
        ) : (
          <>
            <Text style={styles.signInText}>You are not signed in.</Text>
            <Button
              title="すでに会員の方はこちら"
              onPress={() => (navigation.navigate as any)('SignIn')}
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
            />
            <Button
              title="会員ではない方はこちら"
              onPress={() => (navigation.navigate as any)('SignUp')}
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
            />
          </>
        )}
      </View>
      <Footer />
    </View>
  );
}

export default HomeScreen;
