// screens/DetailsAndReviews.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/BackButton';

const solutionImage = require('./../../assets/images/Ellipse 3.png');
const technicianImage = require('./../../assets/images/technicianpics.png');

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
        <View style={styles.headerLeft}>
          <Icon name="globe" size={24} color="grey" style={styles.icon} />
          <TouchableOpacity>
            <Text style={styles.bookNow}>Book Now</Text>
          </TouchableOpacity>
        </View>
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
            <Icon name="call-outline" size={24} color="#003366" style={styles.icon} />
            <Icon name="chatbubble-outline" size={24} color="#003366" style={styles.icon} />
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reviews</Text>

          {/* Review Card 1 */}
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewName}>Joel Yusuf</Text>
              <Text style={styles.reviewDate}>Dec 14, 2024</Text>
            </View>
            <Text style={styles.reviewText}>Worem ipsum dolor sit amet, consectetur</Text>
          </View>

          {/* Review Card 2 */}
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewName}>Evlyn Okoro</Text>
              <Text style={styles.reviewDate}>Dec 14, 2024</Text>
            </View>
            <Text style={styles.reviewText}>Worem ipsum dolor sit amet, consectetur</Text>
          </View>
        </View>

        {/* Graph Section */}
        <View style={styles.graphSection}>
          <Text style={styles.graphTitle}>Bookings Trend</Text>
          <Image
            source={solutionImage}
            style={styles.graphImage}
          />
        </View>
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
    // borderRadius: 6,
    marginRight: 15,
  },
  technicianInfo: {
    flex: 1,
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
  },
  icon: {
    marginHorizontal: 5,
  },
  reviewCard: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewDate: {
    fontSize: 14,
    color: '#666',
  },
  reviewText: {
    fontSize: 16,
    marginTop: 10,
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
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
