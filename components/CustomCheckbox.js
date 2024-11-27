import React from 'react';
import { Pressable, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomCheckbox = ({ label, onChange, checked, onPressTerms, onPressPrivacy }) => {
  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity onPress={onChange} style={[styles.checkbox, checked && styles.checked]}>
        {checked && <AntDesign name="check" size={16} color="#5746AF" />}
      </TouchableOpacity>
      <View style={styles.labelContainer}>
        {label.includes('Terms of Service') && onPressTerms && onPressPrivacy ? (
          <Text style={styles.label}>
            I agree to the{' '}
            {/* <Pressable onPress={onPressTerms} style={styles.linkPressable}> */}
              <Text style={styles.link}>Terms of Service</Text>
            {/* </Pressable> */}
            {' '}and{' '}
            {/* <Pressable onPress={onPressPrivacy} style={styles.linkPressable}> */}
              <Text style={styles.link}>Privacy Statement</Text>
            {/* </Pressable> */}
          </Text>
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#D7DBDF',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    // backgroundColor: '#013C69',
  },
  labelContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  label: {
    fontSize: 11,
    color: '#4A4A4C',
    lineHeight: 18,
  },
  linkPressable: {
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  link: {
    fontSize: 11,
    color: '#013C69',
  },
});

export default CustomCheckbox;