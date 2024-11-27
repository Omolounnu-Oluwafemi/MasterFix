import { SafeAreaView, StyleSheet, View, Image, Text, ImageBackground, ActivityIndicator, Keyboard } from 'react-native';
import React, { useState, useRef } from 'react';
import BackButton from '../../../components/BackButton';
import CustomButton from '../../../components/CustomButton';
import InputField from '../../../components/InputField';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Enter your Email or Phone Number'),
});

const backgroundImage = require('../../../assets/images/BackgroundLOGO.png');
const ConfirmphoneImage = require('../../../assets/images/forgot_password.png');

const ResetPassword = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} imageStyle={styles.imageStyle}>
        <View style={styles.content}>
                  <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={()=> navigation.goBack()} />
          <Image source={ConfirmphoneImage} style={styles.image} />
          <Text style={styles.verifyText}>Reset Password</Text>
          <Text style={styles.infoText}>
            Enter the email or phone number associated with your account and we’ll send recovery code to recover your account.
          </Text>
          <View style={styles.phoneContainer}>
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={validationSchema}
                    onSubmit={()=> navigation.navigate('RecoveryCode')}
                >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
                <InputField
                label=""
                placeholder="Email or phone number"
                keyboardType="email-address"
                autoCapitalize="none"
                textContentType="email"
                returnKeyType="next"
                width="100%"
                borderRadius={10}
                fullBorder='true'
                marginLeft=''
                paddingLeft={10}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email && errors.email}
                errorMessage={errors.email}
                />

                    <CustomButton
                        title={loading ? <ActivityIndicator color="#fff" /> : 'Reset'}
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
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ResetPassword;

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
      marginTop: '15%',
      marginBottom: '10%'
  },
  verifyText: {
    fontSize: 28,
    color: '#013C69',
    fontWeight: '500',
    lineHeight: 42,
  },
  infoText: {
    fontSize: 14,
    color: '#AEAEB2',
    fontWeight: '400',
    lineHeight: 18,
    marginTop: '1%',
  },
  phoneContainer: {
    width: '100%',
    marginBottom: '7%',
  },
});

