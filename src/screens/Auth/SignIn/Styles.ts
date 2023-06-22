import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:10,
  },
  input: {
    marginVertical: 25,
    fontSize: 20,
    height:75,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25, 
  },
  signUp: {
    marginTop: 15,
    alignItems: 'center',
  },
  signUpText: {
    color: '#2196F3',
    textDecorationLine: 'underline',
    fontSize: 23.5,
  },
});

export default styles
