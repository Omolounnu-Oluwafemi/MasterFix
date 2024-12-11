// Testimonials.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const testimonials = [
  {
    id: 1,
    text: "Great service! Highly recommend.",
    author: "John Doe",
  },
  {
    id: 2,
    text: "Very professional and quick.",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "Excellent work, very satisfied.",
    author: "Emily Johnson",
  },
  {
    id: 4,
    text: "Amazing experience!",
    author: "Michael Brown",
  },
];

const Testimonials = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Testimonies</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {testimonials.map((testimonial) => (
          <View key={testimonial.id} style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>{testimonial.text}</Text>
            <Text style={styles.testimonialAuthor}>- {testimonial.author}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.scrollContainer}>
        <Text style={styles.scroll}>View more</Text>
        <AntDesign name="right" size={18} color="#7C7C7F" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  testimonialCard: {
    width: 200, // Adjust the width to show two testimonials at a time
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  testimonialText: {
    fontSize: 14,
    color: '#333',
  },
  testimonialAuthor: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  scrollContainer: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: '75%'
  },
  scroll: {
    fontSize: 12,
    color: '#7C7C7F',
  },
});

export default Testimonials;