// TopExperts.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const experts = [
  {
    id: 1,
    company: "Max & Son’s AUTOMOBILE",
    name: "Martins Akin",
    details: "4.6 (200 Reviews)",
    image: require('../../assets/images/expert1.png'),
  },
  {
    id: 2,
    company: "Max & Son’s AUTOMOBILE",
    name: "Jane Doe ",
    details: "4.8 (150 Reviews)",
    image: require('../../assets/images/expert2.png'),
  },
  {
    id: 3,
    company: "Max & Son’s AUTOMOBILE",
    name: "John Smith ",
    details: "4.7 (180 Reviews)",
    image: require('../../assets/images/expert3.png'),
  },
  {
    id: 4,
    company: "Max & Son’s AUTOMOBILE",
    name: "Emily Johnson ",
    details: "4.9 (220 Reviews)",
    image: require('../../assets/images/expert4.png'),
  },
];

const TopExperts = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Top Experts</Text>
      {experts.map((expert) => (
        <TouchableOpacity key={expert.id} style={styles.expertCard}>
          <Image source={expert.image} style={styles.expertImage} />
          <View style={styles.expertDetailsContainer}>
            <Text style={styles.expertName}>{expert.company}</Text>
            <Text style={styles.expertDetails}>{expert.name}</Text>
            <Text style={styles.expertDetails}>{expert.details}</Text>
          </View>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    padding: 10,
  },
  expertImage: {
    width: '30%',
    height: 100,
    borderRadius: 15,
  },
  expertDetailsContainer: {
    width: '68%',
    backgroundColor: "#FFC12E26",
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 100,
  },
  expertName: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 10,
    marginBottom: 10
  },
  expertDetails: {
    fontSize: 12,
    color: '#666',
  },
});

export default TopExperts;