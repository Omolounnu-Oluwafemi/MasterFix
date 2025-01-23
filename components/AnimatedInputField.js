import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Animated from 'react-native-reanimated';

const AnimatedInputField = ({ label, hint }) => {
    const [text, setText] = useState('');
     const [isFocused, setIsFocused] = useState(false);


 return (
    <FloatingLabelInput
      label={label}
      value={text}
      staticLabel
      hintTextColor="#000"
      hint={hint}
      containerStyles={styles.inputContainer}
      customLabelStyles={{
        ...styles.customLabel,
        backgroundColor: isFocused || text ? '#2F7FEF' : 'transparent', // Background for label
      }}
      labelStyles={styles.label}
      inputStyles={styles.input}
      onChangeText={setText}
      onFocus={() => setIsFocused(true)} // Set focus state to true
      onBlur={() => setIsFocused(false)} // Set focus state to false
    />
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        padding: 15,
        borderColor: '#000',
        borderRadius: 8,
    },
    customLabel: {
        fontSizeFocused: 12,
        fontSizeBlurred: 14,
    },
    label: {
        backgroundColor: '#E9EBF8',
        color: '#fff',
        paddingHorizontal: 5,
        marginTop: -5,
        textAlign: 'center',
    },
    input: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default AnimatedInputField;
