import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import BackButton from '../../../components/BackButton';

const VerificationChoice = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={()=> navigation.goBack()}/>
        <Text style={styles.title}>Verification</Text>

      <Text style={styles.subtitle}>
        To help keep your account safe we want to make sure it’s you trying to log in. Select which contact details
        should OTP be sent.
      </Text>

      <View style={styles.bothOptionContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('VerifyCode')} style={styles.optionContainer}>
          <View style={styles.iconContainer}>
            <Feather name="phone" size={30} color="#013C69" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionLabel}>via SMS:</Text>
            <Text style={styles.optionDetail}>*** ******61</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('VerifyCode')} style={styles.optionContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="envelope-o" size={30} color="#013C69" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionLabel}>via Email:</Text>
            <Text style={styles.optionDetail}>****ic16@gmail.com</Text>
          </View>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIconContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#013C69',
    textAlign: 'center',
    marginTop: 60,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 12,
    color: '#92929D',
    textAlign: 'center',
    marginTop: 25,
    paddingHorizontal: 10,
    fontWeight: '400'
  },
  bothOptionContainer: {
    marginTop: 40,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#D5DDE0',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    width: '30%',
    paddingVertical: '10%',
    borderRadius: 10,
    backgroundColor: '#D5DDE0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10%',
  },
  optionTextContainer: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 14,
    color: '#193053',
  },
  optionDetail: {
    fontSize: 14,
    fontWeight: '600',
    color: '#193053',
    marginTop: 4,
  },
});

export default VerificationChoice;
