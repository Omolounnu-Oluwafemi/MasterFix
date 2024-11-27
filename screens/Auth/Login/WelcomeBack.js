import React, {useState} from 'react';
import { View, ActivityIndicator, ImageBackground, Text, StyleSheet, Image, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import InputField from '../../../components/InputField';
import CustomButton from '../../../components/CustomButton';
import CustomCheckbox from '../../../components/CustomCheckbox';
import OrSeparator from '../../../components/OrSeparator';

const backgroundImage = require('../../../assets/images/BackgroundLOGO.png');
const googleLogo = require('../../../assets/images/GoogleIcon.png');
const linkedInLogo = require('../../../assets/images/linkedin.png');
const microsoftLogo = require('../../../assets/images/microsoft-icon.png');
const shaftImage = require('../../../assets/images/shaft.png');

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Enter your Email or Phone Number'),
  password: yup
    .string()
    .required('Enter your Password')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
});

const WelcomeBack = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ImageBackground source={backgroundImage} style={styles.background} imageStyle={styles.image}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Text style={styles.text}>Welcome Back</Text>
      <View style={styles.middleContainer}>
        <View style={styles.shaftImageContainer}>
          <Image source={shaftImage} style={styles.shaftImage} />
          <View style={styles.createTextContainer}>
            <Text style={styles.create}>Login </Text>
            <Text style={styles.create}>to your account</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Formik
            initialValues={{ email: '', password: '',  }}
            validationSchema={validationSchema}
            onSubmit={()=> navigation.navigate('VerificationChoice')}
          >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <InputField
              label="Email or phone number"
              placeholder="abedhfhsbhs@gmail.com"
              keyboardType='text'
              autoCapitalize="none"
              textContentType="email"
              returnKeyType="next"
              width="100%"
              borderRadius={10}
              fullBorder='true'
              marginLeft='5%'
              paddingLeft={10}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={touched.email && errors.email}
              errorMessage={errors.email}
            />
                          
            <InputField
                label="Password"
                placeholder="********"
                keyboardType="password"
                autoCapitalize="none"
                textContentType='password'
                returnKeyType="next"
                width="100%"
                marginLeft='5%'            
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
                  
                  <View style={styles.rememberMe}>
                    <CustomCheckbox
                        label="Remember me"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    /> 
                    
                    <TouchableOpacity onPress={()=> navigation.navigate('ResetPassword')}>
                      <Text style={styles.signInText}>Forgot password?</Text>
                    </TouchableOpacity>
                  </View>
            <CustomButton
              title={
                loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  'Login'
                )
              }
              onPress={() => {
                Keyboard.dismiss();
                handleSubmit();
              }}
              width="100%"
              marginLeft='5%'
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
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
              <Text style={styles.signInText}>    Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        
        <OrSeparator />
        
        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Image source={googleLogo}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={linkedInLogo}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={microsoftLogo}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </ImageBackground>
  )
}

export default WelcomeBack

const styles = StyleSheet.create({
  background: {
    width: '100%',
      backgroundColor: '#fff'
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
    marginLeft: '8%',
    width: '70%',
    marginTop: '35%',
    lineHeight: 50
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
    marginTop: '5%'
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
    width: '90%',
  }, 
  alreadyContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '7%'
  },
  alreadyText: {
    fontSize: 13,
    color: '#A1A1A4',
    textAlign: 'center',
    fontWeight: '400'
  },
  signInText: {
    fontSize: 16,
    color: '#013C69',
    fontWeight: '400',
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '50%',
    marginTop: '10%',
    marginBottom: '10%',
    justifyContent: 'space-around',
    marginLeft: '25%'
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 0,
    alignSelf: 'flex-start',
  },
  rememberMe: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginLeft: '5%',
  }
})
