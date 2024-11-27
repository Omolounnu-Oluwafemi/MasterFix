import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

function SocialButton({
  title,
  onPress,
  width,
  marginRight,
  height,
  marginLeft,
  marginTop,
  marginBottom,
  backgroundColor,
  borderWidth,
  borderLeftWidth,
  borderColor,
  TextColor,
  iconName,
  paddingVertical,
  fontSize = 16,
  loading, 
  borderRadius = 5,
  borderTopStartRadius,
  borderBottomStartRadius,
  linkedInLogo,
  googleLogo,
  emailLogo,
  microsoftLogo,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: backgroundColor || '#013C69' },
        { width },
        { height },
        { marginRight },
        { marginLeft },
        { marginTop },
        { marginBottom },
        { borderWidth },
        { borderLeftWidth },
        { borderColor },
        { paddingVertical },
        { borderRadius },
        { borderTopStartRadius },
        { borderBottomStartRadius },
      ]}
      disabled={loading}  // Disable button when loading
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator color={TextColor || '#fff'} />
        ) : (
          <>
            {googleLogo && <Image source={googleLogo} style={styles.logo} />}
            {linkedInLogo && <Image source={linkedInLogo} style={styles.logo} />}
            {microsoftLogo && <Image source={microsoftLogo} style={styles.logo} />}
            {emailLogo && <MaterialCommunityIcons name="email-outline" size={20} color={TextColor || '#fff'}/>}
              <Text style={[styles.text, { fontSize },{ color: TextColor || '#fff' }]}>
              {title}
            </Text>
          </>
        )}
        {!loading && iconName && (
          <FontAwesome name={iconName} size={22} color="#fff" style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 17,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
  icon: {
    marginLeft: 0,
  },
  logo: {
    alignContent: 'flex-start',
    width: 30,
    height: 30,
  },
});

export default SocialButton;