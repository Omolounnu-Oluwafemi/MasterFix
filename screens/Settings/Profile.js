import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native';
import BackButton from './../../components/BackButton';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import AnimatedInputField from './../../components/AnimatedInputField';

export default function Profile({ navigation}) {
    const [text, setText] = useState('');
      const [paymentMethod, setPaymentMethod] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.container}>
                    <BackButton text="Settings" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.goBack()} />
                    <Text style={styles.verifyText}>Profile</Text>
                </View>
                <View style={styles.imageBox}>
                    <Image source={require('./../../assets/images/plumber-with-his-arms-crossed.png')} style={styles.image} />
                </View>
                <TouchableOpacity style={styles.upload}>
                    <Text style={styles.uploadText}>Upload Photo</Text>
                    <View style={styles.underline} />
                </TouchableOpacity>
                <View style={styles.fieldContainer}>
                    <AnimatedInputField label="First Name" hint='First name' />
                    <AnimatedInputField label="Last Name" hint='Last name' />
                    <AnimatedInputField label="Age" hint='35' />
                    <AnimatedInputField label="Investment Expeiernce" hint='5' />
                    <AnimatedInputField label="Address lane 1" hint='Address lane 1' />
                    <AnimatedInputField label="Address lane 2" hint='Address lane 2' />
                    <AnimatedInputField label="City" hint='City' />
                    <AnimatedInputField label="State" hint='State' />
                    <AnimatedInputField label="Country" hint='Country' />
                    <AnimatedInputField label="Zip Code" hint='Zip Code' />
                    <View>
                        <Text style={styles.uploadText}>Payment method</Text>
                    </View>
                        <View style={styles.radioGroup}>
                            <View style={styles.radioButton}>
                                <View style={styles.radioContent}>
                                    <TouchableOpacity style={[styles.radioCircle, paymentMethod === 'paypal' && styles.radioCircleSelected]}
                                    onPress={() => setPaymentMethod('paypal')}
                                    >       
                                </TouchableOpacity>
                                <Text style={styles.radioLabel}>Paypal</Text>
                                </View>
                            </View>
                            <View style={styles.radioButton}>
                                <View style={styles.radioContent}>
                                    <TouchableOpacity style={[styles.radioCircle, paymentMethod === 'creditCard' && styles.radioCircleSelected]}
                                    onPress={() => setPaymentMethod('creditCard')}
                                    >
                                </TouchableOpacity>
                                <Text style={styles.radioLabel}>Credit Card</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.radioGroup}>
                            <View style={styles.radioButton}>
                                <View style={styles.radioContent}>
                                    <TouchableOpacity style={[styles.radioCircle, paymentMethod === 'mWallet' && styles.radioCircleSelected]}
                                        onPress={() => setPaymentMethod('mWallet')}
                                    >
                                    </TouchableOpacity>
                                    <Text style={styles.radioLabel}>M-Wallet</Text>
                                </View>
                            </View>
                            <View style={styles.radioButton}>
                                <View style={styles.radioContent}>
                                    <TouchableOpacity style={[styles.radioCircle, paymentMethod === 'debitCard' && styles.radioCircleSelected]}
                                        onPress={() => setPaymentMethod('debitCard')}
                                    >
                                    </TouchableOpacity>
                                    <Text style={styles.radioLabel}>Debit Card</Text>
                                </View>
                            </View>
                        </View>
                    <AnimatedInputField label="Name on card" hint='Abasi' />
                    <AnimatedInputField label="Card number" hint='1234 5678 9101 1121' />
                    <AnimatedInputField label="Expiry date" hint='12/23' />
                    <AnimatedInputField label="CVV" hint='123' />
                    <TouchableOpacity style={styles.upload}>
                        <Text style={styles.uploadText2}>Upload Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop: '5%',
        marginHorizontal: 20,
    },
    verifyText: {
        fontSize: 28,
        color: '#013C69',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '5%',
    },
    imageBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    image: { 
        width: 180,
        height: 135,
        borderRadius: '38%',
        backgroundColor: '#000',
        objectFit: 'contain',
    },
    upload: {
        alignItems: 'center',
        marginVertical: 10,
    },
    uploadText: {
        color: '#000',
        fontSize: 22,
        fontWeight: '700',
        paddingBottom: 5,
    },
    underline: {
        width: '30%', 
        height: 2, 
        backgroundColor: '#000', 
    },
    fieldContainer: {
        backgroundColor: "#E9EBF8",
        borderRadius: 10,
        padding: 20,
        marginTop: '5%',
        gap: 20,
    },
    uploadText2: {
     color: '#fff',
     fontSize: 16,
     fontWeight: '400',
     backgroundColor: '#013C69',
     padding: 15,
     paddingHorizontal: 20,
     textAlign: 'center',
     borderRadius: 10,
    },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  radioContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  radioCircleSelected: {
    backgroundColor: '#013C69',
    borderColor: '#013C69',
  },
  radioLabel: {
    fontSize: 16,
    color: '#000',
  },
});