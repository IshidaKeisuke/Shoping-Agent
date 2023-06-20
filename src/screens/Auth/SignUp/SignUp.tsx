import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HelperText } from 'react-native-paper';
import { SignUp } from '../../../services/AuthService';
import { ScreenProps } from '../../../types/interface'
import styles from './Styles';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const SignUpScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      console.log(email)
      console.log(password)
      await SignUp(email, password);
      setError('');
    } catch (err) {
      const error = err as Error;
      console.log(error)
      setError(error.message);
    }
  };

  const isValidEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }

  const isFormValid = isValidEmail() && password.length >= 8;

  return (
    <View style={styles.container}>
      <Input
        label="メールアドレス"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        textContentType="emailAddress"
        isRequired={true}
      />
      <Input
        label="パスワード"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry={true}
        isRequired={true}
      />
      {!isValidEmail() && email !== '' && 
        <HelperText type="error" style={{ fontSize: 20 }}>
          メールアドレス形式にしてください
        </HelperText>
      }
      {password.length < 8 && password !== '' &&
        <HelperText type="error" style={{ fontSize: 20 }}>
          パスワードは最低8文字必要です
        </HelperText>
      }
      <Button
        title='仮登録'
        onPress={isFormValid ? handleSignUp : undefined}
        buttonStyle={isFormValid ? styles.button : styles.buttonDisabled}
        textStyle={styles.buttonText}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      <TouchableOpacity onPress={() => navigation.navigate('ログイン')} style={styles.signIn}> 
        <Text style={styles.signInText}>すでに会員登録済みの方はこちら</Text> 
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;