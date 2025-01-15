import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this installed
import BackButton from '../../components/BackButton';

const schedules = [
  {
    id: '1',
    title: 'Automobile',
    date: 'Wednesday, November 23, 2024',
    time: '01:30 PM - 07:30 PM',
  },
  {
    id: '2',
    title: 'Fashion',
    date: 'Wednesday, November 23, 2024',
    time: '01:30 PM - 07:30 PM',
  },
  {
    id: '3',
    title: 'Technical Services',
    date: 'Wednesday, November 23, 2024',
    time: '01:30 PM - 07:30 PM',
  },
  {
    id: '4',
    title: 'Automobile',
    date: 'Wednesday, November 23, 2024',
    time: '01:30 PM - 07:30 PM',
  },
];

const ScheduleScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="calendar-outline" size={24} color="#2B4C9B" />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <TouchableOpacity>
        <Text style={styles.detailsButton}>See all details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.top}>
          <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.goBack()} />
        </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Schedules</Text>
      </View>

      <FlatList
        data={schedules}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Transactions')}>
        <Text style={styles.historyButtonText}>Transaction History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
  top: {
    alignItems: 'flex-start',
    padding: 10,
    marginTop: '15%',
    marginLeft: '5%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B4C9B',
    marginLeft: 8,
  },
  date: {
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 8,
  },
  detailsButton: {
    fontSize: 14,
    color: '#2B4C9B',
    fontWeight: 'bold',
  },
  historyButton: {
    backgroundColor: '#2B4C9B',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  historyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ScheduleScreen;