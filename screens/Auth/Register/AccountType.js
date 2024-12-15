import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

const AccountType = ({navigation, route}) => {
  const [selectedAccountType, setSelectedAccountType] = useState(null);
  const [confirmSelection, setConfirmSelection] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);

  const previousScreen = route.params?.previousScreen || null;  

  useEffect(() => {
    if (confirmSelection) {
      checkLocationPermission();
    }
  }, [confirmSelection]);

  const handleAccountTypeSelect = (type) => {
    if (selectedAccountType !== type) {
      setSelectedAccountType(type);
      setConfirmSelection(true);
    } else {
      // Toggle confirmation on second click
      setConfirmSelection((prev) => !prev);
    }
  };

  const checkLocationPermission = async () => {
    const permissionStatus = await AsyncStorage.getItem('locationPermissionStatus');
    if (permissionStatus === 'granted') {
      handleLocationAccess();
    } else {
      requestLocationPermission();
    }
  };

  const requestLocationPermission = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        await AsyncStorage.setItem('locationPermissionStatus', 'denied');
        Alert.alert('Permission Denied', 'Location permission is required to continue.');
      } else {
        await AsyncStorage.setItem('locationPermissionStatus', 'granted');
        handleLocationAccess();
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to request location permission.');
      console.error('Error requesting location permission:', error);
    } 
  };

  const handleLocationAccess = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(location.coords);

      if (address.length > 0) {
        const { country, region: state, city, postalCode: zipCode } = address[0];
        const { latitude, longitude } = location.coords;
        const locationInfo = { country, state, city, zipCode, latitude, longitude };

        setLocationDetails(locationInfo);
        await AsyncStorage.setItem('userLocation', JSON.stringify(locationInfo));

        if (previousScreen === 'VerifyCode') {
          navigation.replace('Main');
        } else {
          if (selectedAccountType === 'artisan') {
            navigation.navigate('ArtisanDetails');
          } else if (selectedAccountType === 'user') {
            navigation.navigate('UserDetails');
          }
        }
      }
    } catch (error) {
      console.error('Error accessing location:', error);
      if (error.message.includes('Not authorized to use location services')) {
        Alert.alert('Permission Denied', 'Location permission is required to continue.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Type of Account</Text>
      <Text style={styles.subtitle}>Choose the type of account you would like to create with us</Text>

      <TouchableOpacity
        style={[
          styles.card,
          selectedAccountType === 'artisan' && styles.selectedCard,
        ]}
        onPress={() => handleAccountTypeSelect('artisan')}
      >
        <Text style={[
          styles.cardTitle,
          selectedAccountType === 'artisan' && styles.selectedCardTitle
        ]}>
          Artisan/Service Provider
        </Text>
        <Text style={[
          styles.cardDescription,
          selectedAccountType === 'artisan' && styles.selectedCardDescription
        ]}>
          Deliver tailored expertise and resolve issues promptly.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.card,
          selectedAccountType === 'user' && styles.selectedCard
        ]}
        onPress={() => handleAccountTypeSelect('user')}
      >
        <Text style={[
          styles.cardTitle,
          selectedAccountType === 'user' && styles.selectedCardTitle
        ]}>
          I am a User
        </Text>
        <Text style={[
          styles.cardDescription,
          selectedAccountType === 'user' && styles.selectedCardDescription
        ]}>
          I am seeking solutions to a challenge or issues.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#003A8C', 
  },
  subtitle: {
    width: '70%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#B0B0B0', 
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  card: {
    width: '85%',
    paddingHorizontal: '8%',
    paddingTop: '8%',
    paddingBottom: '15%',
    borderRadius: 10,
    backgroundColor: '#c7cbd4', 
    marginVertical: 10,
  },
  selectedCard: {
    backgroundColor: '#013C69',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#4A4A4A', 
  },
  selectedCardTitle: {
    color: '#FFC12E', 
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7C7C7F', 
    marginTop: 5,
  },
  selectedCardDescription: {
    color: '#8E98A8', 
  },
});

export default AccountType;
