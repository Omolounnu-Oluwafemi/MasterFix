// HorizontalServices.js
import React from 'react';
import { Text, ScrollView, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const serviceImages = {
  Automobile: require('../../assets/images/automobile.png'),
  'Technical Services': require('../../assets/images/technical.png'),
  Housing: require('../../assets/images/housing.png'),
  Fashion: require('../../assets/images/fashion.png'),
  Health: require('../../assets/images/health.png'),
  Others: require('../../assets/images/others.png'),
  Others: require('../../assets/images/others.png'),
  Others: require('../../assets/images/others.png'),
};

const HorizontalServices = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Services</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {Object.keys(serviceImages).map((service, index) => (
            <TouchableOpacity key={index} style={styles.serviceItem}>
                <View style={styles.serviceIcon}>
                    <Image source={serviceImages[service]}  style={styles.image}/>
                </View>
            <Text style={styles.serviceText}>{service}</Text>
          </TouchableOpacity>
        ))}
          </ScrollView>
          <View style={styles.scrollContainer}>
              <Text style={styles.scroll}>Slide</Text>  
              <AntDesign name="right" size={18} color="#7C7C7F" />
          </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  horizontalScroll: {
    marginVertical: 10,
  },
  serviceItem: {
      alignItems: 'center',
  },
  serviceIcon: {
    backgroundColor: '#000',
    paddingTop: 10,
    marginRight: 10,
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    overflow: 'hidden', 
  },
  image: {
    height: 50,
    width: 100,
    resizeMode: 'contain',
  },
  serviceText: {
    fontSize: 12,
    textAlign: 'center',
  },
    scrollContainer: {
        width: "17%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: '83%'
  },
  scroll: {
    fontSize: 13,
  }
});

export default HorizontalServices;