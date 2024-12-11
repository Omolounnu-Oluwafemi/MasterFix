// BannerSwiper.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const BannerSwiper = () => {
  return (
    <View style={styles.bannerContainer}>
      <Swiper 
        autoplay 
        showsPagination 
        dotStyle={styles.dotStyle} 
        activeDotStyle={styles.activeDotStyle} 
        loop
      >
        <View style={[styles.slide, { backgroundColor: '#0C4085' }]}>
          <Text style={styles.slideText}>Getting a quick and quality solution made easy</Text>
          <Image source={require('../../assets/images/plumber-with-his-arms-crossed.png')} style={styles.bannerImage} />
        </View>

        <View style={[styles.slide, { backgroundColor: '#009900' }]}>
          <Text style={styles.slideText}>Find the best services in your area</Text>
          <Image source={require('../../assets/images/plumber-with-his-arms-crossed.png')} style={styles.bannerImage} />
        </View>

        <View style={[styles.slide, { backgroundColor: '#cc3300' }]}>
          <Text style={styles.slideText}>Get connected with top-rated experts</Text>
          <Image source={require('../../assets/images/plumber-with-his-arms-crossed.png')} style={styles.bannerImage} />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    height: '20%',
    marginTop: 16,
  },
  slide: {
    flexDirection: 'row',
    paddingVertical: '8%',
    borderRadius: 15,
    overflow: 'visible',
    // position: 'relative', 
  },
  slideText: {
    color: '#fff',
    fontSize: 16,
    width: '70%',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: '5%',
  },
  bannerImage: {
    width: '30%',
    // height: 150, // Adjust the height as needed
    resizeMode: 'contain',
    position: 'absolute', // Use absolute positioning
    bottom: 0, // Align the bottom of the image with the bottom of the container
    left: '70%', // Adjust this value to position the image correctly within the container
    // transform: [{ translateY: -50 }], // Adjust this value to control how much the image extends beyond the top
    // zIndex: 1, // Bring the image to the front
  },
//   dotStyle: {
//     backgroundColor: '#888',
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//   },
//   activeDotStyle: {
//     backgroundColor: '#007bff',
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//   },
});

export default BannerSwiper;