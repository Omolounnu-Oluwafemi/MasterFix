import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';

const transactions = [
  {
    id: '1',
    bookingId: '#132211',
    amount: '2000',
    status: 'On Going',
    services: 'Plumbing',
    company: 'KKT Housing',
    expert: 'Eng. Shola',
    paymentStatus: 'Not paid',
    paymentType: null,
    image: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    id: '2',
    bookingId: '#132211',
    amount: '2000',
    status: 'Completed',
    services: 'Fashion',
    company: 'B&B Stores',
    expert: 'Eng. Shola',
    paymentStatus: 'M wallet',
    paymentType: 'Wallet',
    image: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    id: '3',
    bookingId: '#132211',
    amount: '2000',
    status: 'Completed',
    services: 'Plumbing',
    company: 'KKT Housing',
    expert: 'Eng. Shola',
    paymentStatus: 'Cash',
    paymentType: 'Cash',
    image: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
];

const TransactionScreen = ({ navigation }) => {
  const renderTransaction = ({ item }) => (
    <View
      style={[
        styles.transactionCard,
        item.status === 'On Going' ? styles.onGoingBorder : styles.completedBorder,
      ]}
    >
      {/* Profile Image */}
      <Image source={{ uri: item.image }} style={styles.profileImage} />

      {/* Transaction Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.bookingId}>Booking Id: {item.bookingId}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.label}>Services</Text>
        <Text style={styles.value}>{item.services}</Text>
        <Text style={styles.label}>Company</Text>
        <Text style={styles.value}>{item.company}</Text>
        <Text style={styles.label}>Expert</Text>
        <Text style={styles.value}>{item.expert}</Text>
        <Text style={styles.label}>Payment Status</Text>
        <Text style={styles.paymentStatus(item.status)}>{item.paymentStatus}</Text>
      </View>

      {/* Status and Action */}
      <View style={styles.statusContainer}>
        <View
          style={[
            styles.statusBadge,
            item.status === 'On Going' ? styles.onGoingStatus : styles.completedStatus,
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.actionText}>Not satisfied?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
      <View style={styles.container}>
        <View style={styles.top}>
          <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.goBack()} />
        </View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Transactions</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="#000" style={styles.icon} />
          <Ionicons name="search-outline" size={24} color="#000" />
        </View>
      </View>

      {/* Transaction List */}
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 16,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  onGoingBorder: {
    borderColor: '#F5A623',
  },
  completedBorder: {
    borderColor: '#4CAF50',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  bookingId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6E6E6E',
  },
  label: {
    fontSize: 12,
    color: '#6E6E6E',
    marginTop: 8,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
  },
  paymentStatus: (status) => ({
    fontSize: 14,
    fontWeight: '600',
    color: status === 'On Going' ? '#FF0000' : '#4CAF50',
  }),
  statusContainer: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  onGoingStatus: {
    backgroundColor: '#FFE4B3',
  },
  completedStatus: {
    backgroundColor: '#C8E6C9',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  actionText: {
    fontSize: 12,
    color: '#F5A623',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
});

export default TransactionScreen;