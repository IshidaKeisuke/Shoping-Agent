import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  ConfirmSignUp: { email: string };
  HomeScreen: undefined;
};

type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
export type { ScreenProps, RootStackParamList };
