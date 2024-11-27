import { SafeAreaView, Text, StyleSheet, View, ScrollView, ImageBackground, ActivityIndicator, Keyboard, Alert } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../../../components/BackButton';
import CustomButton from '../../../components/CustomButton';
import InputField from '../../../components/InputField';
import CustomCheckbox from '../../../components/CustomCheckbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    companyName: yup.string().required('Company Name is required'),
    kindOfWork: yup.string().required('Info about Your Kind of Work is required'),
    password: yup
        .string()
        .required('Enter your Password')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const backgroundImage = require('../../../assets/images/BackgroundLOGO.png');

const ArtisanDetails = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [sendUpdates, setSendUpdates] = useState(false);
  const [checkErrorMessage, setCheckErrorMessage] = useState('')

  const handleRegister = async (values) => {
    console.log(values);
     await AsyncStorage.setItem('userInfo', JSON.stringify(values));
    if (!agreedToTerms) {
      setCheckErrorMessage('You must agree to the Terms of Service and Privacy Statement to proceed.')
      return
    }
    setLoading(true)
    navigation.navigate('HomeScreen')
    // Add your form submission logic here
    setLoading(false)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} imageStyle={styles.imageStyle}>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={()=> navigation.goBack()}/>
            <Text style={styles.title}>Enter your details</Text>

            <View style={styles.formContainer}>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        companyName: '',
                        kindOfWork: '',
                        password: '',
                        confirm: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <View style={styles.nameFields}>
                            <InputField
                                label="First Name"
                                placeholder="Mark John"
                                keyboardType='input'
                                autoCapitalize="none"
                                textContentType="text"
                                returnKeyType="next"
                                width="100%"
                                flex={1}
                                borderRadius={10}
                                fullBorder='true'
                                paddingLeft={10}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                                error={touched.firstName && errors.firstName}
                                errorMessage={errors.firstName}
                            />
                                        
                            <InputField
                                label="Last Name"
                                placeholder="Mark John"
                                keyboardType='input'
                                autoCapitalize="none"
                                textContentType="text"
                                returnKeyType="next"
                                width="100%"
                                flex={1}
                                borderRadius={10}
                                fullBorder='true'
                                paddingLeft={10}
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName}
                                error={touched.lastName && errors.lastName}
                                errorMessage={errors.lastName}
                            />            
                        </View>  
                        <InputField
                            label="Company Name"
                            placeholder="Mark John"
                            keyboardType='input'
                            autoCapitalize="none"
                            textContentType="text"
                            returnKeyType="next"
                            width="100%"
                            borderRadius={10}
                            fullBorder='true'
                            paddingLeft={10}
                            onChangeText={handleChange('companyName')}
                            onBlur={handleBlur('companyName')}
                            value={values.companyName}
                            error={touched.companyName && errors.companyName}
                            errorMessage={errors.companyName}
                        />   
                        <InputField
                            label="What kind of work do you do?"
                            placeholder="Mark John"
                            keyboardType='input'
                            autoCapitalize="none"
                            textContentType="text"
                            returnKeyType="next"
                            width="100%"
                            borderRadius={10}
                            fullBorder='true'
                            paddingLeft={10}
                            onChangeText={handleChange('kindOfWork')}
                            onBlur={handleBlur('kindOfWork')}
                            value={values.kindOfWork}
                            error={touched.kindOfWork && errors.kindOfWork}
                            errorMessage={errors.kindOfWork}
                        />   
                        <InputField
                            label="Password"
                            placeholder="********"
                            keyboardType="password"
                            autoCapitalize="none"
                            textContentType='password'
                            returnKeyType="next"
                            width="100%"
                            paddingLeft={10}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                            fullBorder='true'
                            error={touched.password && errors.password}
                            errorMessage={errors.password}
                            showPasswordToggle={true}
                        />  

                        <InputField
                            label="Confirm Password"
                            placeholder="********"
                            keyboardType="password"
                            autoCapitalize="none"
                            textContentType="password"
                            returnKeyType="next"
                            width="100%"
                            paddingLeft={10}
                            fullBorder='true'
                            onChangeText={handleChange('confirm')}
                            onBlur={handleBlur('confirm')}
                            value={values.confirm}
                            error={touched.confirm && errors.confirm}
                            errorMessage={errors.confirm}
                            showPasswordToggle={true}
                                      />    

                        <CustomCheckbox
                            label="I agree to the Terms of Service and Privacy Statement"
                            checked={agreedToTerms}
                            onChange={() => {
                              setAgreedToTerms(!agreedToTerms)
                              setCheckErrorMessage('')
                            }}
                        />
                        <CustomCheckbox
                            label="Send me updates via email"
                            checked={sendUpdates}
                            onChange={() => setSendUpdates(!sendUpdates)}
                        />             
                        {checkErrorMessage ? <Text style={styles.errorText}>{checkErrorMessage}</Text> : null}
                        <CustomButton
                            title={loading ? <ActivityIndicator color="#fff" /> : 'Register'}
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
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ArtisanDetails;

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
  title: {
    fontSize: 28,
    color: '#013C69',
    fontWeight: 'bold',
    lineHeight: 34,
    marginTop: '10%'
  },
  formContainer: {
    marginTop: '8%',
    width: '100%',
    marginBottom: '7%',
 },
  nameFields: {
    flexDirection: 'row',
    width: '100%',
    gap: 5,
  },
callInstead: {
    textAlign: 'center',
    color: '#193053',
    fontWeight: 'bold',
    fontSize: 15,
  },
  errorText: {
    color: 'red',
    marginTop: 6,
    fontSize: 10,
  },
});
