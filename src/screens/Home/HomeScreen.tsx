import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Auth } from 'aws-amplify';
import { ScreenProps } from '../../types/interface';
import Loading from '../../components/Loading/Loading';

const HomeScreen: React.FC<ScreenProps<'Home'>> = ({ navigation }) => {
  const [user, setUser] = useState(null);
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
          <Text>Welcome, {user.username}</Text>
          <Button title="Sign out" onPress={handleSignOut} />
        </>
      ) : (
        <>
          <Text>You are not signed in.</Text>
          <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
          <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </>
      )}
    </View>
  );
}

export default HomeScreen;
