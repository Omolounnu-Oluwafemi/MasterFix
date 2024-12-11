import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "@react-navigation/native";
import HorizontalServices from '../../components/Home/HorizontalServices';
import TopExperts from '../../components/Home/TopExperts';
import TopCategories from '../../components/Home/TopCategories';

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
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="clipboard-list-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Welcome Section */}
      <Text style={styles.welcome}>Welcome back,</Text>
      <Text style={styles.name}>{firstName || 'MasterFix'}</Text>
      <Text style={styles.subName}>What service do you need?</Text>

        {/* Banner Swiper */}
        {/* <BannerSwiper /> */}

        {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#aaa" />
        <TextInput style={styles.searchInput} placeholder="Search for a service or solution" />
        <TouchableOpacity style={styles.tune}>
          <MaterialIcons name="tune" size={24} color="#FFC12E" />
        </TouchableOpacity>
      </View>

      <TopCategories/>

      <HorizontalServices />
      
      {/* How It Works */}
      <Text style={styles.sectionTitle}>How It Works</Text>
      <TouchableOpacity style={styles.videoContainer}>
        <Image source={require('../../assets/images/MasterfixLOGO.png')} style={styles.videoThumbnail} />
        <Ionicons name="play-circle" size={64} color="white" style={styles.playIcon} />
      </TouchableOpacity>

      <TopExperts />
      
      {/* Testimonials */}
      <Text style={styles.sectionTitle}>Testimonies</Text>
      <View style={styles.testimonials}>
        <View style={styles.testimonialCard} />
        <View style={styles.testimonialCard} />
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>Mail: lorem.ipsom@mail.com</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout now</Text>
      </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
    paddingHorizontal: '5%',
    backgroundColor: '#FFFFFF',
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
  bannerContainer:{
    height: '20%',
    marginTop: 16,
  },
  slide: {
    flexDirection: 'row',
    paddingVertical: '8%',
    borderRadius: 15,
    overflow: 'visible',
    position: 'relative', 
  },
  slideText: {
    color: '#fff',
    fontSize: 16,
    width: '70%',
    fontWeight: 'bold',
    textAlign: "left",
    paddingLeft: '5%',
    position: 'relative',
  },
  bannerImage: {
    width: '30%',
    height: '400%',
    resizeMode: 'contain',
    marginTop: 20, 
    alignSelf: 'flex-end',
    position: 'relative',
    bottom: 0,
    // transform: [{ translateY: -100 }], 
    zIndex: 100,
  },
  dotStyle: {
    backgroundColor: '#888',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDotStyle: {
    backgroundColor: '#007bff',
    width: 10,
    height: 10,
    borderRadius: 5,
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
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16
  },
  categoryCard: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 14
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
  testimonials: {
    flexDirection: 'row',
    gap: 16,
    marginVertical: 16
  },
  testimonialCard: {
    flex: 1,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 8
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#888',
    marginVertical: 16
  },
});

export default HomeScreen;