import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function BookingForm({ navigation }) {
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Tell us more about this problem"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Select Time</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter time (e.g., 20:00 PM)"
        value={time}
        onChangeText={setTime}
      />

      <Text style={styles.label}>Confirm your address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Success')}
      >
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});