import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrSeparator = () => {
  return (
    <View style={styles.orContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>Or login with</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
    orContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: '5%'
        },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: '#000000',
       },
      orText: {
        marginHorizontal: 20,
        fontSize: 12,
        lineHeight: 18,
        color: '#4A4A4C',
       },
});

export default OrSeparator;