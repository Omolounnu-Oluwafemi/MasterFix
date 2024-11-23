import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Animated } from "react-native";

const logo = require('./../../assets/images/MasterfixLOGO.png');

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 3000, 
      useNativeDriver: true, 
    }).start();

      const timeout = setTimeout(() => {
            navigation.navigate("LandingPage");
    }, 2000);

    return () => clearTimeout(timeout);
}, [fadeAnim, navigation]);
  
  return (
    <View style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image source={logo} style={styles.logo}/>  
        </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    text: {
      fontSize: 24,
      fontWeight: "bold"
    },
});