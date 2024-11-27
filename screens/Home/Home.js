import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userInfoString = await AsyncStorage.getItem('userInfo');
        const userLocationString = await AsyncStorage.getItem('userLocation');
          
          if (userInfoString && userLocationString) {
            const userInfo = JSON.parse(userInfoString);
            const userLocation = JSON.parse(userLocationString);
            setFirstName(userInfo.firstName);
            setLocation(userLocation.state, userLocation.city);
          } 
      } catch (error) {
        console.error('Failed to load the user name from AsyncStorage', error);
      }
    };

    fetchUserName();
  }, []);

  const handleLogout = async () => {
    try {
      navigation.navigate('LandingPage');
    } catch (error) {
      console.error('Failed to logout and clear AsyncStorage', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, {firstName || 'Guest'}!</Text>
      <Text style={styles.subtitle}>From, {location || 'MasterFix'}!</Text>
      <Text style={styles.subtitle}>Your ultimate app experience is coming soon.</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout now</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Placeholder Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 14,
  },
});

export default HomeScreen;