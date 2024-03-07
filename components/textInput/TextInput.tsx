import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { StyleSheet } from 'react-native';

const TextInput = ({ placeholder }: { placeholder: string }) => (
  <RNTextInput
    placeholder={placeholder}
    style={styles.input}
  />
);

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
});
