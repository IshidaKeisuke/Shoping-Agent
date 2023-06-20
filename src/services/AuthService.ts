import { Auth } from 'aws-amplify';

export const SignUp = async (email: string, password: string) => {
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
      autoSignIn: {
        enabled: true,
      }
    });
    console.log(user);
    return Promise.resolve(user);
  } catch (error) {
    console.log('error signing up:', error);
    return Promise.reject(error);
  }
}
