import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ImageBackground, ActivityIndicator, Keyboard } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../../../components/BackButton';
import CustomButton from '../../../components/CustomButton';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  code: yup
    .string()
    .length(6, 'Code must be exactly 6 digits')
    .required('Enter the 6-digit code'),
});

const CELL_COUNT = 6;

const backgroundImage = require('../../../assets/images/BackgroundLOGO.png');

const VerifyCode = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} imageStyle={styles.imageStyle}>
        <View style={styles.content}>
          <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={()=> navigation.goBack()}/>
          <Text style={styles.verifyText}>Verification</Text>
          <Text style={styles.infoText}>
            A one time OTP code has been sent to your phone number
          </Text>
          <View style={styles.phoneContainer}>
              <Formik
                initialValues={{ code: '' }}
                validationSchema={validationSchema}
                onSubmit={()=> navigation.navigate('AccountType', { previousScreen: 'VerifyCode' })}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                  <>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={values.code}
                        onChangeText={handleChange('code')}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType='name-phone-pad'
                        textContentType="oneTimeCode"
                        onSubmitEditing={()=> Keyboard.dismiss()} 
                        renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[
                                styles.cell,
                                isFocused && styles.focusCell,
                                symbol && styles.completeCell,
                            ]}
                            onLayout={getCellOnLayoutHandler(index)}
                        >
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                        )}
                        />
                    {touched.code && errors.code && <Text style={styles.errorText}>{errors.code}</Text>}

                    {errorMessage ? <Text style={styles.bigerrorText}>{errorMessage}</Text> : null}  

                    <CustomButton
                        title={loading ? <ActivityIndicator color="#fff" /> : 'Confirm'}
                        onPress={() => {
                            Keyboard.dismiss();
                            handleSubmit();
                        }}
                        width="100%"
                        height={55}
                        paddingVertical={10}
                        marginTop={35}
                        justifyContent="center"
                        backgroundColor="#013C69"
                        TextColor="#FFFFFF"
                    />          
                  </>
                )}
              </Formik>
          </View>
                <TouchableOpacity>
                    <Text style={styles.callInstead}>Don’t get code?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.resendText}>Resend OTP in 30</Text>
                </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default VerifyCode;

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
      marginTop: '10%',
  },
  verifyText: {
    fontSize: 28,
    color: '#013C69',
    fontWeight: '500',
    lineHeight: 42,
    textAlign: 'center',
    marginTop: '10%',
  },
  infoText: {
    fontSize: 12,
    color: '#898384',
    fontWeight: '400',
    lineHeight: 18,
    marginTop: '10%',
    textAlign: 'center',
    width: '90%',
    marginLeft: '5%'
  },
  phoneContainer: {
    marginTop: '10%',
    width: '100%',
    marginBottom: '10%',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    marginTop: 0,
    alignSelf: 'center',
  },
 bigerrorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 10,
    alignSelf: 'center',
},
 codeFieldRoot: {
    width: '100%',
    alignSelf: 'center',
  },
  cell: {
    width: 50,
    height: 60,
    fontSize: 40,
    borderWidth: 1,
    borderColor: '#868E96',
    textAlign: 'center',
    borderRadius: 10,
    color: '#193053'
  },
  focusCell: {
    borderColor: '#868E96',
  },
  completeCell: {
    borderColor: '#000000',
},
resendText: {
    textAlign: 'center',
    fontSize: 14.64,
    color: '#193053',
    fontWeight: '400',
     marginTop: '17%'
  },
callInstead: {
    textAlign: 'center',
    color: '#92929D',
    fontWeight: '400',
    fontSize: 15,
    marginTop: '7%'
  },
});
