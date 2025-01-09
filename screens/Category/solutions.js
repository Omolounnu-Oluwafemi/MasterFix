import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

  const { width } = Dimensions.get('window');

const SolutionScreen = () => {
  const [activeTab, setActiveTab] = useState('Outlets');
  const navigation = useNavigation();
  
  // Sample data for services and outlets
  const services = [
    {
      id: '1',
      title: '2 Brake pads replacement',
      price: '₦9,300',
      time: '3 Hours',
      image: 'https://via.placeholder.com/50', // Replace with actual image URL
    },
    {
      id: '2',
      title: '3 Brake pads replacement',
      price: '₦12,300',
      time: '3 Hours',
      image: 'https://via.placeholder.com/50',
    },
  ];

  const outlets = [
    {
      id: '1',
      name: 'Easyfix.Ng',
      address: '14 Morocco Road',
      openTime: '7:00AM - 5:00PM',
      image: require('../../assets/images/repairman.png'), // Replace with actual image URL
    },
    {
      id: '2',
      name: 'FixPro.Ng',
      address: '21 Repair Street',
      openTime: '8:00AM - 6:00PM',
      image: require('../../assets/images/repairman.png'),
    },
  ];

  const renderServiceItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subText}>{item.price}</Text>
        <Text style={styles.subText}>Max completion time: {item.time}</Text>
      </View>
      <TouchableOpacity style={styles.getButton} onPress={() => {navigation.navigate('BookingForm')}}>
        <Text style={styles.buttonText}>Get</Text>
      </TouchableOpacity>
    </View>
  );

  const renderOutletItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.details}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.location}>
          <Text style={styles.tabTitle}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 25, gap: 8 }}>
            <Entypo name="location" size={20} color="#8E98A8" />
            <Text style={styles.subText}>{item.address}</Text>
          </View>
        </View>
        <View styke={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.getButton} onPress={() => {navigation.navigate('BookingForm')}}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        </View>

      </View>
        <Text style={styles.subText}>Open time: {item.openTime}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
    <View style={styles.bannerContainer}>
      {/* Background Image */}
      <Image
        source={require('../../assets/images/solutionsImage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Overlay */}
      <View style={styles.overlay}>
        {/* Back Icon */}
        <TouchableOpacity style={styles.backButton}>
            <MaterialIcons name="arrow-back-ios" size={20} color='#000' style={styles.backIcon} />
            <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Circular Image */}
        <View style={styles.circularImageWrapper}>
          <Image
            source={
              require('../../assets/images/solutionseclipse.png')
            }
            style={styles.circularImage}
          />
        </View>
      </View>
      </View>
      
      <View style={styles.header}>
        <Text style={styles.title}>Car Solutions</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Outlets' && styles.activeTab]}
          onPress={() => setActiveTab('Outlets')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Outlets' && styles.activeTabText,
            ]}>
            Outlets
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Services' && styles.activeTab]}
          onPress={() => setActiveTab('Services')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Services' && styles.activeTabText,
            ]}>
            Services
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
        {activeTab === 'Outlets' ? (
          <FlatList
            data={outlets}
            keyExtractor={(item) => item.id}
            renderItem={renderOutletItem}
          />
        ) : (
          <FlatList
            data={services}
            keyExtractor={(item) => item.id}
            renderItem={renderServiceItem}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  bannerContainer: {
    width: '100%',
    height: width * 0.6, // Set height relative to screen width
    position: 'relative',
    backgroundColor: '#000',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 8,
    top: 26,
    left: 16,
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    backgroundColor: '#fff',
    padding: '3%',
    borderRadius: 50,
  },
  backText: {
    color: '#000',
    fontSize: 20,
  },
  circularImageWrapper: {
    position: 'absolute',
    zIndex: 1,
    bottom: -50,
    left: 30,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  circularImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: '#f8f8f8',
    marginTop: '15%',
    paddingHorizontal: '5%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFC12E',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#013C69',
  },
  tabText: {
    fontSize: 16,
    color: '#A1A1A4',
  },
  activeTabText: {
    color: '#193053',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
    padding: 26,
    marginHorizontal: 16,
    marginTop: '5%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: '30%',
    height: 70,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    width: '40%',
  },
  subText: {
    color: '#8E98A8',
    fontSize: 13,
  },
  tabTitle: {
    fontSize: 18,
    color: '#193053',
  },
  getButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SolutionScreen;