import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={!onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
