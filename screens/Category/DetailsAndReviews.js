// screens/DetailsAndReviews.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BackButton from '../../components/BackButton';
import CustomerSatisfactionChart from '../../components/CustomerSatisfactionChart';

const solutionImage = require('./../../assets/images/Ellipse 3.png');
const technicianImage = require('./../../assets/images/technicianpics.png');

const reviews = [
  {
    id: '1',
    name: 'Joel Yusuf',
    date: 'Dec 14, 2024',
    text: 'Worem ipsum dolor sit amet, consectetur',
    image: require('./../../assets/images/technicianpics.png'),
  },
  {
    id: '2',
    name: 'Evlyn Okoro',
    date: 'Dec 14, 2024',
    text: 'Worem ipsum dolor sit amet, consectetur',
    image: require('./../../assets/images/technicianpics.png'),
  },
  // Add more reviews as needed
];

export default function DetailsAndReviews({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.goBack()} />
      </View>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <Image source={solutionImage} style={{ width: 80, height: 80 }} />
          <View>
            <Text style={styles.headerTitle}>EasyFix.Ng</Text>
            <Text style={styles.bookNow}>Mobile Solution</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.navigate('BookingForm')}>
          <Icon name="globe" size={24} color="grey"  />
            <Text style={styles.bookNow}>Book Now</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* About Organization Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Organization</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
        </View>

        {/* Technician Details Section */}
        <View style={styles.technicianCard}>
          <Image
            source={technicianImage}
            style={styles.technicianImage}
          />
          <View style={styles.technicianInfo}>
            <Text style={styles.technicianName}>Martins Chinedu</Text>
            <Text style={styles.technicianRole}>Mobile Technician</Text>
          </View>
          <View style={styles.contactIcons}>
            <MaterialIcons name="headset-mic" size={24} color="#003366"  style={styles.icon}/>
            <Icon name="chatbox-ellipses-outline" size={24} color="#003366" style={styles.icon} />
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reviews</Text>

          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <Image
                  source={review.image}
                  style={styles.reviewImage}
              />
              <View style={styles.reviewHeader}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <Text style={styles.reviewName}>{review.name}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
                <Text style={styles.reviewText}>{review.text}</Text>
              </View>
              <TouchableOpacity>
                <MaterialCommunityIcons name="dots-horizontal" size={25} color="#B5B5BE" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <CustomerSatisfactionChart />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: '10%'
  },
  top: {
    alignItems: 'flex-start',
    padding: 10,
    marginTop: '15%',
    marginLeft: '5%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  headerLeft: {
    flexDirection: 'Column',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#193053',
  },
  bookNow: {
    color: '#7C7C7F',
    fontWeight: '400',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: '#7C7C7F',
  },
  technicianCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
  },
  technicianImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  technicianInfo: {
    flex: 1,
    gap: 5,
    bottom: 5,
  },
  technicianName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  technicianRole: {
    fontSize: 14,
    color: '#666',
  },
  contactIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    gap: 10,
  }, 
  icon: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#003366',
    borderStyle: 'dashed',
    borderRadius: 50,
  },
  reviewCard: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  reviewImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  reviewHeader: {
    width: '75%',
  },
  reviewName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#171725'
  },
  reviewDate: {
    fontSize: 14,
    color: '#92929D',
  },
  reviewText: {
    fontSize: 14,
    marginTop: 10,
    color: '#44444F',
  },
  graphSection: {
    padding: 20,
    alignItems: 'center',
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  graphImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  }
});
