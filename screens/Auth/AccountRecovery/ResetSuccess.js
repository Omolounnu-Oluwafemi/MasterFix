import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import BackButton from '../../../components/BackButton';
import CustomButton from '../../../components/CustomButton';

const SuccessImage = require('../../../assets/images/sucess.png');

const Success = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    navigation.navigate('AccountType')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.middle}>
        <Image source={SuccessImage} style={styles.image} />
        <Text style={styles.verifyText}>Password reset successful</Text>
        <Text style={styles.infoText}>
         You have successfully reset your password. Please use your new password when logging in
        </Text>
      </View>
      <View style={styles.bottom}>
        <CustomButton
          title={loading ? <ActivityIndicator color="#fff" /> : 'Proceed'}
          onPress={() => {
            Keyboard.dismiss();
            handleSubmit();
          }}
          width="100%"
          height={55}
          paddingVertical={10}
          backgroundColor="#013C69"
          justifyContent="center"
          TextColor="#FFFFFF"
          marginBottom='15%'
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  top: {
    alignItems: 'flex-start',
    padding: 10,
    marginTop: '15%',
    marginLeft: '5%'
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  verifyText: {
    fontSize: 18,
    color: '#013C69',
    fontWeight: '500',
    width: '50%',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: '5%'
  },
  bottom: {
    padding: 20,
  },
  image: {
    marginBottom: '5%',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    width: '80%',
    color: '#C1C8CD'
  },
});

export default Success;