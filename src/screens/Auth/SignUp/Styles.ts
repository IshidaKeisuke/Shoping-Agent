import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 20,
    padding: 7,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 12,
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 20, // Added for space between "Sign up" button and "Already registered" link
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 25,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    padding: 15,
    borderRadius: 10,
  },
  signIn: {
    marginTop: 15,
    alignSelf: 'center',
  },
  signInText: {
    color: '#6200EE',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default styles;
