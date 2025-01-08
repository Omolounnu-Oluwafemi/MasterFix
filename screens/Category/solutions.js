import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SolutionScreen = () => {
    const [activeTab, setActiveTab] = useState('Services');
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
      image: 'https://via.placeholder.com/50', // Replace with actual image URL
    },
    {
      id: '2',
      name: 'FixPro.Ng',
      address: '21 Repair Street',
      openTime: '8:00AM - 6:00PM',
      image: 'https://via.placeholder.com/50',
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
      <TouchableOpacity style={styles.getButton} onPress={() => {navigation.navigate('Booking')}}>
        <Text style={styles.buttonText}>Get</Text>
      </TouchableOpacity>
    </View>
  );

  const renderOutletItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subText}>{item.address}</Text>
        <Text style={styles.subText}>Open time: {item.openTime}</Text>
      </View>
      <TouchableOpacity style={styles.getButton} onPress={() => {navigation.navigate('Booking')}}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
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
      <ScrollView>
        {activeTab === 'Services' ? (
          <FlatList
            data={services}
            keyExtractor={(item) => item.id}
            renderItem={renderServiceItem}
          />
        ) : (
          <FlatList
            data={outlets}
            keyExtractor={(item) => item.id}
            renderItem={renderOutletItem}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  backButton: {
    marginRight: 16,
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#aaa',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    flex: 1,
    marginLeft: 16,
  },
  subText: {
    color: '#666',
    fontSize: 14,
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