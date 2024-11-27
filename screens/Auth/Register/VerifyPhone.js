import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, ActivityIndicator, Keyboard } from 'react-native';
import React, { useState, useRef } from 'react';
import BackButton from '../../../components/BackButton';
import CustomButton from '../../../components/CustomButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    phoneNumber: yup.string().required('Phone Number required'),
});

const backgroundImage = require('../../../assets/images/BackgroundLOGO.png');
const VerifyPhoneImage = require('../../../assets/images/verifyPhone.png');

const VerifyPhone = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const phoneInputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} imageStyle={styles.imageStyle}>
        <View style={styles.content}>
          <BackButton text="Back" iconPosition="left" alignSelf="flex-start" />
          <Image source={VerifyPhoneImage} style={styles.image} />
          <Text style={styles.verifyText}>Verify your phone number</Text>
          <Text style={styles.infoText}>
            Please note that phone verification is required for signup. Your number will be used to verify your identity for security purposes.
          </Text>
          <View style={styles.phoneContainer}>
            <Formik
                  initialValues={{
                    phoneNumber: '',
                  }}
                validationSchema={validationSchema}
                onSubmit={()=> navigation.navigate('ConfirmPhone')}
            >
              {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
                <>
                <PhoneInput
                  ref={phoneInputRef}
                  defaultCode="NG"
                  layout="first"
                  onChangeText={handleChange('phoneNumber')}
                  containerStyle={[
                    styles.phoneFlagContainer,
                    isFocused && styles.focusedPhoneFlagContainer,
                  ]}
                  textContainerStyle={styles.phoneInputTextContainer}
                  withDarkTheme
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  value={values.phoneNumber}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                      <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                  )}

                  <CustomButton
                    title={loading ? <ActivityIndicator color="#fff" /> : 'Proceed'}
                    onPress={() => {
                      Keyboard.dismiss();
                      handleSubmit();
                    }}
                    width="100%"
                    height={55}
                    paddingVertical={10}
                    marginTop={25}
                    justifyContent="center"
                    backgroundColor="#013C69"
                    TextColor="#FFFFFF"
                    />
                </>
                 )}
              </Formik>
          </View>
        <View style={styles.whatsappContainer}>
          <View style={styles.textWithIcon}>
            <Text style={styles.infoText}>Do you have</Text>
            <FontAwesome name="whatsapp" size={20} color="black" style={styles.icon} />
            <Text style={styles.whatsappText}>WhatsApp?</Text>
          </View>
          <View style={styles.optionContainer}>
            <TouchableOpacity>
              <Text style={styles.infoText}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.infoText}>NO</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default VerifyPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '40%',
    resizeMode: 'contain',  
    position: 'absolute',  
    bottom: '30%',
    top: '38%',
    marginLeft: '30%',
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: '6%',
    paddingTop: '15%',
    width: '100%',
  },
  image: {
    alignSelf: 'center',
  },
  verifyText: {
    fontSize: 28,
    color: '#013C69',
    fontWeight: 'bold',
    lineHeight: 42,
  },
  infoText: {
    fontSize: 12,
    color: '#898384',
    fontWeight: 'bold',
    lineHeight: 18,
    marginTop: '1%',
  },
  phoneContainer: {
    marginTop: '10%',
    height: 60,
    width: '100%',
    marginBottom: '15%',
  },
  phoneFlagContainer: {
    height: '100%',
    backgroundColor: 'transparent',
    width: '100%',
  },
  focusedPhoneFlagContainer: {
    borderColor: 'red',
  },
  phoneInputTextContainer: {
    height: '100%',
    paddingVertical: 5,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 5,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    marginTop: 0,
    alignSelf: 'center',
  },
  whatsappContainer: {
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textWithIcon: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  icon: {
    marginHorizontal: 10,  
  },
  optionContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
    marginLeft: '5%',
    fontWeight: '100',
  },
    whatsappText: {
    fontSize: 12,
    color: '#193053',
    fontWeight: 'bold',
    lineHeight: 18,
    marginTop: '1%',
  },
});