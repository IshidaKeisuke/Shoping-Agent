import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E53E3E',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row', // アイコンを中央に配置するために追加
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // アイコンとテキストの間隔を調整するために追加
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  footer: {
    backgroundColor: '#F7FAFC',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLink: {
    color: '#718096',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  signInText: {
    fontSize: 16,
    marginBottom: 24,
  },
  icon: {
    color: 'white',
    fontSize: 30,
  },
});

export default styles;
