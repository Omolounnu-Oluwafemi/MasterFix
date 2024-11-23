import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from './Themed';
import { useTheme } from "@react-navigation/native";

export default function BackButton({ text, iconPosition, alignSelf, onPress }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { alignSelf: alignSelf }]}>
      {iconPosition === 'left' && <MaterialIcons name="arrow-back-ios" size={18} color={colors.text} />}
      <Text style={[styles.buttonText, { color: colors.text }]}>{text}</Text>
      {iconPosition === 'right' && <MaterialIcons name="arrow-forward-ios" size={18} color={colors.text} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
})