import { StyleSheet, View, Image, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { Text } from '../../components/Themed';
import BackButton from '../../components/BackButton';
import CustomButton from '../../components/CustomButton';
const logo = require('./../../assets/images/MasterfixLOGO.png');
import { useTheme } from "@react-navigation/native";

const LandingPage = ({ navigation }) => {
  const { colors } = useTheme();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <BackButton text="Skip" iconPosition="right" alignSelf="flex-end" onPress={()=> navigation.navigate('WelcomeBack')} />
          <Image source={logo} style={styles.logo} />
      <Text style={[styles.text, { color: colors.text }]}> Master Fix It Now...</Text>
      
      <Text style={styles.subtext}>Lorem ipsum dolonsectetur r incididunt ut labore et do</Text>

      <View style={styles.buttons}>
        <CustomButton
          title="Sign up"
          width="50%"
          backgroundColor="#013C69"
          TextColor="#FFFFFF"
          marginTop="30%"
          borderRadius={10}
          onPress={() => navigation.navigate('Register')}
        />
        <CustomButton
          title="Log in"
          width="50%"
          marginTop="30%"
          TextColor= {colors.text}
          borderRadius={10}
          borderWidth={1}
          borderBottomStartRadius={0}
          borderTopStartRadius={0}
          borderLeftWidth={0}
          borderColor='#0000004D'
          onPress={() => navigation.navigate('WelcomeBack')}
        />
        </View>
    </SafeAreaView>
  )
}

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '10%',
    paddingTop: '20%',
    // backgroundColor: '#FFFFFF'
  },
  logo: {
    width: '70%',
    alignSelf: 'center', 
    resizeMode: 'contain',
    transform: [{ rotate: '1.63deg' }],
    marginTop: '30%',
  },
  text: {
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: '#013C69',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  subtext: {
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: 16,
    color: '#A1A1A4',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.1,
    width: '80%',
    marginLeft: '10%',
    marginTop: '5%',
  }, 
  buttons: {
    flexDirection: 'row',
    width: '100%',
  }

})