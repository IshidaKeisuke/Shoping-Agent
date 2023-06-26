import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

const Footer: React.FC = () => {
  const footerLinks = [
    { title: 'Categories', onPress: () => {} },
    { title: 'About', onPress: () => {} },
    { title: 'Contact', onPress: () => {} },
  ];

  return (
    <View style={styles.footer}>
      {footerLinks.map((link, index) => (
        <TouchableOpacity key={index} onPress={link.onPress}>
          <Text style={styles.footerLink}>{link.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Footer;
