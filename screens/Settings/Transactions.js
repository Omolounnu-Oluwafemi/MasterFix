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
    image: require('../../assets/images/transactionperson.png'),
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
    image: require('../../assets/images/transactionperson.png'),
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
        image: require('../../assets/images/transactionperson.png'),

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
      <View style={{ flexDirection: 'row', flex: 1, padding: 5 }}>
        <Image source={item.image} style={styles.profileImage} />
        <View style={styles.topDetails}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
            <Text >Booking Id:
              <Text style={styles.bookingId}> {item.bookingId}</Text></Text>
              <View
                style={[
                  styles.statusBadge,
                  item.status === 'On Going' ? styles.onGoingStatus : styles.completedStatus,
                ]}
              >
              <Text style={[styles.statusText, item.status === 'On Going' ? styles.onGoingText : styles.completedText,]}>{item.status}</Text>
            </View>
          </View>

            <View style={styles.statusContainer}>
              <Text style={styles.amount}>{item.amount}</Text>

              <TouchableOpacity>
                <Text style={styles.actionText}>Not satisfied?</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
      
      <View style={{width: '100%', paddingHorizontal: '3%', justifyContent: 'center'}}>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Services</Text>
          <Text style={styles.value}>{item.services}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Company</Text>
          <Text style={styles.value}>{item.company}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Expert</Text>
          <Text style={styles.value}>{item.expert}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Payment Status</Text>
          <Text style={[styles.value, item.paymentStatus === 'Not paid' ? styles.notPaidStatus : styles.cashStatus,]}>{item.paymentStatus}</Text>
        </View>
    </View>
    </View>
  );

  return (
      <View style={styles.container}>
        <View style={styles.top}>
          <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.navigate('Settings')} />
          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={24} color="#000" style={styles.icon} />
            <Ionicons name="search-outline" size={24} color="#000" />
          </View>
        </View>
        <Text style={styles.headerText}>Transactions</Text>

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    marginTop: '15%',
    paddingHorizontal: '8%'
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
    textAlign: 'center',
    marginVertical: 16,
    // justifyContent: 'center',
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
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  onGoingBorder: {
    borderColor: '#F59921',
    borderWidth: 1.5,
  },
  completedBorder: {
    borderColor: '#4CAF50',
    borderWidth: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: '5%'
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topDetails: {
    flex: 1,
  },
  bookingId: {
    fontSize: 13,
    fontWeight: 'bold',
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
    fontWeight: '400',
  },
  value: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 8,
    color: '#444446'
  },
  paymentStatus: (status) => ({
    fontSize: 14,
    fontWeight: '600',
    color: status === 'On Going' ? '#FF0000' : '#4CAF50',
  }),
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
  },
  onGoingStatus: {
    backgroundColor: '#FFF5DC',
  },
  onGoingText: {
    color: '#FFB83D',
  },
  completedText: {
    color: '#FAFAFA',
  },
  notPaidStatus: {
    color: '#FF1A30',
  },
  cashStatus: {
    color: '#34C759',
  },
  completedStatus: {
    backgroundColor: '#0B7B69',
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