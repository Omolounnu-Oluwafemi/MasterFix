import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Animated from 'react-native-reanimated';

const AnimatedInputField = ({ label, hint }) => {
    const [text, setText] = useState('');


    return (
        <FloatingLabelInput
            label={label}
            value={text}
            staticLabel
            hintTextColor="#000"
            hint={hint}
            containerStyles={styles.inputContainer}
            customLabelStyles={styles.customLabel}
            labelStyles={styles.label}
            inputStyles={styles.input}
            onChangeText={setText}
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
        backgroundColorFocused: '#2F7FEF',
        fontSizeFocused: 12,
        colorBlurred: '#000',
        fontSizeBlurred: 14,

    },
    label: {
        backgroundColor: '#2F7FEF',
        paddingHorizontal: 5,
    },
    input: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default AnimatedInputField;
