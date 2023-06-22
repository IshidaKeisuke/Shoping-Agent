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

export const ConfirmSignUp = async (email: string, code: string) => {
  try {
    await Auth.confirmSignUp(email, code);
    console.log('User confirmed sign up');
  } catch (error) {
    console.log('error confirming sign up:', error);
    throw error;
  }
}

export const SignIn = async(email: string, password: string) => {
  try {
    const response = await Auth.signIn(email, password);
    return response.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

