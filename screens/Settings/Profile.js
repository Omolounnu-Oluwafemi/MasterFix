import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native';
import BackButton from './../../components/BackButton';
import React, { useState } from 'react';
import AnimatedInputField from './../../components/AnimatedInputField';

export default function Profile({ navigation}) {
    const [text, setText] = useState('');

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
                    <Text style={styles.uploadText}>Payment method</Text>
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
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#000',
        objectFit: 'contain',
    },
    upload: {
        alignItems: 'center',
        marginVertical: 10,
    },
    uploadText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        textDecorationLine: 'underline',
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
});