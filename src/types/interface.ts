import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  SignUp: { email?: string };
  ConfirmSignUp: { email: string };
  // 他の画面名とそれぞれのパラメータもここに追加する
};

type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
export type { ScreenProps };
