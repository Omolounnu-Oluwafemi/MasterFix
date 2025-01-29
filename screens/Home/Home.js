import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "@react-navigation/native";
import HorizontalServices from '../../components/Home/HorizontalServices';
import TopExperts from '../../components/Home/TopExperts';
import TopCategories from '../../components/Home/TopCategories';
import VideoPlayer from '../../components/Home/VideoPlayer';
import Testimonials from '../../components/Home/Testimonials';
import BannerSwipper from '../../components/Home/BannerSwipper';

const HomeScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [location, setLocation] = useState('');
  const { colors } = useTheme();

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
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView showsVerticalScrollIndicator={false} >
      {/* Top Bar */}
      <View style={styles.locations}>
        <Text style={styles.locationText}>Your Location is {location || 'MasterFix'}</Text>
        <FontAwesome name='angle-down' size={15} color={colors.text} style={styles.locationIcon} />
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Ionicons name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Schedules')}>
            <MaterialCommunityIcons name="clipboard-list-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Welcome Section */}
      <Text style={styles.welcome}>Welcome back,</Text>
      <Text style={styles.name}>{firstName || 'MasterFix'}</Text>
      <Text style={styles.subName}>What service do you need?</Text>

        {/* Banner Swiper */}
        <BannerSwipper />

        {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#aaa" />
        <TextInput style={styles.searchInput} placeholder="Search for a service or solution" />
        <TouchableOpacity style={styles.tune}>
          <MaterialIcons name="tune" size={24} color="#FFC12E" />
        </TouchableOpacity>
      </View>

      <TopCategories />

      <HorizontalServices />
      
      {/* How It Works */}
      <Text style={styles.sectionTitle}>How It Works</Text>
      <VideoPlayer />

      <TopExperts />
      <Testimonials/>

      {/* Footer */}
      <Text style={styles.footerText}><Text style={styles.mail}>Mail:</Text> lorem.ipsom@mail.com</Text>
      </ScrollView>

            {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Chat')}>
        <Image source={require('../../assets/images/chatImage.png')} style={styles.floatingButtonImage} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#fff',
  },
  locations: {
    flexDirection: 'row',
  },
  locationIcon: {
    marginLeft: 5,
  },
  locationText: {
    textAlign: 'left',
    fontSize: 12,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2%'
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10
  },
  welcome: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'left',
    marginBottom: 10,
    marginTop: '2%'
  },
  name: {
    fontSize: 22,
    color: '#666',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 15,
  },
  subName: {
    color: '#FFC12E'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingLeft: '5%'
  },
  tune: {
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    borderColor: '#f0f0f0',
    // transform: [{ translateX: -100 }], 
  },
  searchInput: {
    flex: 1,
    marginLeft: 8
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#444446'
  },
  footerText: {
    textAlign: 'left',
    fontSize: 12,
    color: '#888',
    marginVertical: 16
  },
  mail: {
    fontWeight: '700',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  floatingButtonImage: {
    width: 80,
    height: 80,
  },
});

export default HomeScreen;