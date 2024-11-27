import React, {useState} from 'react';
import { View, Text, ActivityIndicator, ImageBackground, StyleSheet, Image, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import InputField from '../../../components/InputField';
import CustomButton from '../../../components/CustomButton';
import SocialButton from '../../../components/SocialButton';

const backgroundImage = require('../../../assets/images/BackgroundLOGO.png');
const googleLogo = require('../../../assets/images/GoogleIcon.png');
const linkedInLogo = require('../../../assets/images/linkedin.png');
const microsoftLogo = require('../../../assets/images/microsoft-icon.png');
const shaftImage = require('../../../assets/images/shaft.png');

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Enter your Email Address'),
});

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <ImageBackground source={backgroundImage} style={styles.background} imageStyle={styles.image}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Text style={styles.text}>Register</Text>
      <View style={styles.middleContainer}>
        <View style={styles.shaftImageContainer}>
          <Image source={shaftImage} style={styles.shaftImage} />
          <View style={styles.createTextContainer}>
            <Text style={styles.create}>Create </Text>
            <Text style={styles.create}>your account</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={()=> navigation.navigate('VerifyPhone')}
          >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <InputField
              label="Email address"
              placeholder="abedhfhsbhs@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              textContentType="email"
              returnKeyType="next"
              width="100%"
              borderRadius={10}
              fullBorder='true'
              marginLeft='8.5%'
              paddingLeft={10}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={touched.email && errors.email}
              errorMessage={errors.email}
            />

            <CustomButton
              title={
                loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  'Register'
                )
              }
              onPress={() => {
                Keyboard.dismiss();
                handleSubmit();
              }}
              width="100%"
              marginLeft='8.5%'
              height={48}
              paddingVertical={10}
              marginTop={10}
              justifyContent='center'
              backgroundColor="#013C69"
              TextColor="#FFFFFF"
            />
          </>
        )}
          </Formik>

          <View style={styles.alreadyContainer}>
            <Text style={styles.alreadyText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('WelcomeBack')}>
              <Text style={styles.signInText}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
          <SocialButton
              title={
                loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  'Continue with Google'
                )
              }
              onPress={() => {
                Keyboard.dismiss();
                handleSubmit();
              }}
              width="100%"
              marginLeft='8.5%'
              height={48}
              googleLogo={googleLogo}
              paddingVertical={10}
              marginTop={10}
              borderWidth={1}
              borderColor='#00000040'
              backgroundColor="#FFFFFF"
              TextColor="#A1A1A4"
          />
        
          <SocialButton
              title={
                loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  'Continue with LinkedIn'
                )
              }
              onPress={() => {
                Keyboard.dismiss();
                handleSubmit();
              }}
              width="100%"
              marginLeft='8.5%'
              height={48}
              linkedInLogo={linkedInLogo}
              paddingVertical={10}
              marginTop={10}
              borderWidth={1}
              borderColor='#00000040'
              backgroundColor="#fff"
              TextColor="#A1A1A4"
          />
        
          <SocialButton
              title={
                loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  'Continue with Microsoft'
                )
              }
              onPress={() => {
                Keyboard.dismiss();
                handleSubmit();
              }}
              width="100%"
              marginLeft='8.5%'
              height={48}
              microsoftLogo={microsoftLogo}
              paddingVertical={10}
              marginTop={10}
              borderWidth={1}
              borderColor='#00000040'
              backgroundColor="#fff"
              TextColor="#A1A1A4"
            />
        </View>
      </ScrollView>
      </ImageBackground>
  )
}

export default Register

const styles = StyleSheet.create({
  background: {
    width: '100%',
    backgroundColor: '#ffffff'
  },
  image: {
      width: '40%',
      marginLeft: '30%',
      height: '20%',
      resizeMode: 'contain',
      marginTop: '20%',
  },
  container: {
    height: '30%'
  },
  text: {
    fontSize: 40,
    color: '#013C69', 
    fontWeight: '500',
    marginLeft: '10%',
    marginTop: '35%'
  },
  shaftImageContainer: {
    position: 'relative',
    width: '100%',
  },
  shaftImage: {
    resizeMode: 'cover',
    width: '100%',
  },
  middleContainer: {
    marginTop: '20%'
  },
  createTextContainer: {
    alignItems: 'flex-start',
    position: 'absolute',
    width: '40%',
    top: '60%',
    left: '7%',
  },
  create: {
    color: '#FFC12E',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
  formContainer: {
    marginTop: '5%',
    width: '85%',
  }, 
  alreadyContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '3%'
  },
  alreadyText: {
    fontSize: 13,
    color: '#A1A1A4',
    textAlign: 'center',
    fontWeight: '400'
  },
  signInText: {
    fontSize: 13,
    color: '#013C69',
    fontWeight: '400',
    textAlign: 'center',
  },
  bottomContainer: {
    width: '85%',
    marginTop: '10%',
    marginBottom: '10%',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 0,
    alignSelf: 'flex-start',
  },
})
