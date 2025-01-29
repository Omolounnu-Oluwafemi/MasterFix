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
        colorFocused: '#2F7FEF',
        colorBlurred: '#000',
        topFocused: -10, 
        topBlurred: 0,
      }}
      labelStyles={{
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 5,
        backgroundColor: '#E9EBF8',
        fontSize: 12, 
        color: '#000'
      }}
      inputStyles={styles.input}
      onChangeText={setText}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)} 
    />
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        padding: 18,
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
        fontSize: 13,
        fontWeight: '500',
    },
});

export default AnimatedInputField;
