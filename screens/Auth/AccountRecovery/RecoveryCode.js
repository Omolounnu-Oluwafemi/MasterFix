import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, ActivityIndicator, Keyboard } from 'react-native';
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
const ConfirmphoneImage = require('../../../assets/images/ConfirmphoneImage.png');

const RecoveryCode = ({navigation}) => {
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
          <Image source={ConfirmphoneImage} style={styles.image} />
          <Text style={styles.verifyText}>Recovery code</Text>
          <Text style={styles.infoText}>
            We have sent a confirmation code
          </Text>
          <View style={styles.phoneContainer}>
              <Formik
                initialValues={{ code: '' }}
                validationSchema={validationSchema}
                onSubmit={()=> navigation.navigate('NewPassword')}
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
                        <TouchableOpacity>
                            <Text style={styles.resendText}>resend code</Text> 
                        </TouchableOpacity>   

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

export default RecoveryCode;

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
  },
  verifyText: {
    fontSize: 28,
    color: '#013C69',
    fontWeight: '500',
    lineHeight: 42,
  },
  infoText: {
    fontSize: 14,
    color: '#898384',
    fontWeight: '400',
    lineHeight: 18,
    marginTop: '1%',
  },
  phoneContainer: {
    marginTop: '8%',
    width: '100%',
    marginBottom: '7%',
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
    fontWeight: '400',
    color: '#193053',
    marginTop: 10,
    },
});
