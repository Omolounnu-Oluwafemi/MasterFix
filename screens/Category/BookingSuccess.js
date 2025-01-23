import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet, ActivityIndicator, Keyboard, TouchableOpacity } from 'react-native';
import BackButton from '../../components/BackButton';
import { format, parseISO, parse } from 'date-fns';
import CustomButton from '../../components/CustomButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

const SuccessImage = require('../../assets/images/sucess.png');

const BookingSuccess = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const { values } = route.params;

  console.log(values);
  const formattedDate = format(parseISO(values.date), 'EEEE, MMMM d, yyyy');
  // const formattedTime = format(parseISO(values.time), 'hh:mm a');
  const formattedTime = format(parse(values.time, 'HH:mm', new Date()), 'hh:mm a');
  
  const handleSubmit = () => {
    navigation.navigate('Home')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.middle}>
        <Image source={SuccessImage} style={styles.image} />
        <Text style={styles.verifyText}>Your booking have been submitted</Text>
      </View>

      <View >
        <View style={styles.title}>
          <Entypo name="pin" size={17} color="#193053" />
          <Text style={{fontSize: 20 }}>{values.category}</Text>
        </View>

        <View style={styles.title}>
          <FontAwesome name="calendar" size={17} color="#193053" />
          <View>
            <Text style={{ fontSize: 15, color: '#7C7C7F' }}>{formattedDate}</Text>
            <Text style={{fontSize: 15, color: '#7C7C7F'}}> {formattedTime}</Text>
          </View>
        </View>
          
        <TouchableOpacity>
          <Text style={styles.allDetails}>
            See all details
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <CustomButton
          title={loading ? <ActivityIndicator color="#fff" /> : 'Return Home'}
          onPress={() => {
            Keyboard.dismiss();
            handleSubmit();
          }}
          width="100%"
          height={55}
          paddingVertical={10}
          backgroundColor="#013C69"
          justifyContent="center"
          TextColor="#FFFFFF"
          marginBottom='10%'
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  top: {
    alignItems: 'flex-start',
    padding: 10,
    marginTop: '15%',
    marginLeft: '5%'
  },
  middle: { 
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    width: '70%',
    marginLeft: '15%', 
    marginTop: '2%',
    fontSize: 20,
    color: '#193053',
    flexDirection: 'row',
    gap: 20,
  },
  verifyText: {
    fontSize: 18,
    color: '#013C69',
    fontWeight: '500',
    width: '70%',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: '5%'
  },
  allDetails: {
    fontSize: 16,
    color: '#193053',
    textAlign: 'center',
    marginTop: '5%',
  },
  bottom: {
    padding: 20,
  },
  image: {
    marginBottom: '5%',
  },
});

export default BookingSuccess;