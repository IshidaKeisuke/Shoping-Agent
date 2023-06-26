import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/Loading/Loading';
import styles from './Styles';
import Button from '../../components/Button/Button';

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
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Welcome!" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome, {user ? user.getUsername() : 'Guest'}</Title>
          <Paragraph>This is your Home Screen.</Paragraph>
        </Card.Content>
      </Card>
      <Button
        title='すでに会員の方はこちら'
        onPress={() => (navigation.navigate as any)('SignIn')}
        buttonStyle={styles.button}
        // textStyle={styles.buttonText}
      />
      <Button
        title='会員ではない方はこちら'
        onPress={() => (navigation.navigate as any)('SignUp')}
        buttonStyle={styles.button}
        // textStyle={styles.buttonText}
      />

      {user && (
        <Button
          title="ログアウト"
          onPress={handleSignOut} 
          buttonStyle={styles.button}        />

      )}
    </View>
  );
}

export default HomeScreen;
