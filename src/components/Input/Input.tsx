import React from 'react';
import { TextInput } from 'react-native-paper';

type InputProps = {
  label: string;
  value: string;
  style: any;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  mode?: "flat" | "outlined";
  keyboardType?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";
  textContentType?: "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password";
  isRequired?: boolean;
};

const Input: React.FC<InputProps> = ({ label, style, value, onChangeText, placeholder, secureTextEntry, mode, keyboardType, textContentType, isRequired }) => {
  return (
    <TextInput
      label={isRequired ? `${label}(必須)` : label}
      style={style}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      mode={mode}
      keyboardType={keyboardType}
      textContentType={textContentType}
    />
  );
};

export default Input;
