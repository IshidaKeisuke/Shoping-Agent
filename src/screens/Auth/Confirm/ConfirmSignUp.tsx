import React, { useState } from 'react';
import { View } from 'react-native';
import { HelperText } from 'react-native-paper';
import { ConfirmSignUp } from '../../../services/AuthService';
import { ScreenProps } from '../../../types/interface'
import styles from './Styles';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const ConfirmSignUpScreen: React.FC<ScreenProps<'ConfirmSignUp'>> = ({ navigation, route }) => {
  const { email } = route.params;
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleConfirmSignUp = async () => {
    try {
      await ConfirmSignUp(email, code);
      setError('');
      navigation.navigate('HomeScreen');
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="確認コード"
        value={code}
        onChangeText={setCode}
        style={styles.input}
        mode="outlined"
        isRequired={true}
      />
      <Button
        title='登録を完了する'
        onPress={handleConfirmSignUp}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </View>
  );
};

export default ConfirmSignUpScreen;
