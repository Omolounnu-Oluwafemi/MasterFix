// screens/DetailsAndReviews.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DetailsAndReviews({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>EasyFix.Ng</Text>
        <TouchableOpacity>
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
            source={{ uri: 'https://via.placeholder.com/50' }}
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
            source={{ uri: 'https://via.placeholder.com/300x100' }}
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookNow: {
    color: '#003366',
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
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
    borderRadius: 25,
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
