import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo  } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';
import CustomButton from '../../components/CustomButton';

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
        <Entypo name="pin" size={24} color="#2B4C9B" />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.cardHeader}>
        <Ionicons name="calendar-outline" size={24} color="#2B4C9B" />
        <View style={{ marginLeft: 18, marginTop: 10 }}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
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
      <FlatList
        data={schedules}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

          <CustomButton
            title="Transaction History"
            backgroundColor="#003366"
            TextColor="#fff"
            marginTop={20}
            marginBottom={20}
            onPress={() => navigation.navigate('Transactions')}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: '4%',
  },
  top: {
    alignItems: 'flex-start',
    padding: 10,
    marginTop: '15%',
    marginLeft: '5%',
    marginBottom: '7%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
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
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#193053',
    marginLeft: 18,
  },
  date: {
    fontSize: 14,
    color: '#7C7C7F',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#7C7C7F',
    marginBottom: 8,
  },
  detailsButton: {
    fontSize: 14,
    color: '#193053',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 5,
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