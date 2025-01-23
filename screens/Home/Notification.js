import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';

const notifications = [
  { id: '1', icon: 'notifications-outline', title: 'Reminder', time: '3:21 PM', description: 'Korem ipsum dolor sit amet, consectetur', action: 'Check' },
  { id: '2', icon: 'card-outline', title: 'Debit Card Added!', time: '3:21 PM', description: 'Korem ipsum dolor sit amet, consectetur', action: 'Add' },
  { id: '3', icon: 'checkmark-circle-outline', title: 'Booking Confirmed', time: '3:21 PM', description: 'Korem ipsum dolor sit amet, consectetur', action: null },
  { id: '4', icon: 'pricetag-outline', title: 'Get 30% Discount', time: '3:21 PM', description: 'Korem ipsum dolor sit amet, consectetur', action: null },
  { id: '5', icon: 'person-circle-outline', title: 'Account Setup Successful', time: '3:21 PM', description: 'Korem ipsum dolor sit amet, consectetur', action: null },
];

const NotificationScreen = ({ navigation }) => {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={40} color="#F5A623" />
      </View>
      <View style={{flex: 1}}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.actionContainer}>
          <Text style={styles.description}>{item.description}</Text>
          {item.action && (
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>{item.action}</Text>
            </TouchableOpacity>
          )}
          </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.top}>
          <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.goBack()} />
        </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      <Text style={styles.sectionTitle}>Recent</Text>

      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  top: {
    alignItems: 'flex-start',
    padding: 10,
    marginTop: '15%',
    marginLeft: '5%'
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20, 
    color: '#013C69'
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 16,
    marginVertical: 8,
    color: '#7C7C7F',
    marginTop: 20, 
  },
  listContent: {
    paddingHorizontal: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
    color: '#013C69',
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 4,
    color: '#707072',
  },
  description: {
    width: '70%',
    fontSize: 12,
    lineHeight: 18,
    color: '#707072',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  actionButton: {
    backgroundColor: '#00214D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  actionText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
});

export default NotificationScreen;