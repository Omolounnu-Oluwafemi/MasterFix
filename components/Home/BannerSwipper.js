import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const BannerComponent = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        showsPagination
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        loop
      >

        <View style={[styles.slide, { backgroundColor: '#003399' }]}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Getting a quick and quality solution made easy</Text>
          </View>
          <Image
            source={require('../../assets/images/Ellipse.png')}
            style={styles.bgimage}
          />
          <Image
            source={require('../../assets/images/plumber-with-his-arms-crossed.png')}
            style={styles.image}
          />
        </View>
        <View style={[styles.slide, { backgroundColor: '#009900' }]}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>ind the best services in your area</Text>
          </View>
          <Image
            source={require('../../assets/images/Ellipse.png')}
            style={styles.bgimage}
          />
          <Image
            source={require('../../assets/images/plumber-with-his-arms-crossed.png')}
            style={styles.image}
          />
        </View>
        <View style={[styles.slide, { backgroundColor: '#FFC12E' }]}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Get connected with top-rated experts</Text>
          </View>
          <Image
            source={require('../../assets/images/Ellipse.png')}
            style={styles.bgimage}
          />
          <Image
            source={require('../../assets/images/plumber-with-his-arms-crossed.png')}
            style={styles.image}
          />
        </View>
      </Swiper>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
  slide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginTop: 40,
    height: 120
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15,
  },
  image: {
    width: width * 0.3,
    height: width * 0.45,
    marginLeft: 10,
    position: 'absolute',
    right: 2,
    bottom: 0, 
  },
  bgimage: {
    width: width * 0.35,
    left: 5,
  },
  dotStyle: {
    backgroundColor: '#888',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDotStyle: {
    backgroundColor: '#007bff',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default BannerComponent;

