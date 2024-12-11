// TopExperts.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TopExperts = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Top Experts</Text>
      {[1, 2, 3, 4].map((_, index) => (
        <View key={index} style={styles.expertCard}>
          <Image source={require('../../assets/images/plumber-with-his-arms-crossed.png')} style={styles.expertImage} />
          <View>
            <Text style={styles.expertName}>Max & Son’s AUTOMOBILE</Text>
            <Text style={styles.expertDetails}>Martins Akin - 4.6 (200 Reviews)</Text>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  expertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  expertImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  expertName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  expertDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default TopExperts;