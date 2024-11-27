import { SafeAreaView, StyleSheet, View, Text, ImageBackground, ActivityIndicator, Keyboard } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../../../components/BackButton';
import CustomButton from '../../../components/CustomButton';
import InputField from '../../../components/InputField';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    password: yup
        .string()
        .required('Enter your Password')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const CELL_COUNT = 6;

const backgroundImage = require('../../../assets/images/BackgroundLOGO.png');

const NewPassword = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} imageStyle={styles.imageStyle}>
        <View style={styles.content}>
          <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={()=> navigation.goBack()}/>
          <Text style={styles.verifyText}>Create new password</Text>
          <Text style={styles.infoText}>
            Passwords must have at least 8 characters and contain at least two of the following: uppercase letters, lowercase letters, numbers, and symbols. 
          </Text>
          <View style={styles.phoneContainer}>
                <Formik
                    initialValues={{ password: '', confirm: '' }}
                    validationSchema={validationSchema}
                    onSubmit={()=> navigation.navigate('ResetSuccess')}
                >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
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

                    <CustomButton
                        title={loading ? <ActivityIndicator color="#fff" /> : 'Reset Password'}
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

export default NewPassword;

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
    marginTop: '20%',
    width: '100%',
  },
  image: {
      alignSelf: 'center',
      marginTop: '10%',
  },
  verifyText: {
    fontSize: 28,
    color: '#013C69',
    fontWeight: '500',
    lineHeight: 42,
    marginTop: '10%'
  },
  infoText: {
    fontSize: 13,
    color: '#92929D',
    fontWeight: '400',
    lineHeight: 18,
    marginTop: '3%',
  },
  phoneContainer: {
    marginTop: '8%',
    width: '100%',
    marginBottom: '7%',
  },
});